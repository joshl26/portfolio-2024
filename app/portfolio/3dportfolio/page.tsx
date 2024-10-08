import React from "react";
import "@/app/ui/Portfolio.css";
import ThreeDPortfolioSection from "@/app/ui/ThreeDPortfolioSection";

export const metadata = {
  title: "3D Interactive Portfolio",
  description: "Learn about my interactive 3D animated portfolio site!",
  alternates: {
    canonical: `/portfolio/3dportfolio`,
  },
};

const Page = () => {
  return (
    <main className="max-w-screen-xl m-auto">
      <ThreeDPortfolioSection />
    </main>
  );
};

export default Page;
