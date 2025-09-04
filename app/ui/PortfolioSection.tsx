"use client";

import React, { useState, useMemo } from "react";
import { lazy, Suspense } from "react";

// Type definitions
interface PortfolioLinks {
  code?: string;
  live?: string;
  more?: string;
}

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  status?: string;
  images: string[];
  tech: string[];
  links: PortfolioLinks;
  href: string;
}

interface PortfolioItemProps {
  item: PortfolioItem;
  index: number;
}

// Lazy load heavy dependencies
const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.div }))
);
const CldImage = lazy(() =>
  import("next-cloudinary").then((mod) => ({ default: mod.CldImage }))
);
const RoundButton = lazy(() => import("@/app/ui/RoundButton"));
const TransitionLink = lazy(() =>
  import("../utils/TransitionLink").then((mod) => ({
    default: mod.TransitionLink,
  }))
);

// Portfolio data moved to separate constant to reduce inline code
const portfolioItems: PortfolioItem[] = [
  {
    id: "jack-o-lantern",
    title: "Jack-O-Lantern Ai",
    description: "Generate pumpkin carving templates with the power of Ai.",
    status: "COMING SOON - OCTOBER 2024",
    images: [
      "v1726856183/JackOLanternAi/homepage_tgtubt.jpg",
      "v1726856237/JackOLanternAi/homepage_banner_grey_il17ux.jpg",
      "v1726856278/JackOLanternAi/8_msg7ff.jpg",
    ],
    tech: ["NEXTJS", "TAILWINDCSS", "TRPC", "DRIZZLE", "POSTGRESQL", "DOCKER"],
    links: {
      code: "#",
      live: "https://jackolanternai.com",
      more: "https://www.producthunt.com/posts/jack-o-lantern-ai/maker-invite?code=AMwAjM",
    },
    href: "https://jackolanternai.com",
  },
  {
    id: "lucha-tacos",
    title: "Lucha Tacos",
    description:
      "Bring the dynamic and lively flavors of Mexico to your dining experience.",
    images: [
      "v1718930369/PortfolioSite/lucha-tacos-screen_1_o70hjo.png",
      "v1718930369/PortfolioSite/lucha-tacos-screen_2_kdh3wm.png",
      "v1718930368/PortfolioSite/lucha-tacos-screen_4_dwtqru.png",
    ],
    tech: ["JAVASCRIPT", "TAILWINDCSS", "BABEL", "WEBPACK", "GIT", "CI/CD"],
    links: {
      code: "https://github.com/joshl26/lucha-tacos",
      live: "https://lucha-tacos.vercel.app/",
      more: "/portfolio/lucha-tacos",
    },
    href: "/portfolio/lucha-tacos",
  },
  {
    id: "resume-wrangler",
    title: "Résumé Wrangler",
    description:
      "Resume Wrangler is an innovative and dynamic tool created to redefine the way job seekers prepare their application documents.",
    images: [
      "v1713540526/PortfolioSite/Resume_Wrangler_Landing_Page_1_n2arsw.png",
      "v1713749845/ResumeWrangler/Resume_Wrangler_Dashboard_Page_1_lghqt5.png",
      "v1713749853/ResumeWrangler/Resume_Wrangler_Resume_Styling_Page_1_guydrc.png",
    ],
    tech: ["TYPESCRIPT", "TAILWINDCSS", "POSTGRESQL", "REACTJS", "NEXTJS"],
    links: {
      code: "https://github.com/joshl26/resume-wrangler",
      live: "https://resume-wrangler.vercel.app/",
      more: "/portfolio/resume-wrangler",
    },
    href: "/portfolio/resume-wrangler",
  },
  // Add more items as needed...
];

const PortfolioItemComponent: React.FC<PortfolioItemProps> = ({
  item,
  index,
}) => (
  <Suspense
    fallback={<div className="animate-pulse bg-gray-200 h-64 rounded"></div>}
  >
    <div className="portfolio-grid">
      <div className="portfolio-container mt-2">
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5, delay: index * 0.1 },
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <TransitionLink className="" href={item.href}>
            {item.images.map((src, idx) => (
              <CldImage
                key={idx}
                className={`showcase-card-container ${
                  idx === 0 ? "mt-8 xl:mb-8" : "hidden md:block my-8"
                }`}
                alt={`${item.title} screenshot ${idx + 1}`}
                width="1000"
                height="1000"
                sizes="(max-width: 768px) 100vw, 50vw"
                src={src}
                loading={idx === 0 ? "eager" : "lazy"}
              />
            ))}
          </TransitionLink>
        </MotionDiv>
      </div>

      <div className="portfolio-container xl:mt-8">
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5, delay: index * 0.1 + 0.2 },
          }}
          viewport={{ once: true }}
        >
          <h3 className="showcased-h3">{item.title}</h3>
          <p className="showcased-p">{item.description}</p>
          {item.status && (
            <p className="pt-6 text-3xl text-bold">{item.status}</p>
          )}

          <div className="my-8">
            <ul className="showcased-list flex flex-row align-middle flex-wrap gap-4 justify-start my-2">
              {item.tech.map((tech) => (
                <li key={tech} className="showcased-btn">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-row flex-wrap gap-3 justify-around my-8">
            <Suspense
              fallback={<div className="w-24 h-10 bg-gray-200 rounded"></div>}
            >
              {item.links.code && (
                <RoundButton
                  href={item.links.code}
                  buttonClass="round-button"
                  buttonText="CODE"
                  target="_blank"
                  rel=""
                />
              )}
              {item.links.live && (
                <RoundButton
                  href={item.links.live}
                  buttonClass="round-button"
                  buttonText="LIVE SITE"
                  target="_blank"
                  rel=""
                />
              )}
              {item.links.more && (
                <RoundButton
                  href={item.links.more}
                  buttonClass="round-button"
                  buttonText="SEE MORE"
                  target="_blank"
                  rel=""
                />
              )}
            </Suspense>
          </div>
        </MotionDiv>
      </div>
    </div>
  </Suspense>
);

const PortfolioSection: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number>(3);

  const displayedItems = useMemo(
    () => portfolioItems.slice(0, visibleItems),
    [visibleItems]
  );

  const loadMore = (): void => {
    setVisibleItems((prev) => Math.min(prev + 3, portfolioItems.length));
  };

  return (
    <section className="mb-10">
      {displayedItems.map((item, index) => (
        <React.Fragment key={item.id}>
          <PortfolioItemComponent item={item} index={index} />
          {index < displayedItems.length - 1 && (
            <div className="border-t-[1px] mb-8 mt-2" />
          )}
        </React.Fragment>
      ))}

      {visibleItems < portfolioItems.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Load More Projects ({portfolioItems.length - visibleItems}{" "}
            remaining)
          </button>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
