"use server";

import { type Session } from "next-auth";
import { conn } from "./postgres";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export async function increment(slug: string): Promise<void> {
  noStore();

  try {
    // Use parameterized query to prevent SQL injection
    const query = `INSERT INTO views (slug, count) VALUES ($1, 1) ON CONFLICT (slug) DO UPDATE SET count = views.count + 1`;
    await conn.query(query, [slug]);
  } catch (error: any) {
    console.error("Database Error:", error);
    throw new Error("Failed to increment view count");
  }
}

async function getSession(): Promise<Session> {
  const session = await getServerSession(options);

  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }

  return session;
}

export async function saveGuestbookEntry(formData: FormData): Promise<void> {
  const session = await getSession();
  const email = session.user?.email as string;
  const created_by = session.user?.name as string;

  if (!session.user) {
    throw new Error("Unauthorized");
  }

  const entry = formData.get("entry")?.toString() || "";
  const body = entry.slice(0, 500).trim();

  if (!body) {
    throw new Error("Entry cannot be empty");
  }

  try {
    // Use parameterized query to prevent SQL injection
    const query = `INSERT INTO guestbook (email, body, created_by, created_at) VALUES ($1, $2, $3, NOW())`;
    await conn.query(query, [email, body, created_by]);
    revalidatePath("/guestbook");
  } catch (error: any) {
    console.error("Database Error:", error);
    throw new Error("Failed to save guestbook entry");
  }
}

export async function deleteGuestbookEntries(
  selectedEntries: string[]
): Promise<void> {
  const session = await getSession();
  const email = session.user?.email as string;

  if (email !== "joshlehman.dev@gmail.com") {
    throw new Error("Unauthorized");
  }

  const selectedEntriesAsNumbers = selectedEntries.map(Number);

  // Validate that all entries are valid numbers
  if (selectedEntriesAsNumbers.some(isNaN)) {
    throw new Error("Invalid entry IDs provided");
  }

  try {
    // Use parameterized query with ANY() for safe array handling
    const query = `DELETE FROM guestbook WHERE id = ANY($1::int[])`;
    await conn.query(query, [selectedEntriesAsNumbers]);
    revalidatePath("/admin");
    revalidatePath("/guestbook");
  } catch (error: any) {
    console.error("Database Error:", error);
    throw new Error("Failed to delete guestbook entries");
  }
}
