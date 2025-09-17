"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { lazy, Suspense } from "react";

// Lazy load heavy dependencies
const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.div }))
);
const CldImage = lazy(() =>
  import("next-cloudinary").then((mod) => ({ default: mod.CldImage }))
);
const RoundButton = lazy(() => import("@/app/ui/RoundButton"));

// Tech stack data moved to constant
const techStack = [
  "JAVASCRIPT",
  "CSS3",
  "HTML5",
  "WIREFRAMING",
  "UI/UX DESIGN",
  "BABEL",
  "WEBPACK",
  "GIT",
];

// Key features data
const keyFeatures = [
  "Interactive User Interface: Offers a clean, responsive design for easy navigation through various functionalities.",
  "Authentic Mexican Experience: Brings the vibrant culture of Mexican street food to your plate.",
  "Fresh Ingredient Focus: Highlights locally sourced ingredients for maximum flavor.",
  "Lucha Libre Theme: Unique wrestling-inspired presentation that makes dining memorable.",
  "Customizable Options: Allows customers to build their perfect taco combination.",
  "Mobile Ordering: Streamlined mobile experience for quick ordering and pickup.",
];

// Screen images data
const screenImages = [
  {
    src: "v1718930369/PortfolioSite/lucha-tacos-screen_1_o70hjo.png",
    alt: "Lucha Tacos homepage",
  },
  {
    src: "v1718930369/PortfolioSite/lucha-tacos-screen_2_kdh3wm.png",
    alt: "Lucha Tacos menu page",
  },
  {
    src: "v1718930368/PortfolioSite/lucha-tacos-screen_3_bnag4c.png",
    alt: "Lucha Tacos product details",
  },
  {
    src: "v1718930368/PortfolioSite/lucha-tacos-screen_4_dwtqru.png",
    alt: "Lucha Tacos ordering interface",
  },
  {
    src: "v1718930368/PortfolioSite/lucha-tacos-screen_5_wob8pc.png",
    alt: "Lucha Tacos cart and checkout",
  },
  {
    src: "v1718930367/PortfolioSite/lucha-tacos-screen_6_korhr6.png",
    alt: "Lucha Tacos contact page",
  },
];

