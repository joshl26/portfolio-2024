"use client";

import React from "react";
import { lazy, Suspense } from "react";

// Lazy load heavy dependencies to reduce initial bundle size
const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.div }))
);
const CldImage = lazy(() =>
  import("next-cloudinary").then((mod) => ({ default: mod.CldImage }))
);
const RoundButton = lazy(() => import("@/app/ui/RoundButton"));

// Tech stack data moved to constant to reduce inline code
const techStack = [
  "JAVASCRIPT",
  "CSS3",
  "HTML5",
  "WIREFRAMING",
  "UI/UX DESIGN",
  "REACT",
  "REDUX",
  "BABEL",
  "WEBPACK",
  "GIT",
];

const ThreeDPortfolioSection = () => {
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
              className="portfolio-screen"
              alt="iphone laying on desk"
              width="1000"
              height="1000"
              sizes="(max-width: 768px) 100vw, 50vw"
              src="v1697384654/PortfolioSite/Iphone_3dportfolio_modern_desktop_1_unmjbe.png"
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
            className="flex flex-row justify-around my-8"
          >
            <Suspense
              fallback={<div className="w-20 h-10 bg-gray-200 rounded"></div>}
            >
              <RoundButton
                href="https://github.com/joshl26/portfolio-2023"
                buttonText="GIT"
                buttonClass="round-button"
                rel=""
                target="_blank"
              />
              <RoundButton
                href="https://joshlehman.ca/experimental"
                buttonText="LIVE SITE"
                buttonClass="round-button"
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
          <section className="portfolio-main-section mb-8">
            <h2 className="portfolio-h2 mb-4">DETAILS</h2>
            <div className="flex flex-row justify-between gap-3">
              <h4 className="w-1/2 portfolio-h4">Winter 2022 - Winter 2023</h4>
              <h4 className="w-1/2 xl:text-left text-right portfolio-h4">
                Previous Portfolio Site
              </h4>
            </div>

            <div className="flex flex-row flex-wrap justify-between gap-y-3 my-8">
              <Suspense
                fallback={
                  <div className="flex gap-2">
                    {Array(10)
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
              For my 2023 portfolio site, I decided to create a website using
              mainly ThreeJS and Blender. The website is three-dimensional and
              offers an immersive experience for users who want to explore my
              portfolio. I had a lot of fun learning new technologies to
              complete this project, and I am excited to share it with you.
              However, I must admit that I faced some challenges while working
              on the project. Responsive styling within the 3D environment
              proved to be difficult, and I realized that it might not be the
              best approach for all users. As a result, I decided to switch back
              to a more traditional portfolio layout that offers better user
              accessibility across different devices, especially older browsers.
              Although I had to sacrifice some of the immersive experience, I
              believe that it was the right choice to ensure that all users can
              access my portfolio without any issues. Despite the challenges, I
              am proud of what I achieved with this project, and I believe that
              this type of technology has a bright future ahead. In fact, I see
              potential applications for this technology in augmented reality
              and other areas. Overall, I would encourage you to check out my
              experimental portfolio website and let me know what you think!
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
              The portfolio website was conceived with the primary objective of
              exhibiting my abilities as a developer and designer. To achieve
              this goal, I carefully curated a collection of my best work in web
              development and design, and presented it on the site in an
              aesthetically pleasing and user-friendly format. In addition to
              the web development and design work, I also decided to showcase my
              proficiency in 3D modeling by incorporating a series of
              high-quality 3D models into the portfolio. The 3D models were
              created using Blender, a powerful and versatile 3D modeling
              software that allowed me to create intricate and realistic models
              with ease. Overall, the inclusion of 3D models in the portfolio
              website not only enhanced the visual appeal of the site, but also
              showcased my technical skills and attention to detail.
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
              <span className="portfolio-font-rale">RALE</span>
              <div className="portfolio-li">
                <span>Weight</span>
                <ul className="list-none flex gap-2">
                  <li>200</li>
                  <li>300</li>
                  <li>900</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <span className="portfolio-font-lusi">LUSI</span>
              <div className="portfolio-li">
                <span>Weight</span>
                <ul className="list-none flex gap-2">
                  <li>300</li>
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
            <h2 className="portfolio-h2">SCREENS</h2>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.75, delay: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <CldImage
              className="portfolio-screen my-8"
              alt="3D portfolio desktop view"
              width="1000"
              height="1000"
              sizes="(max-width: 768px) 100vw, 50vw"
              src="v1697384654/PortfolioSite/Iphone_3dportfolio_modern_desktop_1_unmjbe.png"
              loading="lazy"
            />
          </MotionDiv>
        </section>
      </Suspense>
    </section>
  );
};

export default ThreeDPortfolioSection;
