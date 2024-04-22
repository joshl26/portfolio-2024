/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import RoundButton from "@/app/ui/RoundButton";
import React from "react";
import { CldImage } from "next-cloudinary";

const CleanerByDesignSection = () => {
  return (
    <section className="my-8">
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
            alt="beanbag coffee co. hero"
            width="3000"
            height="3000"
            sizes="100vw"
            src="v1704378329/PortfolioSite/beanbag-coffee-2_rghloq.png"
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
          style={{ justifyContent: "space-between", display: "flex" }}
        >
          <span>
            <RoundButton
              href={"https://github.com/joshl26/nextjs-medusa-beanbag"}
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
              href={"https://storefront-git-main-joshl26.vercel.app/"}
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
              href="https://www.figma.com/file/of2oaPSPrse9hSU35jkvlB/Beanbag?type=design&node-id=0%3A1&mode=design&t=twYXNZu70vXFLblW-1"
            />
          </span>
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
          <div style={{ justifyContent: "space-between", display: "flex" }}>
            <span>
              <h4>December 2023 - January 2024</h4>
            </span>
            <span>
              <h4>E-COMMERCE SITE</h4>
            </span>
          </div>
          <div style={{ justifyContent: "space-between", display: "flex" }}>
            <span>
              <span>
                <RoundButton
                  buttonText={"TYPESCRIPT"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"TAILWINDCSS"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"POSTGRESQL"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"FIGMA LAYOUT"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"HEADLESS DESIGN"}
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
                  buttonText={"NEXTJS"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"REDIS"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"MEDUSAJS"}
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
          <p className="portfolio-p">
            Beanbag Coffee Co. is a headless e-commerce solution that provides a
            flexible framework for building custom e-commerce platforms. It
            offers features such as GraphQL API, server-side rendering, payment
            integrations, multi-currency support, and many others. The Beanbag
            Coffee Co. e-commerce project is a fully functional online store
            that allows customers to browse and purchase a variety of coffee
            products ranging from whole beans to ground coffee. The website is
            designed to be user-friendly and visually appealing, providing
            customers with an enjoyable shopping experience. The project uses
            MedusaJS as its core framework combined with other technologies such
            as NextJS for front-end development, Node.js for server-side
            rendering and PostgreSQL for the DB. This stack was chosen because
            it enables fast development of scalable applications while also
            offering performance benefits.
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
          <div className="portfolio-p">
            <ul>
              <li>
                Product Catalog Management - The first step in setting up an
                e-commerce platform is creating a product catalog that includes
                all the available products or services offered by the company.
                Using MedusaJS's GraphQL API, I was easily able to create
                product schemas for various types of products such as drinks of
                various sizes.
              </li>
              <li>
                User Authentication - To ensure security and personalized
                shopping experiences, user authentication is implemented using
                JWT (JSON Web Token). This allows users to create accounts, log
                in securely to access their profile data and order history.
              </li>
              <li>
                Shopping Cart - Customers can add products to their shopping
                cart while browsing through the website and have the option to
                edit or remove items before proceeding to checkout.
              </li>
              <li>
                Checkout Process - The checkout process is a crucial part of any
                e-commerce platform, and MedusaJS makes it easy to integrate
                different payment gateways. Customers can choose their preferred
                payment option and complete their purchase securely.
              </li>
              <li>
                Multi-Currency Support - As Beanbag Coffee Co. targets customers
                globally, the project includes multi-currency support using
                MedusaJS's currency conversion feature. This allows customers
                from different countries to view prices in their local currency.
              </li>
              <li>
                Order Management - All orders are managed through the Medusa
                dashboard where admins can track order status, manage inventory
                levels, and process refunds if needed.
              </li>
            </ul>
            <p>
              One major challenge while building this project was integrating
              the GraphQL API with React for seamless data communication between
              the front-end and back-end. However, with thorough documentation
              provided by MedusaJS and its active community support, this was
              overcome successfully.
            </p>
            <p>
              Another challenge was implementing server-side rendering for
              improved performance and SEO optimization. With MedusaJS's
              built-in server-side rendering capabilities powered by Next.js,
              this could be achieved seamlessly without much effort.
            </p>
            <p>
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
            className="showcase-card-container"
            alt="beanbag coffee co menu"
            width="3000"
            height="3000"
            sizes="100vw"
            src="v1704378329/PortfolioSite/beanbag-coffee-1_fw4uz2.png"
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
            className="showcase-card-container"
            alt="beanbag coffee co product page"
            width="3000"
            height="3000"
            sizes="100vw"
            src="v1704378329/PortfolioSite/beanbag-coffee-2_rghloq.png"
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
            className="showcase-card-container"
            alt="beanbag coffee co checkout"
            width="3000"
            height="3000"
            sizes="100vw"
            src="v1704378329/PortfolioSite/beanbag-coffee-3_opxmqe.png"
          />
        </motion.div>
      </section>
    </section>
  );
};

export default CleanerByDesignSection;
