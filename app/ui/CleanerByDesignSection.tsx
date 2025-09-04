/* eslint-disable react/no-unescaped-entities */
"use client";

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
  "TYPESCRIPT",
  "TAILWINDCSS",
  "POSTGRESQL",
  "FIGMA LAYOUT",
  "HEADLESS DESIGN",
  "NEXTJS",
  "REDIS",
  "MEDUSAJS",
  "BABEL",
  "WEBPACK",
  "GIT",
];

// Design features data
const designFeatures = [
  "Sustainable Product Catalog: A detailed catalog showcasing modern eco-friendly home organization solutions that are better for both the consumer and the planet.",
  "Secure Checkout Process: Integrated secure payment systems ensuring user security during transactions.",
  "Multi currency support",
  "User Profile Management: Allows users to create profiles where they can track orders, save favorite products, and manage payment methods securely.",
  "Responsive Design: Adjustable UI components optimized for various devices enhancing usability across different platforms.",
];

// Screen images data
const screenImages = [
  {
    src: "v1713832219/CleanerByDesign/CleanerByDesign_Landing_Page_2_pmri4x.png",
    alt: "Cleaner By Design homepage",
  },
  {
    src: "v1713803752/CleanerByDesign/CleanerByDesign_Landing_Page_1_gjhlhh.png",
    alt: "Cleaner By Design landing page",
  },
  {
    src: "v1713803750/CleanerByDesign/CleanerByDesign_Product_Page_1_nu1nna.png",
    alt: "Cleaner By Design product page",
  },
  {
    src: "v1713803749/CleanerByDesign/CleanerByDesign_Checkout_Page_1_lxzccv.png",
    alt: "Cleaner By Design checkout page",
  },
];

const CleanerByDesignSection = () => {
  return (
    <section className="my-8 px-3">
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
              alt="Cleaner By Design hero image"
              width="3000"
              height="3000"
              sizes="(max-width: 768px) 100vw, 50vw"
              src="v1713832219/CleanerByDesign/CleanerByDesign_Landing_Page_2_pmri4x.png"
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
            className="flex flex-row justify-around gap-y-3 my-8"
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
                href="https://github.com/joshl26/medusa-cleanerbydesign"
                buttonText="GIT"
                buttonClass="round-button"
                rel=""
                target="_blank"
              />
              <RoundButton
                buttonText="LIVE SITE"
                buttonClass="round-button"
                href="https://cleanerbydesign.store/"
                rel=""
                target="_blank"
              />
              <RoundButton
                buttonText="UI/UX"
                buttonClass="round-button"
                rel=""
                target="_blank"
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
          <section className="portfolio-main-section mb-8">
            <h2 className="portfolio-h2">DETAILS</h2>
            <div className="flex flex-row gap-x-3 justify-between">
              <h4 className="portfolio-h4">December 2023 - January 2024</h4>
              <h4 className="xl:text-left text-right portfolio-h4">
                E-COMMERCE SITE
              </h4>
            </div>

            <div className="flex flex-row flex-wrap justify-between gap-3 my-8">
              <Suspense
                fallback={
                  <div className="flex gap-2 flex-wrap">
                    {Array(11)
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
              Cleaner By Design is an e-commerce web application designed to
              provide a seamless online shopping experience. This platform
              specializes in offering eco-friendly and sustainable home
              organization products, catering to a niche market of
              environmentally conscious consumers. Built using Next.js,
              PostgreSQL, and TypeScript, the project not only highlights
              technical proficiency but also demonstrates a commitment to
              modern, scalable web technologies aligned with innovative business
              practices.
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
            <h2 className="portfolio-h2">DESIGN INTENT</h2>
            <ul className="list-disc list-inside xl:list-outside">
              {designFeatures.map((feature, index) => (
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
            transition: { duration: 0.75, delay: 0.25 },
          }}
          viewport={{ once: true }}
        >
          <section className="portfolio-main-section mb-8">
            <h2 className="portfolio-h2">CHALLENGES</h2>
            <p className="portfolio-p">
              One major challenge was integrating real-time data updates
              frequently seen in stock levels or prices without performance
              penalties on user experiences – solved by efficiently structuring
              database calls through advanced SQL scripts paired effectively
              within our Redux state management flows implemented via hooks
              provided by Next.js framework itself.
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
            <h2 className="portfolio-h2">SOLUTIONS</h2>
            <p className="portfolio-p">
              Platform Migration: Migrated existing product listings and
              customer data from old systems to leverage Medusa's headless
              architecture.
            </p>
            <p className="portfolio-p">
              Customized Shopping Features: Developed interactive UI
              enhancements using React on top of the headless commerce
              functionality provided by Medusa.
            </p>
            <p className="portfolio-p">
              Secure Payment Gateway Integration: Ensured secure transactions
              with integrated payment options optimized for speed and protection
              against fraud.
            </p>
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
          <section className="portfolio-main-section">
            <h2 className="portfolio-h2">FONT TYPES</h2>
            <div className="flex justify-between items-end">
              <span>
                <h1 className="portfolio-font-roboto">ROBOTO</h1>
              </span>
              <div className="portfolio-li">
                <span>Weight</span>
                <ul className="list-none flex gap-2">
                  <li>200</li>
                  <li>300</li>
                  <li>700</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <span className="portfolio-font-ubuntu">UBUNTU</span>
              <div className="portfolio-li">
                <span>Weight</span>
                <ul className="list-none flex gap-2">
                  <li>400</li>
                  <li>600</li>
                  <li>700</li>
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
            <h2 className="portfolio-h2">SCREENS</h2>
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
                className={`showcase-card-container ${
                  index === 0 ? "mb-8" : "my-8"
                }`}
                alt={image.alt}
                width="3000"
                height="3000"
                sizes="(max-width: 768px) 100vw, 50vw"
                src={image.src}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </MotionDiv>
          ))}
        </section>
      </Suspense>
    </section>
  );
};

export default CleanerByDesignSection;
