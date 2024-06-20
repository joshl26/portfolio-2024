/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import RoundButton from "@/app/ui/RoundButton";
import { CldImage } from "next-cloudinary";

const ElectronicsInventorySection = () => {
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
            width="2000"
            height="2000"
            sizes="100vw"
            src="v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_golden_lka0ur.png"
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
            href={"https://github.com/joshl26/electronics-inventory-frontend"}
            buttonText={"GIT"}
            buttonClass={"round-button"}
            rel=""
            target="_blank"
          />
          <RoundButton
            buttonText={"LIVE SITE"}
            buttonClass={"round-button"}
            href={"https://joshlehman.ca/elin"}
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
          <h2 className="portfolio-h2 mb-8">DETAILS</h2>
          <div className="flex flex-row justify-between">
            <h4 className="portfolio-h4">Spring 2023 - Fall 2023</h4>
            <h4 className="xl:text-left text-right portfolio-h4">
              COMMMERCIAL PRODUCT
            </h4>
          </div>
          <div className="flex flex-row flex-wrap gap-y-3 justify-between my-8">
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
              buttonText={"OPENAPI"}
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
            Are you struggling to manage your electronics inventory and worried
            that it might hinder your business growth? Look no further than
            Electronics Inventory (Ei) - a cutting-edge inventory management
            system designed for businesses of all sizes. Ei's software is
            user-friendly, feature-rich, and cloud-based, making it easy to
            manage your inventory levels from anywhere in the world, on any
            device. Our system is easy to set up, and has the flexibility to
            handle the most complex inventory management needs of large and
            international corporations. With a free 30-day demo available, we
            are confident that Ei will exceed your expectations and help take
            your business to the next level. So why wait? Put the power of Ei to
            work for your business today!
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
          <p className="portfolio-p ">
            I am extremely passionate about designing software programs that put
            humans first, and with EI, we have created inventory management
            software that people actually want to use, not just have to use. We
            are proud to deliver several key performance indicators (KPIs)
            related to the lifecycle of electronics inventory within your
            organization in the most efficient manner possible. Our app has a
            uniquely organic design and layout that allows for the free flow of
            information, improving overall efficiency, just like how it works in
            biological organisms. We treat your business like a biological
            organism, which requires proper care and sustenance. With EI, we are
            confident that we are different from traditional inventory
            management systems you may have used in the past.
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
              <h1 className="portfolio-font-nunito">NUNITO</h1>
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
          >
            <span className="portfolio-font-cabin">CABIN</span>
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
                <li>500</li>
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
            className="showcase-card-container my-8"
            alt="laptop in a modern office"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_a1gelp.png"
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
            alt="laptop on a gold platform"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_golden_lka0ur.png"
          />
        </motion.div>
      </section>
    </section>
  );
};

export default ElectronicsInventorySection;
