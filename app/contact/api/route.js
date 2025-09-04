// route.js - Add caching headers to reduce calls
export async function GET() {
  const response = Response.json({
    EMAIL_JS_SERVICEID: process.env.EMAIL_JS_SERVICEID,
    EMAIL_JS_TEMPLATEID: process.env.EMAIL_JS_TEMPLATEID,
    EMAIL_JS_PUBLIC_KEY: process.env.EMAIL_JS_PUBLIC_KEY,
  });

  // Cache for 1 hour to reduce repeated calls
  response.headers.set("Cache-Control", "public, max-age=3600");

  return response;
}