const LuchaTacosSection = () => {
  return (
    <div className="mt-6 mb-10 px-3">
      <Suspense
        fallback={
          <div className="animate-pulse bg-gray-200 h-64 rounded"></div>
        }
      >
        {/* Enhanced Hero Section */}
        <section className="flex flex-col justify-center items-center min-h-[50vh] text-center mb-16">
          <h1
            className="bg-gradient-to-r from-white via-amber-200 to-yellow-200 
                        bg-clip-text text-transparent mb-8 tracking-tight
                        drop-shadow-2xl text-5xl md:text-6xl lg:text-7xl font-black"
          >
            LUCHA TACOS
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Authentic Mexican street food with a twist of excitement inspired by
            lucha libre culture
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span>Full Stack Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <span>UI/UX Design</span>
            </div>
          </div>
        </section>

        <section>
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.75, delay: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <CldImage
              className="rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10 border border-gray-700/40 w-full"
              alt="Lucha Tacos hero image"
              width="1000"
              height="1000"
              sizes="(max-width: 768px) 100vw, 50vw"
              src="v1718930369/PortfolioSite/lucha-tacos-screen_1_o70hjo.png"
              loading="eager"
              priority
            />
          </MotionDiv>
        </section>

        <section>
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.75, delay: 0.5 },
            }}
            viewport={{ once: true }}
            className="flex flex-row justify-around py-10"
          >
            <Suspense
              fallback={
                <div className="flex gap-4">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="w-20 h-10 bg-gray-200 rounded"
                      ></div>
                    ))}
                </div>
              }
            >
              <RoundButton
                href="https://github.com/joshl26/lucha-tacos"
                buttonText="GIT"
                buttonClass="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                rel=""
                target="_blank"
              />
              <RoundButton
                buttonText="LIVE SITE"
                buttonClass="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                href="https://lucha-tacos.vercel.app/"
                rel=""
                target="_blank"
              />
              <RoundButton
                buttonText="UI/UX"
                buttonClass="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                rel=""
                target=""
                href=""
              />
            </Suspense>
          </MotionDiv>
        </section>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.75, delay: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <section
            className="pb-6 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95
                     backdrop-blur-sm shadow-2xl shadow-amber-500/5 border border-gray-700/40
                     rounded-2xl overflow-hidden p-8 mb-10"
          >
            <h2 className="mb-6 text-3xl font-bold text-white">
              PROJECT DETAILS
            </h2>
            <div className="flex flex-row justify-between mb-6">
              <h4 className="text-amber-400 font-semibold">
                SPRING 2023 - CURRENT
              </h4>
              <h4 className="xl:text-left text-right text-amber-400 font-semibold">
                COMMERCIAL PRODUCT
              </h4>
            </div>

            <div className="flex flex-row flex-wrap gap-y-3 justify-between py-8 tracking-wider mb-6">
              <Suspense
                fallback={
                  <div className="flex gap-2 flex-wrap">
                    {Array(8)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="w-16 h-8 bg-gray-200 rounded"
                        ></div>
                      ))}
                  </div>
                }
              >
                {techStack.map((tech) => (
                  <RoundButton
                    key={tech}
                    buttonText={tech}
                    buttonClass="px-4 py-2 bg-gradient-to-r from-amber-500/90 to-yellow-600/90 
                               text-white text-xs font-semibold rounded-full backdrop-blur-md
                               shadow-lg border border-white/20 uppercase tracking-wider
                               transform hover:scale-105 transition-transform duration-300"
                    rel=""
                    target=""
                    href=""
                  />
                ))}
              </Suspense>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Bring the dynamic and lively flavors of Mexico to your dining
              experience, infusing it with an extra element of excitement. Our
              tacos embody the spirit of masked wrestlers in the ring - brimming
              with robust combinations of freshly sourced ingredients and rich,
              savory seasonings that are certain to leave your taste buds
              clamoring for an encore. Step right up and feast your eyes on our
              tantalizing tacos that are akin to masked wrestlers in the ring,
              each one bursting with a powerful medley of the freshest
              ingredients and the most mouthwatering seasonings.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Lucha Tacos brings the bold and vibrant flavors of Mexico to your
              plate with a twist of excitement. Our tacos are like masked
              wrestlers in the ring - packed with powerful combinations of fresh
              ingredients and savory seasonings that will have your taste buds
              cheering for more. Our menu is prepared with the same level of
              enthusiasm and dedication as the luchadores from the bygone days
              when wrestling was a grand spectacle of passion and skill.
            </p>
          </section>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.75, delay: 0.25 },
          }}
          viewport={{ once: true }}
        >
          <section
            className="mb-8 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95
                     backdrop-blur-sm shadow-2xl shadow-amber-500/5 border border-gray-700/40
                     rounded-2xl overflow-hidden p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">KEY FEATURES</h2>
            <ul className="space-y-4">
              {keyFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="text-gray-300 text-lg flex items-start"
                >
                  <span className="text-amber-400 mr-2 mt-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.75, delay: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <section
            className="mb-8 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95
                     backdrop-blur-sm shadow-2xl shadow-amber-500/5 border border-gray-700/40
                     rounded-2xl overflow-hidden p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">FONT TYPES</h2>
            <div className="flex justify-between items-end mb-6">
              <span>
                <h1 className="text-5xl text-white font-lusi">LUSI</h1>
              </span>
              <div className="text-gray-300">
                <span>Weight</span>
                <ul className="list-none flex gap-2">
                  <li className="bg-gray-700/60 px-3 py-1 rounded-lg">200</li>
                  <li className="bg-gray-700/60 px-3 py-1 rounded-lg">500</li>
                  <li className="bg-gray-700/60 px-3 py-1 rounded-lg">800</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <span>
                <h1 className="text-5xl text-white font-roboto">ROBO</h1>
              </span>
              <div className="text-gray-300">
                <span>Weight</span>
                <ul className="list-none flex gap-2">
                  <li className="bg-gray-700/60 px-3 py-1 rounded-lg">200</li>
                  <li className="bg-gray-700/60 px-3 py-1 rounded-lg">500</li>
                </ul>
              </div>
            </div>
          </section>
        </MotionDiv>

        <section
          className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95
                     backdrop-blur-sm shadow-2xl shadow-amber-500/5 border border-gray-700/40
                     rounded-2xl overflow-hidden p-8"
        >
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.75, delay: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">SCREENS</h2>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {screenImages.map((image, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.75, delay: 0.5 + index * 0.1 },
                }}
                viewport={{ once: true }}
                className="mb-8 last:mb-0"
              >
                <CldImage
                  className="rounded-xl overflow-hidden shadow-lg border border-gray-700/40 transition-all duration-500 hover:shadow-amber-500/20 hover:border-amber-500/40"
                  alt={image.alt}
                  width="1000"
                  height="1000"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={image.src}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </MotionDiv>
            ))}
          </div>
        </section>
      </Suspense>
    </div>
  );
};

export default LuchaTacosSection;
