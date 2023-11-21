import MenuContextProvider from "@/context/menu-context";
import type { Metadata } from "next";
import { Lusitana, Raleway, Nunito, Cabin, Noto_Sans } from "next/font/google";
import "./globals.css";
import ResponsiveFooter from "./ui/ResponsiveFooter";
import ResponsiveHeader from "./ui/ResponsiveHeader";
import ResponsiveMenu from "./ui/ResponsiveMenu";

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

export const metadata: Metadata = {
  title: "J  Lehman | Digital Crfatsman",
  description: "Created with NextJS and Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lusitana.variable} ${raleway.variable} ${nunito.variable} ${cabin.variable} ${noto_sans.variable} antialiased
          main-container`}
      >
        <MenuContextProvider>
          <ResponsiveHeader />
          <ResponsiveMenu />
          {children}
          <ResponsiveFooter />
        </MenuContextProvider>
      </body>
    </html>
  );
}
