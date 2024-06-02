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
    siteName: "Joshua Lehman | Digital Craftsman",
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
        <CursorContainer>
          <MenuContextProvider>
            <div className="w-full overflow-x-hidden m-auto">
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
