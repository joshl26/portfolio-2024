import { getBlogPosts } from "@/app/db/blog";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await getBlogPosts();
  let blogs = response.map((post) => ({
    url: `${process.env.DEPLOYMENT_URL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = [
    "about",
    "blog",
    "contact",
    "guestbook",
    "portfolio",
    "portfolio/e-commerce/beanbag-coffee-co",
    "portfolio/e-commerce/cleaner-by-design",
    "portfolio/el-in",
    "portfolio/outdoorsy",
    "portfolio/pomodor",
    "portfolio/resume-wrangler",
    "portfolio/3dportfolio",
    "portfolio/blackrock-3d",
    "portfolio/nyemfg",
  ].map((route) => ({
    url: `${process.env.DEPLOYMENT_URL}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
