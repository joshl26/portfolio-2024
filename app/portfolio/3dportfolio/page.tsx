"use client";

import React from "react";
import { motion } from "framer-motion";
import RoundButton from "../../ui/RoundButton";
import "../../ui/Portfolio.css";
import ModernDesk from "public/Iphone_3dportfolio_modern_desktop.png";
import Image from "next/image";

const PortfolioThreeJS = () => {
  return (
    <main className="main-container">
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
          <Image
            className="portfolio-screen"
            alt="iphone laying on desk"
            src={ModernDesk}
          />
        </motion.div>
      </section>
      <div className="spacer-small"></div>
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
          style={{ justifyContent: "space-between", display: "flex" }}
        >
          <span>
            <RoundButton
              href={"https://github.com/joshl26/portfolio-2023"}
              buttonText={"GIT"}
              buttonClass={"round-button"}
              rel=""
              target=""
            />
          </span>
          <span>
            <RoundButton
              href={"/portfolio/experimental"}
              buttonText={"LIVE SITE"}
              buttonClass={"round-button"}
              rel=""
              target=""
            />
          </span>
          <span>
            <RoundButton
              buttonText={"UI/UX"}
              buttonClass={"round-button"}
              rel=""
              target=""
              href=""
            />
          </span>
        </motion.div>
      </section>
      <div className="spacer-small"></div>
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
          <div style={{ justifyContent: "space-between", display: "flex" }}>
            <span>
              <h4>Winter 2022-Fall 2023</h4>
            </span>
            <span>
              <h4>Personal Development Project</h4>
            </span>
          </div>
          <div style={{ justifyContent: "space-between", display: "flex" }}>
            <span>
              <span>
                <RoundButton
                  buttonText={"JAVASCRIPT"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"CSS3"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"HTML5"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"WIREFRAMING"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"UI/UX DESIGN"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
            </span>
            <span>
              <span>
                <RoundButton
                  buttonText={"REACT"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"REDUX"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"BABEL"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"WEBPACK"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"GIT"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
            </span>
          </div>
          <p className="portfolio-p"></p>
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
            An experimental three dimensional portfolio site created with
            ThreeJS and Blender. Give it a try! I had alot of fun learning new
            technologies to complete this. In the end the limitations of
            responsive styling within this 3d environment meant I had to switch
            back to a more traditional portfolio website layout to offer
            improved user accessibility over different devices, specifically
            older browsers. Still it was a FUN experiment and I do see
            applications for this type of tech in the future (i.e. Augmented
            Reality) Reality.
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
        <section className="portfolio-main-section">
          <h2 className="portfolio-h2">FONT TYPES</h2>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <span className="portfolio-font-rale">RALE</span>
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
                <li>900</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <span className="portfolio-font-lusi">LUSI</span>
            <div className="portfolio-li">
              <span>Weight</span>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.625rem",
                }}
              >
                <li>300</li>
                <li>500</li>
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
          <Image
            className="portfolio-screen"
            alt="iphone laying on desk"
            src={ModernDesk}
          />
        </motion.div>
        <div className="spacer"></div>
      </section>
    </main>
  );
};

export default PortfolioThreeJS;
