/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import RoundButton from "@/app/ui/RoundButton";
import React from "react";
import { CldImage } from "next-cloudinary";

const CleanerByDesignSection = () => {
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
            className="showcase-card-container"
            alt="cleaner by design hero"
            width="3000"
            height="3000"
            sizes="100vw"
            src="v1713832219/CleanerByDesign/CleanerByDesign_Landing_Page_2_pmri4x.png"
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
          className="flex flex-row just justify-around gap-y-3 my-8"
        >
          <RoundButton
            href={"https://github.com/joshl26/medusa-cleanerbydesign"}
            buttonText={"GIT"}
            buttonClass={"round-button"}
            rel=""
            target="_blank"
          />
          <RoundButton
            buttonText={"LIVE SITE"}
            buttonClass={"round-button"}
            href={"https://cleanerbydesign.store/"}
            rel=""
            target="_blank"
          />
          <RoundButton
            buttonText={"UI/UX"}
            buttonClass={"round-button"}
            rel=""
            target="_blank"
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
          <h2 className="portfolio-h2">DETAILS</h2>
          <div className="flex flex-row gap-x-3 justify-between">
            <h4 className="portfolio-h4">December 2023 - January 2024</h4>
            <h4 className="xl:text-left text-right portfolio-h4">
              E-COMMERCE SITE
            </h4>
          </div>
          <div className="flex flex-row flex-wrap justify-between gap-3 my-8">
            <RoundButton
              buttonText={"TYPESCRIPT"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
            <RoundButton
              buttonText={"TAILWINDCSS"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
            <RoundButton
              buttonText={"POSTGRESQL"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
            <RoundButton
              buttonText={"FIGMA LAYOUT"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
            <RoundButton
              buttonText={"HEADLESS DESIGN"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
            <RoundButton
              buttonText={"NEXTJS"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
            <RoundButton
              buttonText={"REDIS"}
              buttonClass={"showcased-btn"}
              rel=""
              target=""
              href=""
            />
            <RoundButton
              buttonText={"MEDUSAJS"}
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
            Cleaner By Design is an e-commerce web application designed to
            provide a seamless online shopping experience. This platform
            specializes in offering eco-friendly and sustainable home
            organization products, catering to a niche market of environmentally
            conscious consumers. Built using Next.js, PostgreSQL, and
            TypeScript, the project not only highlights technical proficiency
            but also demonstrates a commitment to modern, scalable web
            technologies aligned with innovative business practices.
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
          <ul className="list-disc list-inside xl:list-outside">
            <li className="portfolio-p">
              Sustainable Product Catalog: A detailed catalog showcasing modern
              eco-friendly home organization solutions that are better for both
              the consumer and the planet.
            </li>
            <li className="portfolio-p">
              Secure Checkout Process: Integrated secure payment systems
              ensuring user security during transactions.
            </li>
            <li className="portfolio-p">Multi currency support</li>
            <li className="portfolio-p">
              User Profile Management: Allows users to create profiles where
              they can track orders, save favorite products, and manage payment
              methods securely.
            </li>
            <li className="portfolio-p">
              Responsive Design: Adjustable UI components optimized for various
              devices enhancing usability across different platforms.
            </li>
          </ul>
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
          <h2 className="portfolio-h2">CHALLENGES</h2>
          <div>
            <p className="portfolio-p">
              One major challenge was integrating real-time data updates
              frequently seen in stock levels or prices without performance
              penalties on user experiences – solved by efficiently structuring
              database calls through advanced SQL scripts paired effectively
              within our Redux state management flows implemented via hooks
              provided by Next.js framework itself.
            </p>
          </div>
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
          <h2 className="portfolio-h2">SOLUTIONS</h2>
          <div>
            <p className="portfolio-p">
              Platform Migration: Migrated existing product listings and
              customer data from old systems to leverage Medusa’s headless
              architecture.
            </p>
            <p className="portfolio-p">
              Customized Shopping Features: Developed interactive UI
              enhancements using React on top of the headless commerce
              functionality provided by Medusa.
            </p>
            <p className="portfolio-p">
              Secure Payment Gateway Integration: Ensured secure transactions
              with integrated payment options optimized for speed and protection
              against fraud.
            </p>
          </div>
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
              <h1 className="portfolio-font-roboto">ROBOTO</h1>
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
                <li>300</li>
                <li>700</li>
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
            <span className="portfolio-font-ubuntu">UBUNTU</span>
            <div className="portfolio-li">
              <span>Weight</span>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.625rem",
                }}
              >
                <li>400</li>
                <li>600</li>
                <li>700</li>
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
            className="showcase-card-container mb-8"
            alt="cleaner by design hero"
            width="3000"
            height="3000"
            sizes="100vw"
            src="v1713832219/CleanerByDesign/CleanerByDesign_Landing_Page_2_pmri4x.png"
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
            alt="beanbag coffee co menu"
            width="3000"
            height="3000"
            sizes="100vw"
            src="v1713803752/CleanerByDesign/CleanerByDesign_Landing_Page_1_gjhlhh.png"
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
            alt="beanbag coffee co product page"
            width="3000"
            height="3000"
            sizes="100vw"
            src="v1713803750/CleanerByDesign/CleanerByDesign_Product_Page_1_nu1nna.png"
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
            alt="beanbag coffee co checkout"
            width="3000"
            height="3000"
            sizes="100vw"
            src="v1713803749/CleanerByDesign/CleanerByDesign_Checkout_Page_1_lxzccv.png"
          />
        </motion.div>
      </section>
    </section>
  );
};

export default CleanerByDesignSection;
