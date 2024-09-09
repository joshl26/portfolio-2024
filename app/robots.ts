import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/privacy"],
      },
    ],
    sitemap: `${process.env.DEPLOYMENT_URL}/sitemap.xml`,
    // host: `${process.env.DEPLOYMENT_URL}`,
  };
}
