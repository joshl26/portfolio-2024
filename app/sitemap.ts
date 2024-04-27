import { getBlogPosts } from "@/app/db/blog";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  let blogs = getBlogPosts().map((post) => ({
    url: `${process.env.DEPLOYMENT_URL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = [
    "/",
    "/about",
    "/blog",
    "/contact",
    "/guestbook",
    "/portfolio",
    "/portfolio/e-commerce/beanbag-coffee-co",
    "/portfolio/e-commerce/cleaner-by-design",
    "/portfolio/el-in",
    "/portfolio/outdoorsy",
    "/portfolio/pomodor",
    "/portfolio/resume-wrangler",
    "/portfolio/3dportfolio",
  ].map((route) => ({
    url: `${process.env.DEPLOYMENT_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
