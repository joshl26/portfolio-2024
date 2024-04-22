import React from "react";
import "@/app/ui/Portfolio.css";
import ThreeDPortfolioSection from "@/app/ui/ThreeDPortfolioSection";

export const metadata = {
  title: "3D Interactive Portfolio",
  description: "Learn about my interactive 3D animated portfolio site!",
};

const Page = () => {
  return (
    <main className="main-container">
      <ThreeDPortfolioSection />
    </main>
  );
};

export default Page;
