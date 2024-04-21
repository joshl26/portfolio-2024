import React from "react";
import "@/app/ui/Portfolio.css";
import PortfolioSection from "../ui/PortfolioSection";

export const metadata = {
  title: "Portfolio",
  description: "Peruse my latest creations. Behold the portfolio gallery.",
};

const Portfolio = () => {
  return (
    <div>
      <section className="portfolio-section">
        <h1 className="portfolio-h1">Portfolio</h1>
      </section>
      <PortfolioSection />
    </div>
  );
};

export default Portfolio;
