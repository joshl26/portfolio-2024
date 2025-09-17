import type { Metadata } from "next";
import {
  Lusitana,
  Raleway,
  Nunito,
  Cabin,
  Noto_Sans,
  Roboto,
  Ubuntu,
} from "next/font/google";
import ResponsiveFooter from "@/app/ui/ResponsiveFooter";
import ResponsiveHeader from "@/app/ui/ResponsiveHeader";
import ResponsiveMenu from "@/app/ui/ResponsiveMenu";
import MenuContextProvider from "@/context/menu-context";
import "@/app/globals.css";
import CursorContainer from "./components/CursorContainer";
import { SandpackCSS } from "./blog/[slug]/sandpack";
import { GoogleAnalytics } from "@next/third-parties/google";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200"],
  variable: "--font-noto-sans",
});

const cabin = Cabin({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-cabin",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["200"],
  variable: "--font-nunito",
});
const lusitana = Lusitana({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-lusitana",
});
const raleway = Raleway({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["100", "400"],
});

const roboto = Roboto({
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joshlehman.ca/"),
  title: {
    default: "Josh Lehman Portfolio Site",
    template: "%s | Josh Lehman Portfolio Site",
  },
  description:
    "Josh Lehman | Software Engineer | Web Developer | Digital Craftsman. Come see my software engineering and web development projects.",
  openGraph: {
    title: "Josh Lehman Portfolio Site",
    description:
      "Josh Lehman | Software Engineer | Web Developer | Digital Craftsman. Come see my software engineering and web development projects.",
    url: "https://joshlehman.ca",
    siteName:
      "Josh Lehman | Software Engineer | Web Developer | Digital Craftsman",
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title:
      "Josh Lehman | Software Engineer | Web Developer | Digital Craftsman",
    card: "summary_large_image",
  },
  verification: {
    // google: "",
    // yandex: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="javascript, C++, blog, software development, software engineering, seo, web development, software engineer, engineering blog, seo blog, web development blog, artificial intelligence"
        ></meta>
        <SandpackCSS />
        <meta
          name="google-adsense-account"
          content="ca-pub-2880932731702994"
        ></meta>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2880932731702994"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${lusitana.variable} ${raleway.variable} ${nunito.variable} ${cabin.variable} ${noto_sans.variable} ${roboto.variable} antialiased w-full h-full`}
      >
        {/* <CursorContainer> */}
        <MenuContextProvider>
          <div className="min-h-screen flex flex-col">
            <ResponsiveHeader />
            {/* <ResponsiveMenu /> */}
            {children}
            <ResponsiveFooter />
          </div>
        </MenuContextProvider>
        {/* </CursorContainer> */}
      </body>
      <GoogleAnalytics gaId="G-M9Y769WX7E" />
    </html>
  );
}
