import type { Metadata } from "next";
import { Lusitana, Raleway, Nunito, Cabin, Noto_Sans } from "next/font/google";
import ResponsiveFooter from "@/app/ui/ResponsiveFooter";
import ResponsiveHeader from "@/app/ui/ResponsiveHeader";
import ResponsiveMenu from "@/app/ui/ResponsiveMenu";
import MenuContextProvider from "@/context/menu-context";
import "@/app/globals.css";

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
  title: "Josh Lehman | Digital Craftsman",
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
        suppressHydrationWarning={true}
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
