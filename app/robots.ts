export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${process.env.DEPLOYMENT_URL}/sitemap.xml`,
    host: `${process.env.DEPLOYMENT_URL}`,
  };
}
