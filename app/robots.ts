import { MetadataRoute } from "next";

// Cache the base URL to avoid repeated environment variable access
const BASE_URL = process.env.DEPLOYMENT_URL || "https://joshlehman.ca";

// Static robots configuration - defined once to prevent object recreation
const ROBOTS_CONFIG: MetadataRoute.Robots = {
  rules: [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/privacy"],
    },
  ],
  sitemap: `${BASE_URL}/sitemap.xml`,
  // Uncomment if you need host specification
  // host: BASE_URL,
};

export default function robots(): MetadataRoute.Robots {
  return ROBOTS_CONFIG;
}
