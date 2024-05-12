"use client";

import React from "react";
import { motion } from "framer-motion";
import RoundButton from "@/app/ui/RoundButton";
import { CldImage } from "next-cloudinary";

const ThreeDPortfolioSection = () => {
  return (
    <section className="my-8 px-3">
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
            src="v1697384654/PortfolioSite/Iphone_3dportfolio_modern_desktop_1_unmjbe.png"
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
            href={"https://github.com/joshl26/portfolio-2023"}
            buttonText={"GIT"}
            buttonClass={"round-button"}
            rel=""
            target=""
          />
          <RoundButton
            href={"https://joshlehman.ca/experimental"}
            buttonText={"LIVE SITE"}
            buttonClass={"round-button"}
            rel=""
            target=""
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
        <section className="portfolio-main-section mb-8">
          <h2 className="portfolio-h2 mb-4">DETAILS</h2>
          <div className="flex flex-row justify-between gap-3">
            <h4 className="w-1/2 portfolio-h4">Winter 2022 - Winter 2023</h4>
            <h4 className="w-1/2 xl:text-left text-right portfolio-h4">
              Previous Portfolio Site
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
        <section className="portfolio-main-section mb-8">
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
        <section className="portfolio-main-section mb-8">
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
            className="portfolio-screen my-8"
            alt="iphone laying on desk"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1697384654/PortfolioSite/Iphone_3dportfolio_modern_desktop_1_unmjbe.png"
          />
        </motion.div>
      </section>
    </section>
  );
};

export default ThreeDPortfolioSection;
