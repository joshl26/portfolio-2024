"use server";

import { type Session } from "next-auth";
import { query } from "./postgres";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export async function increment(slug: string): Promise<void> {
  noStore();

  try {
    // Use parameterized query to prevent SQL injection
    const queryText = `
      INSERT INTO views (slug, count) 
      VALUES ($1, 1) 
      ON CONFLICT (slug) 
      DO UPDATE SET count = views.count + 1
    `;
    await query(queryText, [slug]);
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
    const queryText = `
      INSERT INTO guestbook (email, body, created_by, created_at) 
      VALUES ($1, $2, $3, NOW())
    `;
    await query(queryText, [email, body, created_by]);
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
    throw new Error("Unauthorized: Only admin can delete entries");
  }

  if (selectedEntries.length === 0) {
    throw new Error("No entries selected for deletion");
  }

  try {
    // Create placeholders for the IN clause
    const placeholders = selectedEntries
      .map((_, index) => `$${index + 1}`)
      .join(", ");
    const queryText = `DELETE FROM guestbook WHERE id IN (${placeholders})`;

    await query(queryText, selectedEntries);
    revalidatePath("/guestbook");
  } catch (error: any) {
    console.error("Database Error:", error);
    throw new Error("Failed to delete guestbook entries");
  }
}

// Server action for validating guestbook entry
export async function validateGuestbookEntry(
  entry: string
): Promise<{ isValid: boolean; error?: string }> {
  if (!entry || entry.trim().length === 0) {
    return { isValid: false, error: "Entry cannot be empty" };
  }

  if (entry.length > 500) {
    return { isValid: false, error: "Entry must be 500 characters or less" };
  }

  return { isValid: true };
}

// Server action to get user role
export async function getUserRole(): Promise<"admin" | "user" | null> {
  try {
    const session = await getServerSession(options);

    if (!session?.user?.email) {
      return null;
    }

    return session.user.email === "joshlehman.dev@gmail.com" ? "admin" : "user";
  } catch (error) {
    console.error("Error getting user role:", error);
    return null;
  }
}

// Server action to test database connection
export async function testDatabaseConnection(): Promise<boolean> {
  try {
    const testQuery = "SELECT 1 as test";
    await query(testQuery);
    return true;
  } catch (error) {
    console.error("Database connection test failed:", error);
    return false;
  }
}

// Server action to get guestbook stats (admin only)
export async function getGuestbookStats(): Promise<{
  totalEntries: number;
  totalUsers: number;
} | null> {
  const session = await getSession();
  const email = session.user?.email as string;

  if (email !== "joshlehman.dev@gmail.com") {
    throw new Error("Unauthorized: Admin access required");
  }

  try {
    const entriesQuery = "SELECT COUNT(*) as total FROM guestbook";
    const usersQuery = "SELECT COUNT(DISTINCT email) as total FROM guestbook";

    const [entriesResult, usersResult] = await Promise.all([
      query(entriesQuery),
      query(usersQuery),
    ]);

    return {
      totalEntries: parseInt(entriesResult.rows[0].total),
      totalUsers: parseInt(usersResult.rows[0].total),
    };
  } catch (error: any) {
    console.error("Database Error:", error);
    throw new Error("Failed to get guestbook stats");
  }
}
