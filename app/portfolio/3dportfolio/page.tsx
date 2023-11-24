"use client";

import React from "react";
import { motion } from "framer-motion";
import RoundButton from "../../ui/RoundButton";
import "../../ui/Portfolio.css";
import { CldImage } from "next-cloudinary";

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
          <CldImage
            className="portfolio-screen"
            alt="iphone laying on desk"
            width="1000"
            height="1000"
            sizes="100vw"
            preserveTransformations
            src="https://res.cloudinary.com/dv6keahg3/image/upload/q_auto/f_auto/v1697384652/PortfolioSite/Iphone_3dportfolio_modern_desktop_1_unmjbe.png"
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
              href={"/experimental"}
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
          <p className="portfolio-p">
            For my 2023 portfolio site, I decided to create a website using
            mainly ThreeJS and Blender. The website is three-dimensional and
            offers an immersive experience for users who want to explore my
            portfolio. I had a lot of fun learning new technologies to complete
            this project, and I am excited to share it with you. However, I must
            admit that I faced some challenges while working on the project.
            Responsive styling within the 3D environment proved to be difficult,
            and I realized that it might not be the best approach for all users.
            As a result, I decided to switch back to a more traditional
            portfolio layout that offers better user accessibility across
            different devices, especially older browsers. Although I had to
            sacrifice some of the immersive experience, I believe that it was
            the right choice to ensure that all users can access my portfolio
            without any issues. Despite the challenges, I am proud of what I
            achieved with this project, and I believe that this type of
            technology has a bright future ahead. In fact, I see potential
            applications for this technology in augmented reality and other
            areas. Overall, I would encourage you to check out my experimental
            portfolio website and let me know what you think!
          </p>
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
            The portfolio website was conceived with the primary objective of
            exhibiting my abilities as a developer and designer. To achieve this
            goal, I carefully curated a collection of my best work in web
            development and design, and presented it on the site in an
            aesthetically pleasing and user-friendly format. In addition to the
            web development and design work, I also decided to showcase my
            proficiency in 3D modeling by incorporating a series of high-quality
            3D models into the portfolio. The 3D models were created using
            Blender, a powerful and versatile 3D modeling software that allowed
            me to create intricate and realistic models with ease. Overall, the
            inclusion of 3D models in the portfolio website not only enhanced
            the visual appeal of the site, but also showcased my technical
            skills and attention to detail.e intent of the portfolio site was to
            showcase my skills as a developer and a designer. The 3D models were
            created by using blender.
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
          <CldImage
            className="portfolio-screen"
            alt="iphone laying on desk"
            width="1000"
            height="1000"
            sizes="100vw"
            preserveTransformations
            src="https://res.cloudinary.com/dv6keahg3/image/upload/q_auto/f_auto/v1697384652/PortfolioSite/Iphone_3dportfolio_modern_desktop_1_unmjbe.png"
          />
        </motion.div>
        <div className="spacer"></div>
      </section>
    </main>
  );
};

export default PortfolioThreeJS;
