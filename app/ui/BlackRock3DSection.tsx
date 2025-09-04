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
    src: "v1716859619/PortfolioSite/Untitled_n2iqdo.png",
    alt: "BlackRock3D homepage screenshot",
  },
  {
    src: "v1716859661/PortfolioSite/Untitled_awmbuk.png",
    alt: "BlackRock3D tutorials page screenshot",
  },
  {
    src: "v1716859739/PortfolioSite/Untitled_l372ry.png",
    alt: "BlackRock3D projects page screenshot",
  },
];

const BlackRock3DSection = () => {
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
              alt="BlackRock3D website hero image"
              width="1000"
              height="1000"
              sizes="(max-width: 768px) 100vw, 50vw"
              src="v1688839247/PortfolioSite/blackrock_zgussj.png"
              loading="lazy"
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
                href="https://blackrock3d.ca/"
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
              <h4 className="portfolio-h4">WINTER 2018 - CURRENT</h4>
              <h4 className="xl:text-left text-right portfolio-h4">
                PERSONAL WEBSITE
              </h4>
            </div>

            <div className="flex flex-row flex-wrap gap-y-3 justify-between py-8 font-ayer tracking-wider">
              <Suspense
                fallback={
                  <div className="flex gap-2">
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
              BlackRock3D is a wordpress site that was designed by Joshua Lehman
              in 2018 to showcase his skills in Engineering. This turned out to
              be the final catalyst in making me want to switch careers into
              software engineering.
            </p>
            <p className="portfolio-p">
              This site was created as an introduction to the world of WordPress
              CMS and web development in 2017 by Joshua Lehman. There are many
              stories on this site describing previous engineering projects that
              I have worked on. Including explanations of how those projects
              provided solutions to solve real world problems by utilizing my
              background in Engineering, Mathematics and Science.
            </p>
            <p className="portfolio-p">
              There is also a tutorial section on the site dedicated to
              Programming (HTML, CSS, JavaScript,…) where I cover the basics
              through to more advanced topics. Many tutorials include some kind
              of interactive content to help reinforce concepts. My goal with
              this site is to provide interactive content, that educates and
              entertains at the same time. Have fun looking around and feel free
              to drop me a line if you have any questions or comments.
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
                className="showcase-card-container my-8"
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

export default BlackRock3DSection;
