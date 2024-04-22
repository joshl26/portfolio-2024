import React from "react";
import "@/app/ui/Portfolio.css";
import PortfolioSection from "../ui/PortfolioSection";

export const metadata = {
  title: "Portfolio",
  description: "Peruse some of my latest creations in the portfolio gallery.",
};

const Portfolio = () => {
  return (
    <main className="max-w-screen-xl m-auto">
      <section className="portfolio-section">
        <h1 className="portfolio-h1">Portfolio</h1>
      </section>
      <section className="portfolio-main-section">
        <PortfolioSection />
      </section>
    </main>
  );
};

export default Portfolio;
