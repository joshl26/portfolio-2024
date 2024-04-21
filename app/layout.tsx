import type { Metadata } from "next";
import { Lusitana, Raleway, Nunito, Cabin, Noto_Sans } from "next/font/google";
import ResponsiveFooter from "@/app/ui/ResponsiveFooter";
import ResponsiveHeader from "@/app/ui/ResponsiveHeader";
import ResponsiveMenu from "@/app/ui/ResponsiveMenu";
import MenuContextProvider from "@/context/menu-context";
import "@/app/globals.css";
import CursorContainer from "./CursorContainer";
import { SandpackCSS } from "./blog/[slug]/sandpack";

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
  variable: "--font-raleway",
  weight: ["300", "400"],
});

// export const metadata: Metadata = {
//   title: "Josh Lehman | Digital Craftsman",
//   description: "Created with NextJS and Typescript",
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://joshlehman.ca"),
  title: {
    default: "Joshua Lehman | Digital Craftsman",
    template: "Joshua Lehman | %s",
  },
  description: "Digital Craftsman",
  openGraph: {
    title: "Joshua Lehman",
    description: "Digital Craftsman",
    url: "https://joshlehman.ca",
    siteName: "Joshua Lehman",
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
    title: "Joshua Lehman",
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
        <SandpackCSS />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${lusitana.variable} ${raleway.variable} ${nunito.variable} ${cabin.variable} ${noto_sans.variable} antialiased w-full h-full`}
      >
        <CursorContainer>
          <MenuContextProvider>
            <div className="w-full m-auto">
              <ResponsiveHeader />
              <ResponsiveMenu />
              {children}
              <ResponsiveFooter />
            </div>
          </MenuContextProvider>
        </CursorContainer>
      </body>
    </html>
  );
}
