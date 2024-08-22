export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${process.env.DEPLOYMENT_URL}/sitemap.xml`,
    host: `${process.env.DEPLOYMENT_URL}`,
  };
}
