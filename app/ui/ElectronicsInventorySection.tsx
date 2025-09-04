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
  "JAVASCRIPT",
  "CSS3",
  "HTML5",
  "WIREFRAMING",
  "UI/UX DESIGN",
  "REACT",
  "REDUX",
  "OPENAPI",
  "BABEL",
  "WEBPACK",
  "GIT",
];

// Screen images data
const screenImages = [
  {
    src: "v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_a1gelp.png",
    alt: "Electronics Inventory app on laptop in modern office",
  },
  {
    src: "v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_golden_lka0ur.png",
    alt: "Electronics Inventory app on laptop with gold platform",
  },
];

const ElectronicsInventorySection = () => {
  return (
    <section className="px-3">
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
              alt="Electronics Inventory app hero image"
              width="2000"
              height="2000"
              sizes="(max-width: 768px) 100vw, 50vw"
              src="v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_golden_lka0ur.png"
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
            className="flex flex-row justify-around my-8"
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
                href="https://github.com/joshl26/electronics-inventory-frontend"
                buttonText="GIT"
                buttonClass="round-button"
                rel=""
                target="_blank"
              />
              <RoundButton
                buttonText="LIVE SITE"
                buttonClass="round-button"
                href="https://electronics-inventory-client.onrender.com/"
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
          <section className="portfolio-main-section">
            <h2 className="portfolio-h2 mb-8">DETAILS</h2>
            <div className="flex flex-row justify-between">
              <h4 className="portfolio-h4">Spring 2023 - Fall 2023</h4>
              <h4 className="xl:text-left text-right portfolio-h4">
                COMMERCIAL PRODUCT
              </h4>
            </div>

            <div className="flex flex-row flex-wrap gap-y-3 justify-between my-8">
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

            <p className="portfolio-p mb-8">
              Are you struggling to manage your electronics inventory and
              worried that it might hinder your business growth? Look no further
              than Electronics Inventory (Ei) - a cutting-edge inventory
              management system designed for businesses of all sizes. Ei's
              software is user-friendly, feature-rich, and cloud-based, making
              it easy to manage your inventory levels from anywhere in the
              world, on any device. Our system is easy to set up, and has the
              flexibility to handle the most complex inventory management needs
              of large and international corporations. With a free 30-day demo
              available, we are confident that Ei will exceed your expectations
              and help take your business to the next level. So why wait? Put
              the power of Ei to work for your business today!
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
            <p className="portfolio-p">
              I am extremely passionate about designing software programs that
              put humans first, and with EI, we have created inventory
              management software that people actually want to use, not just
              have to use. We are proud to deliver several key performance
              indicators (KPIs) related to the lifecycle of electronics
              inventory within your organization in the most efficient manner
              possible. Our app has a uniquely organic design and layout that
              allows for the free flow of information, improving overall
              efficiency, just like how it works in biological organisms. We
              treat your business like a biological organism, which requires
              proper care and sustenance. With EI, we are confident that we are
              different from traditional inventory management systems you may
              have used in the past.
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
          <section className="portfolio-main-section mb-8">
            <h2 className="portfolio-h2">FONT TYPES</h2>
            <div className="flex justify-between items-end">
              <span>
                <h1 className="portfolio-font-nunito">NUNITO</h1>
              </span>
              <div className="portfolio-li">
                <span>Weight</span>
                <ul className="list-none flex gap-2">
                  <li>200</li>
                  <li>300</li>
                  <li>500</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <span className="portfolio-font-cabin">CABIN</span>
              <div className="portfolio-li">
                <span>Weight</span>
                <ul className="list-none flex gap-2">
                  <li>400</li>
                  <li>500</li>
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
                className="showcase-card-container my-8"
                alt={image.alt}
                width="1000"
                height="1000"
                sizes="(max-width: 768px) 100vw, 50vw"
                src={image.src}
                loading="lazy"
              />
            </MotionDiv>
          ))}
        </section>
      </Suspense>
    </section>
  );
};

export default ElectronicsInventorySection;
