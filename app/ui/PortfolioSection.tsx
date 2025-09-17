"use client";

import React, { useState, useMemo } from "react";
import { lazy, Suspense } from "react";
import Card from ".././components/ui/Card";
import Badge from ".././components/ui/Badge";
import Thumbnail from ".././components/ui/Thumbnail";

// Lazy heavy deps
const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.div }))
);
const RoundButton = lazy(() => import("@/app/ui/RoundButton"));
const TransitionLink = lazy(() =>
  import("../utils/TransitionLink").then((mod) => ({
    default: mod.TransitionLink,
  }))
);

// Types
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

// Data (keep your items; truncated here to keep file readable)
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
];

function PortfolioItem({ item, index }: PortfolioItemProps) {
  const [activeImg, setActiveImg] = useState<number>(0);

  return (
    <Suspense
      fallback={
        <div className="animate-pulse bg-gray-800/40 h-64 rounded-2xl" />
      }
    >
      <Card className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-0">
          {/* Media column */}
          <div className="relative">
            <div className="absolute top-4 right-4 z-10">
              {item.status && <Badge>{item.status}</Badge>}
            </div>

            <MotionDiv
              initial={{ opacity: 0, scale: 0.995 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.45, delay: index * 0.06 },
              }}
              viewport={{ once: true }}
            >
              <TransitionLink href={item.href} className="block w-full">
                <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-800 rounded-t-2xl lg:rounded-l-2xl overflow-hidden">
                  <Thumbnail
                    src={item.images[activeImg]}
                    alt={`${item.title} screenshot ${activeImg + 1}`}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </TransitionLink>
            </MotionDiv>

            {/* Thumbnails row */}
            {item.images && item.images.length > 1 && (
              <div className="hidden md:flex items-center gap-3 px-4 py-3 bg-gray-900/20 border-t border-gray-700/20 rounded-b-lg lg:rounded-br-lg">
                {item.images.map((src, idx) => (
                  <button
                    key={src}
                    onClick={() => setActiveImg(idx)}
                    aria-label={`Show image ${idx + 1}`}
                    className={`relative rounded-md overflow-hidden w-20 h-12 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                      activeImg === idx ? "ring-2 ring-gold-400/60" : ""
                    }`}
                  >
                    <Thumbnail
                      src={src}
                      alt={`${item.title} thumb ${idx + 1}`}
                      width={160}
                      height={90}
                    />
                    {activeImg === idx && (
                      <span className="absolute inset-0 ring-1 ring-gold-400/30 pointer-events-none" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Meta column */}
          <div className="p-6 flex flex-col justify-between">
            <MotionDiv
              initial={{ opacity: 0, x: 8 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.45, delay: index * 0.06 + 0.08 },
              }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <ul className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-gray-800/50 text-gray-200 border border-gray-700/40 hover:bg-gold-500/10 hover:text-gold-200 transition-colors"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-3">
                  <Suspense
                    fallback={
                      <div className="w-24 h-10 bg-gray-700/40 rounded" />
                    }
                  >
                    {item.links.code && (
                      <RoundButton
                        href={item.links.code}
                        buttonClass="round-button bg-gray-800/70 hover:bg-gray-700/80 text-gray-100"
                        buttonText="Code"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    )}

                    {item.links.live && (
                      <RoundButton
                        href={item.links.live}
                        buttonClass="round-button bg-gold-500 hover:bg-gold-400 text-black shadow-sm"
                        buttonText="Live site"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    )}

                    {item.links.more && (
                      <RoundButton
                        href={item.links.more}
                        buttonClass="round-button bg-transparent border border-gray-700/40 text-gray-200 hover:bg-gray-800/50"
                        buttonText="See more"
                        target="_self"
                        rel=""
                      />
                    )}
                  </Suspense>
                </div>
              </div>

              <div className="mt-6">
                <TransitionLink
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-gold-200"
                >
                  <span>Open project</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </TransitionLink>
              </div>
            </MotionDiv>
          </div>
        </div>
      </Card>
    </Suspense>
  );
}

export default function PortfolioSection() {
  const [visibleItems, setVisibleItems] = useState<number>(3);

  const displayedItems = useMemo(
    () => portfolioItems.slice(0, visibleItems),
    [visibleItems]
  );

  const loadMore = (): void => {
    setVisibleItems((prev) => Math.min(prev + 3, portfolioItems.length));
  };

  return (
    <section className="mb-10 max-w-screen-xl mx-auto px-4 lg:px-0">
      <div className="grid gap-8">
        {displayedItems.map((item, index) => (
          <div key={item.id}>
            <PortfolioItem item={item} index={index} />
            {index < displayedItems.length - 1 && (
              <div className="border-t border-gray-800/30 my-6" />
            )}
          </div>
        ))}
      </div>

      {visibleItems < portfolioItems.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMore}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gold-500 text-black rounded-lg hover:bg-gold-400 transition-colors font-semibold shadow-md focus:outline-none focus:ring-4 focus:ring-gold-300/30"
          >
            Load more projects ({portfolioItems.length - visibleItems}{" "}
            remaining)
          </button>
        </div>
      )}
    </section>
  );
}
