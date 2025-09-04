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
];

// Screen images data
const screenImages = [
  {
    src: "v1716856540/PortfolioSite/Untitled_ixlgk5.png",
    alt: "Nye Manufacturing homepage",
    className: "showcase-card-container",
  },
  {
    src: "v1716860325/PortfolioSite/Untitled_n8zknn.png",
    alt: "Nye Manufacturing services page",
    className: "portfolio-screen my-8",
  },
  {
    src: "v1716860411/PortfolioSite/Untitled_rqsduq.png",
    alt: "Nye Manufacturing products page",
    className: "showcase-card-container my-8",
  },
  {
    src: "v1716860519/PortfolioSite/Untitled_xtddcq.png",
    alt: "Nye Manufacturing capabilities page",
    className: "showcase-card-container my-8",
  },
  {
    src: "v1716860670/PortfolioSite/Untitled_i32dvq.png",
    alt: "Nye Manufacturing about page",
    className: "showcase-card-container my-8",
  },
  {
    src: "v1716860717/PortfolioSite/Untitled_i6uel7.png",
    alt: "Nye Manufacturing contact page",
    className: "showcase-card-container my-8",
  },
];

const NyeMfgSection = () => {
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
              alt="Nye Manufacturing hero image"
              width="1000"
              height="1000"
              sizes="(max-width: 768px) 100vw, 50vw"
              src="v1716856540/PortfolioSite/Untitled_ixlgk5.png"
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
                href=""
                buttonText="GIT"
                buttonClass="round-button"
                rel=""
                target="_blank"
              />
              <RoundButton
                buttonText="LIVE SITE"
                buttonClass="round-button"
                href="https://nyemanufacturing.com/"
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
              <h4 className="portfolio-h4">SUMMER 2017 - WINTER 2018</h4>
              <h4 className="xl:text-left text-right portfolio-h4">
                COMMERCIAL WEBSITE
              </h4>
            </div>

            <div className="flex flex-row flex-wrap gap-y-3 justify-between py-8 font-ayer tracking-wider">
              <Suspense
                fallback={
                  <div className="flex gap-2 flex-wrap">
                    {Array(5)
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
              Nye Manufacturing Ltd. is a family owned metal fabricating
              business with a primary focus on custom attachments. Founded in
              1952 by Jack Nye, our company offers expertise developed through
              more than 70 years of building, modifying and repairing heavy
              equipment of all types. Put our expertise to work for you.
            </p>
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

export default NyeMfgSection;
