import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");
  const postDate = searchParams.get("date");

  const fontOne = fetch(
    new URL("../../public/fonts/Raleway-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontOneData = await fontOne;

  const fontTwo = fetch(
    new URL("../../public/fonts/Roboto-Light.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontTwoData = await fontTwo;

  const fontThree = fetch(
    new URL("../../public/fonts/Roboto-MediumItalic.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontThreeData = await fontThree;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: "black",
          backgroundImage: `url(${process.env.DEPLOYMENT_URL}/og-bg.png)`,
          backgroundSize: "1920px 1080px",
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: "flex",
            flexDirection: "column",
            fontSize: "5rem",
            fontFamily: "Raleway-Bold",
            fontStyle: "normal",
            color: "white",
          }}
        >
          <h5
            style={{ fontFamily: "Roboto-Medium-Italic", fontStyle: "italic" }}
          >
            Josh Lehman&apos;s Blog
          </h5>
          <p
            style={{
              fontSize: "3rem",
              fontFamily: "Roboto-Light",
              fontStyle: "normal",
              letterSpacing: "0.75rem",
              lineHeight: "0.5rem",
              height: "5px",
            }}
          >
            {postDate}
          </p>
          <h1 style={{ lineHeight: "5rem", height: "5px", marginTop: "0" }}>
            {postTitle}
          </h1>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Raleway-Bold",
          data: fontOneData,
          style: "normal",
        },
        {
          name: "Roboto-Light",
          data: fontTwoData,
          style: "normal",
        },
        {
          name: "Roboto-Medium-Italic",
          data: fontThreeData,
          style: "italic",
        },
      ],
    }
  );
}
