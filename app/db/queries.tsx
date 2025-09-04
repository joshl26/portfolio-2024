"use server";

import { query } from "./postgres";
import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from "next/cache";

export async function getBlogViews(): Promise<number> {
  if (!process.env.POSTGRES_DB_HOST) {
    return 0;
  }

  noStore();

  try {
    const queryText = `SELECT count FROM views`;
    const result = await query(queryText);
    return result.rows.reduce(
      (acc: number, curr: any) => acc + Number(curr.count),
      0
    );
  } catch (error: any) {
    console.error("Database Error:", error);
    return 0;
  }
}

export async function getViewsCount(): Promise<
  { slug: string; count: number }[]
> {
  if (!process.env.POSTGRES_DB_HOST) {
    return [];
  }

  noStore();

  try {
    const queryText = `SELECT slug, count FROM views`;
    const result = await query(queryText);
    return result.rows;
  } catch (error: any) {
    console.error("Database Error:", error);
    return [];
  }
}

export async function getGuestbookEntries(): Promise<any[]> {
  if (!process.env.POSTGRES_DB_HOST) {
    return [];
  }

  noStore();

  try {
    const queryText = `
      SELECT id, body, created_by, created_at 
      FROM guestbook 
      ORDER BY created_at DESC
    `;
    const result = await query(queryText);
    return result.rows;
  } catch (error: any) {
    console.error("Database Error:", error);
    return [];
  }
}

// Cache expensive operations
export const getCachedBlogViews = cache(
  async () => {
    return await getBlogViews();
  },
  ["blog-views"],
  {
    revalidate: 3600, // 1 hour
  }
);

export const getCachedViewsCount = cache(
  async () => {
    return await getViewsCount();
  },
  ["views-count"],
  {
    revalidate: 3600, // 1 hour
  }
);
