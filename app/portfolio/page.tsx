import { lazy, Suspense } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

export const metadata = {
  title: "Portfolio | Selected Projects & Case Studies",
  description:
    "A curated gallery of projects showcasing web apps, design, and engineering decisions.",
  keywords: "portfolio, projects, case studies, web development, react, nextjs",
  alternates: {
    canonical: "/portfolio/",
  },
};

const PortfolioSection = lazy(() => import("../ui/PortfolioSection"));

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Portfolio", url: "/portfolio/" },
];

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Decorative backgrounds (gold & grey) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(75,85,99,0.05),transparent_40%)] pointer-events-none" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 xl:px-0 py-12">
        <div className="pt-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero */}
        <section className="text-center max-w-4xl mx-auto py-12">
          <h1
            className="portfolio-h1 bg-gradient-to-r from-white via-amber-200 to-amber-400 
                       bg-clip-text text-transparent mb-6 tracking-tight
                       text-5xl md:text-6xl lg:text-7xl font-extrabold"
          >
            Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Selected projects highlighting UI/UX, architecture, and engineering.
            Explore case studies, live demos, and source code.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span>Featured work</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" />
              <span>Production ready</span>
            </div>
          </div>
        </section>

        {/* Portfolio list (lazy loaded with Suspense) */}
        <section className="mb-16">
          <Suspense
            fallback={
              <div className="flex flex-col gap-6">
                <div className="h-48 rounded-2xl bg-gray-800/50 animate-pulse" />
                <div className="h-48 rounded-2xl bg-gray-800/50 animate-pulse" />
                <div className="h-48 rounded-2xl bg-gray-800/50 animate-pulse" />
              </div>
            }
          >
            <PortfolioSection />
          </Suspense>
        </section>
      </div>
    </main>
  );
};

export default Portfolio;
