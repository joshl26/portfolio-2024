"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import RoundButton from "@/app/ui/RoundButton";
import { CldImage } from "next-cloudinary";

const LuchaTacosSection = () => {
  return (
    <div className="mt-6 mb-10 px-3">
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
            src="v1718930369/PortfolioSite/lucha-tacos-screen_1_o70hjo.png"
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
          className="flex flex-row justify-around py-10"
        >
          <RoundButton
            href={"https://github.com/joshl26/lucha-tacos"}
            buttonText={"GIT"}
            buttonClass={"round-button"}
            rel=""
            target="_blank"
          />
          <RoundButton
            buttonText={"LIVE SITE"}
            buttonClass={"round-button"}
            href={"https://lucha-tacos.vercel.app/"}
            rel=""
            target="_blank"
          />
          <RoundButton
            buttonText={"UI/UX"}
            buttonClass={"round-button"}
            rel=""
            target=""
            href="_blank"
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
        <section className="portfolio-main-section pb-6">
          <h2 className="portfolio-h2 mb-6">PROJECT DETAILS</h2>
          <div className="flex flex-row justify-between">
            <h4 className="portfolio-h4">SPRING 2023 - CURRENT</h4>
            <h4 className="xl:text-left text-right portfolio-h4">
              COMMERCIAL PRODUCT
            </h4>
          </div>
          <div className="flex flex-row flex-wrap gap-y-3 justify-between py-8 font-ayer tracking-wider">
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
            Bring the dynamic and lively flavors of Mexico to your dining
            experience, infusing it with an extra element of excitement. Our
            tacos embody the spirit of masked wrestlers in the ring - brimming
            with robust combinations of freshly sourced ingredients and rich,
            savory seasonings that are certain to leave your taste buds
            clamoring for an encore. Step right up and feast your eyes on our
            tantalizing tacos that are akin to masked wrestlers in the ring,
            each one bursting with a powerful medley of the freshest ingredients
            and the most mouthwatering seasonings.
          </p>
          <p className="portfolio-p">
            Lucha Tacos brings the bold and vibrant flavors of Mexico to your
            plate with a twist of excitement. Our tacos are like masked
            wrestlers in the ring - packed with powerful combinations of fresh
            ingredients and savory seasonings that will have your taste buds
            cheering for more. Our menu is prepared with the same level of
            enthusiasm and dedication as the luchadores from the bygone days
            when wrestling was a grand spectacle of passion and skill.
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
          <h2 className="portfolio-h2">KEY FEATURES</h2>
          <ul className="list-disc list-inside xl:list-outside">
            <li className="portfolio-p">
              Interactive User Interface: Offers a clean, responsive design for
              easy navigation through various functionalities.
            </li>
            <li className="portfolio-p">
              Data Security: Implement secure login mechanisms and encrypted
              personal data storage.
            </li>
            <li className="portfolio-p">
              Direct Integration with Job Boards: Fetches live data from popular
              hiring platforms for accurate tailoring of documents.
            </li>
            <li className="portfolio-p">
              User-Friendly Interface: Ensures simple navigation and interaction
              across various functionalities within the platform.
            </li>
            <li className="portfolio-p">
              Dynamic Customization Capabilities: Uses bespoke algorithms to
              match users' profiles with suitable job descriptions, emphasizing
              necessary skills and experiences.
            </li>
            <li className="portfolio-p">
              Data Security Measures: Incorporates high-level security protocols
              to protect user data throughout their interaction with the
              service.
            </li>
          </ul>
        </section>
      </motion.div>
      {/* <motion.div
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
          <h2 className="portfolio-h2">Challenges Faced</h2>
          <p className="portfolio-p">
            Developing a seamless interface between the frontend inputs and
            backend processing logic required meticulous debugging during the
            initial stages. Ensuring privacy while handling confidential user
            information prompted the implementation of advanced security
            protocols early in development.
          </p>
          <p className="portfolio-p">
            One significant obstacle in this project involved integrating
            real-time job data fetching mechanisms from various sources while
            maintaining quick response times for end-users. Another challenge
            was ensuring that personalized content generation maintained
            accuracy in matching candidate skill sets with job demands while
            producing engaging narratives within cover letters.
          </p>
          <p className="portfolio-p">
            I successfully addressed these challenges by utilizing sophisticated
            algorithmic approaches combined with current web technologies,
            making Resume Wrangler highly efficient yet straightforward enough
            for non-techie users.
          </p>
        </section>
      </motion.div> */}
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
              <h1 className="portfolio-font-lusi">LUSI</h1>
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
                <li>800</li>
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
            <span>
              <h1 className="portfolio-font-roboto">ROBO</h1>
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
          <h2 className="portfolio-h2 mb-8">SCREENS</h2>
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
            className="showcase-card-container"
            alt="lucha tacos screenshot"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1718930369/PortfolioSite/lucha-tacos-screen_1_o70hjo.png"
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
            alt="lucha tacos screenshot"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1718930369/PortfolioSite/lucha-tacos-screen_2_kdh3wm.png"
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
            alt="lucha tacos screenshot"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1718930368/PortfolioSite/lucha-tacos-screen_3_bnag4c.png"
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
            alt="lucha tacos screenshot"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1718930368/PortfolioSite/lucha-tacos-screen_4_dwtqru.png"
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
            alt="lucha tacos screenshot"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1718930368/PortfolioSite/lucha-tacos-screen_5_wob8pc.png"
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
            alt="lucha tacos screenshot"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1718930367/PortfolioSite/lucha-tacos-screen_6_korhr6.png"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default LuchaTacosSection;
