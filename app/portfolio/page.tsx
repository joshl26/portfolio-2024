"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import RoundButton from "@/app/ui/RoundButton";
import "@/app/ui/Portfolio.css";

const Portfolio = () => {
  return (
    <main className="main-container">
      <section className="portfolio-section">
        <h1 className="portfolio-h1">Portfolio</h1>
      </section>
      <section className="projects-section">
        <div className="portfolio-grid">
          <div className="portfolio-container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
            >
              <Link href={"/portfolio/el-in"}>
                <CldImage
                  className="showcase-card-container"
                  alt="electronics inventory hero image"
                  width="2000"
                  height="2000"
                  sizes="100vw"
                  preserveTransformations
                  src="https://res.cloudinary.com/dv6keahg3/image/upload/c_crop,w_1250/q_auto/f_auto/v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_golden_lka0ur.png"
                />
                <div className="spacer-small"></div>
                <div className="spacer-small"></div>
              </Link>
              <div className="spacer"></div>
            </motion.div>
          </div>
          <div className="portfolio-container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
              className="showcase-border-top"
            >
              <h3 className="showcased-h3">electronics inventory</h3>
              <p className="showcased-p">
                Electronics Inventory is a cutting-edge web based app that
                efficiently organizes electronic lab inventory for both small
                businesses and individuals alike. The backend API has been fully
                documented and tested using OpenAPI and Swagger. Electronics
                Inventory web-app is available on on any device from desktop pc
                to the smallest handheld. Manage your electronics inventory from
                anywhere!
              </p>
              <div className="spacer-small"></div>
              <div>
                <div>
                  <ul className="showcased-list">
                    <li>JAVASCRIPT</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                    <li>WIREFRAMING</li>
                    <li>UI/UX DESIGN</li>
                    <li>REACT</li>
                    <li>REDUX</li>
                  </ul>
                </div>
                <div>
                  <ul className="showcased-list">
                    <li>OPENAPI</li>
                    <li>BACKEND DESIGN</li>
                    <li>EXPRESS</li>
                    <li>REST API</li>
                    <li>BABEL</li>
                    <li>WEBPACK</li>
                    <li>GIT</li>
                  </ul>
                </div>
              </div>
              <div className="spacer-small"></div>
              <div>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"FRONTEND CODE"}
                  href="https://github.com/joshl26/electronics-inventory-frontend"
                  target=""
                  rel=""
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"BACKEND CODE"}
                  href="https://github.com/joshl26/electronics-inventory-backend"
                  target=""
                  rel=""
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"LIVE SITE"}
                  href="https://el-in.ca/"
                  target=""
                  rel=""
                />
                <Link href={"/portfolio/el-in/"}>
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"SEE MORE"}
                    href=""
                    target=""
                    rel=""
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="spacer-small"></div>
        <div className="portfolio-grid">
          <div className="portfolio-container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
            >
              <Link href={"/portfolio/pomodor"}>
                <CldImage
                  className="showcase-card-container"
                  alt="pomodoro timer hero"
                  width="1000"
                  height="1000"
                  sizes="100vw"
                  preserveTransformations
                  src="https://res.cloudinary.com/dv6keahg3/image/upload/q_auto/f_auto/v1697384652/PortfolioSite/Iphone_leaves_shade_pomo_jhnhw6.png"
                />
                <div className="spacer-small"></div>
                <div className="spacer-small"></div>
              </Link>
              <div className="spacer"></div>
            </motion.div>
          </div>
          <div className="portfolio-container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
              className="showcase-border-top"
            >
              <h3 className="showcased-h3">Pomodor Timer</h3>
              <p className="showcased-p">
                This project was started in winter 2023 as an introduction to
                ReactJS. The goal was to explore basic and advanced topics such
                as prop drilling, React Router, responsive UI/UX design, and
                state management with Redux.
              </p>
              <div>
                <div>
                  <ul className="showcased-list">
                    <li>JAVASCRIPT</li>
                    <li>BOOTSTRAP</li>
                    <li>HTML5</li>
                    <li>REACT</li>
                    <li>REDUX</li>
                  </ul>
                </div>
                <div>
                  <ul className="showcased-list">
                    <li>UI/UX DESIGN</li>

                    <li>BABEL</li>
                    <li>WEBPACK</li>
                    <li>GIT</li>
                  </ul>
                </div>
              </div>
              <div>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"CODE"}
                  href={"https://github.com/joshl26/pomodoro-app"}
                  target=""
                  rel=""
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"LIVE SITE"}
                  href={"https://joshlehman.ca/pomodor"}
                  target=""
                  rel=""
                />
                <Link href={"/portfolio/pomodor"}>
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"SEE MORE"}
                    href=""
                    target=""
                    rel=""
                  />
                </Link>
              </div>
              <div className="spacer"></div>
            </motion.div>
          </div>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
            >
              <Link href={"/portfolio/3dportfolio"}>
                <CldImage
                  className="showcase-card-container"
                  alt="3d portfolio hero"
                  width="1000"
                  height="1000"
                  sizes="100vw"
                  preserveTransformations
                  src="https://res.cloudinary.com/dv6keahg3/image/upload/q_auto/f_auto/v1697384652/PortfolioSite/Iphone_3dportfolio_modern_desktop_1_unmjbe.png"
                />
                <div className="spacer-small"></div>
                <div className="spacer-small"></div>
              </Link>
              <div className="spacer"></div>
            </motion.div>
          </div>
          <div className="portfolio-container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
              className="showcase-border-top"
            >
              <h3 className="showcased-h3">3D Portfolio</h3>
              <p className="showcased-p">
                An experimental three dimensional portfolio site created with
                ThreeJS and Blender. I had alot of fun learning new technologies
                to complete this project. In the end the limitations of
                responsive styling within this 3d environment meant I had to
                switch back to a more traditional portfolio website layout to
                offer improved user accessibility over different devices,
                specifically older browsers. Still it was a FUN experiment and I
                do see applications for this type of tech in the future with AR
                (i.e. Augmented Reality).
              </p>
              <div>
                <div>
                  <ul className="showcased-list">
                    <li>JAVASCRIPT</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                    <li>REACT</li>
                    <li>REDUX</li>
                  </ul>
                </div>
                <div>
                  <ul className="showcased-list">
                    <li>FRONTEND DESIGN</li>
                    <li>BABEL</li>
                    <li>WEBPACK</li>
                    <li>GIT</li>
                  </ul>
                </div>
              </div>
              <div>
                <RoundButton
                  href={"https://github.com/joshl26/portfolio-2023"}
                  buttonClass={"round-button"}
                  buttonText={"CODE"}
                  target=""
                  rel=""
                />
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"LIVE SITE"}
                  href={"/portfolio/experimental"}
                  target=""
                  rel=""
                />
                <Link href={"/portfolio/3dportfolio"}>
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"SEE MORE"}
                    target=""
                    rel=""
                    href=""
                  />
                </Link>
              </div>
              <div className="spacer"></div>
            </motion.div>
          </div>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
            >
              <Link href={"/portfolio/outdoorsy"}>
                <CldImage
                  className="showcase-card-container"
                  alt="outdoorsy app hero"
                  width="1000"
                  height="1000"
                  sizes="100vw"
                  preserveTransformations
                  src="https://res.cloudinary.com/dv6keahg3/image/upload/q_auto/f_auto/v1697384652/PortfolioSite/Itab_outdoorsy_desert_horizontal_p92vrs.png"
                />
                <div className="spacer-small"></div>
                <div className="spacer-small"></div>
              </Link>
              <div className="spacer"></div>
            </motion.div>
          </div>
          <div className="portfolio-container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0,
                },
              }}
              className="showcase-border-top"
            >
              <h3 className="showcased-h3">outdoorsy</h3>
              <p className="showcased-p">
                Outdoorsy is a comprehensive website project designed to cater
                to the needs of outdoor enthusiasts. The website serves as a
                platform where users can create and review various outdoor
                activities such as campsites, canoe routes, hiking trails, and
                many more.
              </p>
              <div>
                <div>
                  <ul className="showcased-list">
                    <li>JAVASCRIPT</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                    <li>WIREFRAMING</li>
                    <li>UI/UX DESIGN</li>
                  </ul>
                </div>
                <div>
                  <ul className="showcased-list">
                    <li>BACKEND DESIGN</li>
                    <li>EXPRESS</li>
                    <li>REST API</li>
                    <li>BABEL</li>
                    <li>WEBPACK</li>
                    <li>GIT</li>
                  </ul>
                </div>
              </div>
              <div>
                <RoundButton
                  href={"https://github.com/joshl26/Outdoorsy"}
                  buttonClass={"round-button"}
                  buttonText={"CODE"}
                  target=""
                  rel=""
                />
                <RoundButton
                  href={"https://outdors.ca"}
                  buttonClass={"round-button"}
                  buttonText={"LIVE SITE"}
                  target=""
                  rel=""
                />
                <Link href={"/portfolio/outdoorsy"}>
                  <RoundButton
                    buttonClass={"round-button"}
                    buttonText={"SEE MORE"}
                    href=""
                    target=""
                    rel=""
                  />
                </Link>
              </div>
              <div className="spacer"></div>
            </motion.div>
          </div>
        </div>
        <div className="spacer-small"></div>
      </section>
    </main>
  );
};

export default Portfolio;
