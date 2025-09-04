"use server";

// import { auth, youtube } from "@googleapis/youtube";
import { conn } from "./postgres";

import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from "next/cache";

// let googleAuth = new auth.GoogleAuth({
//   credentials: {
//     client_email: process.env.GOOGLE_CLIENT_EMAIL,
//     private_key: process.env.GOOGLE_PRIVATE_KEY,
//   },
//   scopes: ["https://www.googleapis.com/auth/youtube.readonly"],
// });

// let yt = youtube({
//   version: "v3",
//   auth: googleAuth,
// });

export async function getBlogViews(): Promise<number> {
  if (!process.env.POSTGRES_DB_HOST) {
    return 0;
  }

  noStore();

  try {
    const query = `SELECT count FROM views`;
    const result = await conn.query(query);
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
    const query = `SELECT slug, count FROM views`;
    const result = await conn.query(query);
    return result.rows;
  } catch (error: any) {
    console.error("Database Error:", error);
    return [];
  }
}

// export const getLeeYouTubeSubs = cache(
//   async () => {
//     let response = await yt.channels.list({
//       id: ["UCZMli3czZnd1uoc1ShTouQw"],
//       part: ["statistics"],
//     });

//     let channel = response.data.items![0];
//     return Number(channel?.statistics?.subscriberCount).toLocaleString();
//   },
//   ["leerob-youtube-subs"],
//   {
//     revalidate: 3600,
//   }
// );

// export const getVercelYouTubeSubs = cache(
//   async () => {
//     let response = await yt.channels.list({
//       id: ["UCLq8gNoee7oXM7MvTdjyQvA"],
//       part: ["statistics"],
//     });

//     let channel = response.data.items![0];
//     return Number(channel?.statistics?.subscriberCount).toLocaleString();
//   },
//   ["vercel-youtube-subs"],
//   {
//     revalidate: 3600,
//   }
// );

export async function getGuestbookEntries(): Promise<any[]> {
  if (!process.env.POSTGRES_DB_HOST) {
    return [];
  }

  noStore();

  try {
    const query = `SELECT id, body, created_by, updated_at FROM guestbook ORDER BY created_at DESC LIMIT 100`;
    const result = await conn.query(query);
    return result.rows;
  } catch (error: any) {
    console.error("Database Error:", error);
    return [];
  }
}
