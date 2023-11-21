export async function GET() {
  // const res = await fetch("https://data.mongodb-api.com/...", {
  //   headers: {
  //     "Content-Type": "application/json",
  //     "API-Key": process.env.DATA_API_KEY,
  //   },
  // });

  return Response.json({
    EMAIL_JS_SERVICEID: process.env.EMAIL_JS_SERVICEID,
    EMAIL_JS_TEMPLATEID: process.env.EMAIL_JS_TEMPLATEID,
    EMAIL_JS_PUBLIC_KEY: process.env.EMAIL_JS_PUBLIC_KEY,
  });
}
