import { getBlogPosts } from "@/app/db/blog";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://joshlehman.ca/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/guestbook",
    "/portfolio",
  ].map((route) => ({
    url: `https://joshlehman.ca${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
