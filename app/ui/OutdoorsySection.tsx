"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import RoundButton from "@/app/ui/RoundButton";
import { CldImage } from "next-cloudinary";

const OutdoorsySection = () => {
  return (
    <section className="px-3">
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
        >
          <CldImage
            className="showcase-card-container"
            alt="outdoorsy app hero"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1697384652/PortfolioSite/Itab_outdoorsy_desert_horizontal_p92vrs.png"
          />
        </motion.div>
      </section>
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
          className="flex flex-row justify-around my-8"
        >
          <RoundButton
            href={"https://github.com/joshl26/Outdoorsy"}
            buttonText={"GIT"}
            buttonClass={"round-button"}
            rel=""
            target="_blank"
          />
          <RoundButton
            buttonText={"LIVE SITE"}
            buttonClass={"round-button"}
            href={"https://joshlehman.ca/outdoorsy"}
            rel=""
            target="_blank"
          />
          <RoundButton
            buttonText={"UI/UX"}
            buttonClass={"round-button"}
            rel=""
            target=""
            href=""
          />
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.75,
            delay: 0.5,
          },
        }}
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
            <RoundButton
              buttonText={"JAVASCRIPT"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
            <RoundButton
              buttonText={"CSS3"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
            <RoundButton
              buttonText={"HTML5"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
            <RoundButton
              buttonText={"WIREFRAMING"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
            <RoundButton
              buttonText={"UI/UX DESIGN"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
            <RoundButton
              buttonText={"REACT"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
            <RoundButton
              buttonText={"REDUX"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
            <RoundButton
              buttonText={"BABEL"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
            <RoundButton
              buttonText={"WEBPACK"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
            <RoundButton
              buttonText={"GIT"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
          </div>
          <p className="portfolio-p">
            Outdoorsy is a comprehensive website project designed to cater to
            the needs of outdoor enthusiasts. The website serves as a platform
            where users can create and review various outdoor activities such as
            campsites, canoe routes, hiking trails, and many more. Once
            registered and logged in, users can access different features that
            enable them to connect with other outdoor enthusiasts, share their
            experiences, and plan new ones.
          </p>
          <p className="portfolio-p mb-8">
            The platform ensures that outdoor enthusiasts have a place to
            connect with like-minded individuals and share their love for
            outdoor activities. With Outdoorsy, outdoor enthusiasts can discover
            new outdoor destinations, plan and organize their next adventure,
            and share their experiences with the community. The website is an
            excellent resource for anyone looking to experience the great
            outdoors and connect with other outdoor enthusiasts.
          </p>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.75,
            delay: 0.25,
          },
        }}
      >
        <section className="portfolio-main-section">
          <h2 className="portfolio-h2">DESIGN INTENT</h2>
          <p className="portfolio-p">
            As an avid outdoors enthusiast, I understand the importance of
            having a reliable platform to connect with other like-minded
            individuals who share my passion for nature. With this application,
            you can effortlessly exchange ideas, share your experiences, and
            plan your next adventure with others who appreciate the great
            outdoors.
          </p>
          <p className="portfolio-p">
            The user interface of this application has been designed to
            replicate the natural environment as closely as possible, providing
            you with a seamless and intuitive experience that feels like being
            in the woods or on a lake. The goal is to make the application feel
            like a virtual extension of the great outdoors itself.
          </p>
          <p className="portfolio-p mb-8">
            Whether you're a seasoned backpacker or a beginner hiker, this
            application is perfect for anyone who wants to connect with others
            who share their passion for nature. So come explore with us and
            discover new adventures together. Let me know if you need any
            further assistance with this.
          </p>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.75,
            delay: 0.5,
          },
        }}
      >
        <section className="portfolio-main-section mb-8">
          <h2 className="portfolio-h2">FONT TYPES</h2>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <span>
              <h1 className="portfolio-font-segoe">SEGOE</h1>
            </span>
            <div className="portfolio-li">
              <span>Weight</span>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.625rem",
                }}
              >
                <li>200</li>
                <li>500</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "flex-end",
            }}
          ></div>
        </section>
      </motion.div>
      <section className="portfolio-main-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
        >
          <h2 className="portfolio-h2">SCREENS</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
        >
          <CldImage
            className="portfolio-screen my-8"
            alt="tablets among the rocks"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1697384652/PortfolioSite/Itab_outdoorsy_desert_horizontal_1_nbm9mz.png"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
        >
          <CldImage
            className="showcase-card-container my-8"
            alt="outdoorsy app hero"
            width="1000"
            height="1000"
            sizes="100vw"
            src="PortfolioSite/Itab_outdoorsy_desert_horizontal_p92vrs.png"
          />
        </motion.div>
      </section>
    </section>
  );
};

export default OutdoorsySection;
