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
  "REACT",
  "REDUX",
  "BABEL",
  "WEBPACK",
  "GIT",
];

// Screen images data
const screenImages = [
  {
    src: "v1697384652/PortfolioSite/Itab_outdoorsy_desert_horizontal_1_nbm9mz.png",
    alt: "Outdoorsy app on tablets among the rocks",
    className: "portfolio-screen my-8",
  },
  {
    src: "PortfolioSite/Itab_outdoorsy_desert_horizontal_p92vrs.png",
    alt: "Outdoorsy app hero image",
    className: "showcase-card-container my-8",
  },
];

const OutdoorsySection = () => {
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
              alt="Outdoorsy app hero image"
              width="1000"
              height="1000"
              sizes="(max-width: 768px) 100vw, 50vw"
              src="v1697384652/PortfolioSite/Itab_outdoorsy_desert_horizontal_p92vrs.png"
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
                href="https://github.com/joshl26/Outdoorsy"
                buttonText="GIT"
                buttonClass="round-button"
                rel=""
                target="_blank"
              />
              <RoundButton
                buttonText="LIVE SITE"
                buttonClass="round-button"
                href="https://joshlehman.ca/outdoorsy"
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
            <h2 className="portfolio-h2 mb-4">DETAILS</h2>
            <div className="flex flex-row justify-between">
              <h4 className="portfolio-h4">Spring 2023 - Summer 2023</h4>
              <h4 className="xl:text-left text-right portfolio-h4">
                COMMERCIAL PRODUCT
              </h4>
            </div>

            <div className="flex flex-row flex-wrap justify-between gap-y-3 my-8">
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

            <p className="portfolio-p">
              Outdoorsy is a comprehensive website project designed to cater to
              the needs of outdoor enthusiasts. The website serves as a platform
              where users can create and review various outdoor activities such
              as campsites, canoe routes, hiking trails, and many more. Once
              registered and logged in, users can access different features that
              enable them to connect with other outdoor enthusiasts, share their
              experiences, and plan new ones.
            </p>
            <p className="portfolio-p mb-8">
              The platform ensures that outdoor enthusiasts have a place to
              connect with like-minded individuals and share their love for
              outdoor activities. With Outdoorsy, outdoor enthusiasts can
              discover new outdoor destinations, plan and organize their next
              adventure, and share their experiences with the community. The
              website is an excellent resource for anyone looking to experience
              the great outdoors and connect with other outdoor enthusiasts.
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
            <p className="portfolio-p">
              As an avid outdoors enthusiast, I understand the importance of
              having a reliable platform to connect with other like-minded
              individuals who share my passion for nature. With this
              application, you can effortlessly exchange ideas, share your
              experiences, and plan your next adventure with others who
              appreciate the great outdoors.
            </p>
            <p className="portfolio-p">
              The user interface of this application has been designed to
              replicate the natural environment as closely as possible,
              providing you with a seamless and intuitive experience that feels
              like being in the woods or on a lake. The goal is to make the
              application feel like a virtual extension of the great outdoors
              itself.
            </p>
            <p className="portfolio-p mb-8">
              Whether you're a seasoned backpacker or a beginner hiker, this
              application is perfect for anyone who wants to connect with others
              who share their passion for nature. So come explore with us and
              discover new adventures together. Let me know if you need any
              further assistance with this.
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
                <h1 className="portfolio-font-segoe">SEGOE</h1>
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

export default OutdoorsySection;
