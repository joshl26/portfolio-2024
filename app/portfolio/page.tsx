import "@/app/ui/Portfolio.css";
import { lazy, Suspense } from "react";

// Lazy load the heavy PortfolioSection component
const PortfolioSection = lazy(() => import("../ui/PortfolioSection"));

export const metadata = {
  title: "Portfolio",
  description: "Peruse some of my latest creations in the portfolio gallery.",
  alternates: {
    canonical: `/portfolio`,
  },
};

const Portfolio = () => {
  return (
    <main className="max-w-screen-xl m-auto px-3">
      <section className="portfolio-section">
        <h1 className="portfolio-h1">Portfolio</h1>
      </section>
      <section className="portfolio-main-section">
        <Suspense
          fallback={<div className="loading-spinner">Loading portfolio...</div>}
        >
          <PortfolioSection />
        </Suspense>
      </section>
    </main>
  );
};

export default Portfolio;
