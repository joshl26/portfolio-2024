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
  "BABEL",
  "WEBPACK",
  "GIT",
];

// Screen images data
const screenImages = [
  {
    src: "v1697384652/PortfolioSite/Iphone_vertical_pomo_vases_dvoqbs.png",
    alt: "Pomodoro app on iPhone in vertical position",
    className: "portfolio-screen my-8",
  },
  {
    src: "v1697384652/PortfolioSite/Iphone_leaves_shade_pomo_jhnhw6.png",
    alt: "Pomodoro app on iPhone laying on the ground",
    className: "portfolio-screen my-8",
  },
];

const PomodorSection = () => {
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
              className="portfolio-hero"
              alt="Two iPhones leaning against pottery showing Pomodoro app"
              width="1000"
              height="1000"
              sizes="(max-width: 768px) 100vw, 50vw"
              src="v1697384652/PortfolioSite/Iphone_horizontal_and_vertical_pomo_vases_ng2hpt.png"
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
                href="https://github.com/joshl26/pomodoro-app"
                buttonText="GIT"
                buttonClass="round-button"
                rel=""
                target="_blank"
              />
              <RoundButton
                href="https://joshlehman.ca/pomodor"
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
          <section className="portfolio-main-section">
            <h2 className="portfolio-h2">DETAILS</h2>
            <div className="flex flex-row justify-between">
              <h4 className="portfolio-h4">Winter 2022 - Fall 2023</h4>
              <h4 className="xl:text-left text-right portfolio-h4">
                Personal Development Project
              </h4>
            </div>

            <div className="flex flex-row flex-wrap justify-between my-8">
              <Suspense
                fallback={
                  <div className="flex gap-2 flex-wrap">
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

            <p className="portfolio-p mb-8">
              During the winter of 2023, I undertook a project that aimed to
              introduce myself to the world of ReactJS. The project helped me
              gain a deeper understanding of various concepts, including both
              basic and advanced topics. Some of the concepts I learned about
              included prop drilling, which involves passing data from one
              component to another, React Router, which enables the creation of
              multi-page applications, responsive UI/UX design, which ensures
              that the user interface and experience are optimized across
              different devices, and state management with Redux, which enables
              the management of complex application states. The project provided
              an excellent opportunity for me to learn valuable skills that I
              can use in my future endeavors.
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
          <section className="portfolio-main-section">
            <h2 className="portfolio-h2">DESIGN INTENT</h2>
            <p className="portfolio-p mb-8">
              The main objective of this project was to create a user interface
              and experience that is similar to the popular pomofocus app, while
              also enhancing its functionality. I aimed to provide users with a
              more efficient, organized, and visually appealing approach to time
              management. Throughout the development process, I carefully
              analyzed the features of the original app and made necessary
              improvements to enhance user experience. I focused on implementing
              user-friendly features and eliminating any complexities that might
              hinder productivity. The final product is a fully-functional time
              management tool that is user-friendly, visually appealing, and
              designed to help users stay focused and productive.
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
              <span className="portfolio-font-noto">NOTO</span>
              <div className="portfolio-li">
                <span>Weight</span>
                <ul className="list-none flex gap-2">
                  <li>200</li>
                  <li>300</li>
                  <li>500</li>
                  <li>900</li>
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
                className={image.className}
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

export default PomodorSection;
