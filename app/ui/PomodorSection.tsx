"use client";

import React from "react";

import { motion } from "framer-motion";
import RoundButton from "@/app/ui/RoundButton";
import { CldImage } from "next-cloudinary";

const PomodorSection = () => {
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
            className="portfolio-hero"
            alt="two iphone's leaning against pottery"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1697384652/PortfolioSite/Iphone_horizontal_and_vertical_pomo_vases_ng2hpt.png"
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
            href={"https://github.com/joshl26/pomodoro-app"}
            buttonText={"GIT"}
            buttonClass={"round-button"}
            rel=""
            target="_blank"
          />
          <RoundButton
            href={"https://joshlehman.ca/pomodor"}
            buttonText={"LIVE SITE"}
            buttonClass={"round-button"}
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
          <h2 className="portfolio-h2">DETAILS</h2>
          <div className="flex flex-row justify-between">
            <h4>Winter 2022 - Fall 2023</h4>
            <h4 className="xl:text-left text-right">
              Personal Development Project
            </h4>
          </div>
          <div className="flex flex-row flex-wrap justify-between my-8">
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
          <p className="portfolio-p mb-8">
            During the winter of 2023, I undertook a project that aimed to
            introduce myself to the world of ReactJS. The project helped me gain
            a deeper understanding of various concepts, including both basic and
            advanced topics. Some of the concepts I learned about included prop
            drilling, which involves passing data from one component to another,
            React Router, which enables the creation of multi-page applications,
            responsive UI/UX design, which ensures that the user interface and
            experience are optimized across different devices, and state
            management with Redux, which enables the management of complex
            application states. The project provided an excellent opportunity
            for me to learn valuable skills that I can use in my future
            endeavors.
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
          <p className="portfolio-p mb-8">
            The main objective of this project was to create a user interface
            and experience that is similar to the popular pomofocus app, while
            also enhancing its functionality. I aimed to provide users with a
            more efficient, organized, and visually appealing approach to time
            management. Throughout the development process, I carefully analyzed
            the features of the original app and made necessary improvements to
            enhance user experience. I focused on implementing user-friendly
            features and eliminating any complexities that might hinder
            productivity. The final product is a fully-functional time
            management tool that is user-friendly, visually appealing, and
            designed to help users stay focused and productive.
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
            <span className="portfolio-font-noto">NOTO</span>
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
                <li>300</li>
                <li>500</li>
                <li>900</li>
              </ul>
            </div>
          </div>
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
            alt="iphone in vertical position"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1697384652/PortfolioSite/Iphone_vertical_pomo_vases_dvoqbs.png"
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
            className="portfolio-screen my-8"
            alt="iphone laying on the ground"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1697384652/PortfolioSite/Iphone_leaves_shade_pomo_jhnhw6.png"
          />
        </motion.div>
      </section>
    </section>
  );
};

export default PomodorSection;
