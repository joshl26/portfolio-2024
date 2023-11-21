"use client";

import React from "react";
import { motion } from "framer-motion";
import RoundButton from "../../ui/RoundButton";
import "../../ui/Portfolio.css";

const PortfolioOutdoorsy = () => {
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
          {/* <img
            className="portfolio-hero"
            alt="tablet among rocks"
            src="https://res.cloudinary.com/dv6keahg3/image/upload/f_auto/q_auto/v1697384653/PortfolioSite/Itab_outdoorsy_desert_horizontal_p92vrs.png"
          /> */}
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
              href={"https://github.com/joshl26/Outdoorsy"}
              buttonText={"GIT"}
              buttonClass={"round-button"}
              rel=""
              target=""
            />
          </span>
          <span>
            <RoundButton
              buttonText={"LIVE SITE"}
              buttonClass={"round-button"}
              href={"https://outdors.ca"}
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
              <h4>SPRING 2023-CURRENT</h4>
            </span>
            <span>
              <h4>COMMMERCIAL PRODUCT</h4>
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
          <div className="spacer-small"></div>
          <p className="portfolio-p">
            Outdoorsy is a full-stack website project where logged in users can
            create and review campsites, canoe routes, hiking trails, etc. Its a
            community for outdoor enthusiasts to connect, share experiences and
            plan new ones!
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
            The intent with this application is to allow outdoors enthusiasts to
            have a place to share ideas, experiences and trip plans. I wanted
            the user interface to feel very natural, like being in the woods..
            Or on a lake for instance.
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
          {/* <img
            className="portfolio-screen"
            alt="tablets among the rocks"
            src="https://res.cloudinary.com/dv6keahg3/image/upload/f_auto/q_auto/v1697384654/PortfolioSite/Itab_outdoorsy_desert_horizontal_1_nbm9mz.png"
          /> */}
        </motion.div>
        <div className="spacer"></div>
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
          {/* <img
            className="portfolio-screen"
            alt="tablet among the rocks"
            src="https://res.cloudinary.com/dv6keahg3/image/upload/f_auto/q_auto/v1697384653/PortfolioSite/Itab_outdoorsy_desert_horizontal_p92vrs.png"
          /> */}
        </motion.div>
        <div className="spacer"></div>
      </section>
    </main>
  );
};

export default PortfolioOutdoorsy;
