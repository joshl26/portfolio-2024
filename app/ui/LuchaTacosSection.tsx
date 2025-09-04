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
  "Data Security: Implement secure login mechanisms and encrypted personal data storage.",
  "Direct Integration with Job Boards: Fetches live data from popular hiring platforms for accurate tailoring of documents.",
  "User-Friendly Interface: Ensures simple navigation and interaction across various functionalities within the platform.",
  "Dynamic Customization Capabilities: Uses bespoke algorithms to match users' profiles with suitable job descriptions, emphasizing necessary skills and experiences.",
  "Data Security Measures: Incorporates high-level security protocols to protect user data throughout their interaction with the service.",
];

// Screen images data
const screenImages = [
  {
    src: "v1718930369/PortfolioSite/lucha-tacos-screen_1_o70hjo.png",
    alt: "Lucha Tacos homepage",
    className: "showcase-card-container",
  },
  {
    src: "v1718930369/PortfolioSite/lucha-tacos-screen_2_kdh3wm.png",
    alt: "Lucha Tacos menu page",
    className: "portfolio-screen my-8",
  },
  {
    src: "v1718930368/PortfolioSite/lucha-tacos-screen_3_bnag4c.png",
    alt: "Lucha Tacos product details",
    className: "showcase-card-container my-8",
  },
  {
    src: "v1718930368/PortfolioSite/lucha-tacos-screen_4_dwtqru.png",
    alt: "Lucha Tacos ordering interface",
    className: "showcase-card-container my-8",
  },
  {
    src: "v1718930368/PortfolioSite/lucha-tacos-screen_5_wob8pc.png",
    alt: "Lucha Tacos cart and checkout",
    className: "showcase-card-container my-8",
  },
  {
    src: "v1718930367/PortfolioSite/lucha-tacos-screen_6_korhr6.png",
    alt: "Lucha Tacos contact page",
    className: "showcase-card-container my-8",
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
              className="showcase-card-container"
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
                buttonClass="round-button"
                rel=""
                target="_blank"
              />
              <RoundButton
                buttonText="LIVE SITE"
                buttonClass="round-button"
                href="https://lucha-tacos.vercel.app/"
                rel=""
                target="_blank"
              />
              <RoundButton
                buttonText="UI/UX"
                buttonClass="round-button"
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
          <section className="portfolio-main-section pb-6">
            <h2 className="portfolio-h2 mb-6">PROJECT DETAILS</h2>
            <div className="flex flex-row justify-between">
              <h4 className="portfolio-h4">SPRING 2023 - CURRENT</h4>
              <h4 className="xl:text-left text-right portfolio-h4">
                COMMERCIAL PRODUCT
              </h4>
            </div>

            <div className="flex flex-row flex-wrap gap-y-3 justify-between py-8 font-ayer tracking-wider">
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
                    buttonClass="showcased-btn"
                    rel=""
                    target=""
                    href=""
                  />
                ))}
              </Suspense>
            </div>

            <p className="portfolio-p">
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
            <p className="portfolio-p">
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
          <section className="portfolio-main-section mb-8">
            <h2 className="portfolio-h2">KEY FEATURES</h2>
            <ul className="list-disc list-inside xl:list-outside">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="portfolio-p">
                  {feature}
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
          <section className="portfolio-main-section mb-8">
            <h2 className="portfolio-h2">FONT TYPES</h2>
            <div className="flex justify-between items-end">
              <span>
                <h1 className="portfolio-font-lusi">LUSI</h1>
              </span>
              <div className="portfolio-li">
                <span>Weight</span>
                <ul className="list-none flex gap-2">
                  <li>200</li>
                  <li>500</li>
                  <li>800</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <span>
                <h1 className="portfolio-font-roboto">ROBO</h1>
              </span>
              <div className="portfolio-li">
                <span>Weight</span>
                <ul className="list-none flex gap-2">
                  <li>200</li>
                  <li>500</li>
                </ul>
              </div>
            </div>
          </section>
        </MotionDiv>

        <section className="portfolio-main-section">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.75, delay: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <h2 className="portfolio-h2 mb-8">SCREENS</h2>
          </MotionDiv>

          {screenImages.map((image, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.75, delay: 0.5 + index * 0.1 },
              }}
              viewport={{ once: true }}
            >
              <CldImage
                className={image.className}
                alt={image.alt}
                width="1000"
                height="1000"
                sizes="(max-width: 768px) 100vw, 50vw"
                src={image.src}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </MotionDiv>
          ))}
        </section>
      </Suspense>
    </div>
  );
};

export default LuchaTacosSection;
