import { getBlogPosts } from "@/app/db/blog";
import { MetadataRoute } from "next";

// Static routes configuration - moved outside function to prevent recreation
const STATIC_ROUTES = [
  "about",
  "blog",
  "contact",
  "guestbook",
  "portfolio",
  "portfolio/lucha-tacos",
  "portfolio/resume-wrangler",
  "privacy",
] as const;

// Cache the current date to avoid multiple Date() calls
const CURRENT_DATE = new Date().toISOString().split("T")[0];

// Cache base URL to avoid repeated env access
const BASE_URL = process.env.DEPLOYMENT_URL || "https://joshlehman.ca";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Parallel processing: get blog posts while building static routes
    const [blogPosts] = await Promise.all([getBlogPosts()]);

    // Pre-allocate array size for better performance
    const totalSize = STATIC_ROUTES.length + blogPosts.length;
    const sitemap: MetadataRoute.Sitemap = new Array(totalSize);

    let index = 0;

    // Build static routes first (faster)
    for (const route of STATIC_ROUTES) {
      sitemap[index++] = {
        url: `${BASE_URL}/${route}`,
        lastModified: CURRENT_DATE,
        changeFrequency: "monthly", // Add for better SEO
        priority: route === "blog" ? 0.9 : 0.8, // Prioritize blog listing
      };
    }

    // Build blog routes
    for (const post of blogPosts) {
      sitemap[index++] = {
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt,
        changeFrequency: "weekly", // Blog posts change less frequently
        priority: 0.7,
      };
    }

    return sitemap;
  } catch (error) {
    console.error("Error generating sitemap:", error);

    // Fallback: return at least static routes
    return STATIC_ROUTES.map((route) => ({
      url: `${BASE_URL}/${route}`,
      lastModified: CURRENT_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  }
}
