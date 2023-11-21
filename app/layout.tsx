import MenuContextProvider from "@/context/menu-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveFooter from "./ui/ResponsiveFooter";
import ResponsiveHeader from "./ui/ResponsiveHeader";
import ResponsiveMenu from "./ui/ResponsiveMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Josh Lehman Portfolio",
  description: "Created with NextJS and Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} + main-container`}>
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
