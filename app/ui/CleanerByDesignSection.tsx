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
          className="flex flex-row just justify-around my-8"
        >
          <RoundButton
            href={"https://github.com/joshl26/nextjs-medusa-beanbag"}
            buttonText={"GIT"}
            buttonClass={"round-button"}
            rel=""
            target="_blank"
          />
          <RoundButton
            buttonText={"LIVE SITE"}
            buttonClass={"round-button"}
            href={"https://storefront-git-main-joshl26.vercel.app/"}
            rel=""
            target="_blank"
          />
          <RoundButton
            buttonText={"UI/UX"}
            buttonClass={"round-button"}
            rel=""
            target="_blank"
            href="https://www.figma.com/file/of2oaPSPrse9hSU35jkvlB/Beanbag?type=design&node-id=0%3A1&mode=design&t=twYXNZu70vXFLblW-1"
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
          <div className="flex flex-row justify-between">
            <h4>December 2023 - January 2024</h4>
            <h4>E-COMMERCE SITE</h4>
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
            Beanbag Coffee Co. is a headless e-commerce solution that provides a
            flexible framework for building custom e-commerce platforms. It
            offers features such as GraphQL API, server-side rendering, payment
            integrations, multi-currency support, and many others. The Beanbag
            Coffee Co. e-commerce project is a fully functional online store
            that allows customers to browse and purchase a variety of coffee
            products ranging from whole beans to ground coffee. The website is
            designed to be user-friendly and visually appealing, providing
            customers with an enjoyable shopping experience.
          </p>
          <p className="portfolio-p">
            This project uses MedusaJS as its core framework combined with other
            technologies such as NextJS for front-end development, Node.js for
            server-side rendering and PostgreSQL for the DB. This stack was
            chosen because it enables fast development of scalable applications
            while also offering performance benefits.
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
              Product Catalog Management - The first step in setting up an
              e-commerce platform is creating a product catalog that includes
              all the available products or services offered by the company.
              Using MedusaJS's GraphQL API, I was easily able to create product
              schemas for various types of products such as drinks of various
              sizes.
            </li>
            <li className="portfolio-p">
              User Authentication - To ensure security and personalized shopping
              experiences, user authentication is implemented using JWT (JSON
              Web Token). This allows users to create accounts, log in securely
              to access their profile data and order history.
            </li>
            <li className="portfolio-p">
              Shopping Cart - Customers can add products to their shopping cart
              while browsing through the website and have the option to edit or
              remove items before proceeding to checkout.
            </li>
            <li className="portfolio-p">
              Checkout Process - The checkout process is a crucial part of any
              e-commerce platform, and MedusaJS makes it easy to integrate
              different payment gateways. Customers can choose their preferred
              payment option and complete their purchase securely.
            </li>
            <li className="portfolio-p">
              Multi-Currency Support - As Beanbag Coffee Co. targets customers
              globally, the project includes multi-currency support using
              MedusaJS's currency conversion feature. This allows customers from
              different countries to view prices in their local currency.
            </li>
            <li className="portfolio-p">
              Order Management - All orders are managed through the Medusa
              dashboard where admins can track order status, manage inventory
              levels, and process refunds if needed.
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
          <h2 className="portfolio-h2">CHALLENGES OVERCOME</h2>
          <div>
            <p className="portfolio-p">
              One major challenge while building this project was integrating
              the GraphQL API with React for seamless data communication between
              the front-end and back-end. However, with thorough documentation
              provided by MedusaJS and its active community support, this was
              overcome successfully.
            </p>
            <p className="portfolio-p">
              Another challenge was implementing server-side rendering for
              improved performance and SEO optimization. With MedusaJS's
              built-in server-side rendering capabilities powered by Next.js,
              this could be achieved seamlessly without much effort.
            </p>
            <p className="portfolio-p">
              In conclusion, the Beanbag Coffee Co. e-commerce project using
              MedusaJS showcases the flexibility and power of this headless
              e-commerce solution. It offers all the necessary features to
              create a fully functional online store while providing developers
              with enough room for customization and personalization according
              to business needs. This project serves as an example of how
              businesses can leverage modern technologies such as MedusaJS to
              provide unique and personalized shopping experiences for their
              customers.
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
