/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { lazy, Suspense } from "react";

// Lazy load heavy dependencies
const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.div }))
);
const CldImage = lazy(() =>
  import("next-cloudinary").then((mod) => ({ default: mod.CldImage }))
);
const RoundButton = lazy(() => import("@/app/ui/RoundButton"));

// Tech stack data moved to constant
const techStack = [
  "TYPESCRIPT",
  "TAILWINDCSS",
  "POSTGRESQL",
  "FIGMA LAYOUT",
  "HEADLESS DESIGN",
  "NEXTJS",
  "REDIS",
  "MEDUSAJS",
  "BABEL",
  "WEBPACK",
  "GIT",
];

// Screen images data
const screenImages = [
  {
    src: "v1704378329/PortfolioSite/beanbag-coffee-1_fw4uz2.png",
    alt: "Beanbag Coffee Co. menu page",
  },
  {
    src: "v1704378329/PortfolioSite/beanbag-coffee-2_rghloq.png",
    alt: "Beanbag Coffee Co. product page",
  },
  {
    src: "v1704378329/PortfolioSite/beanbag-coffee-3_opxmqe.png",
    alt: "Beanbag Coffee Co. checkout page",
  },
];

// Design features data
const designFeatures = [
  "Product Catalog Management - The first step in setting up an e-commerce platform is creating a product catalog that includes all the available products or services offered by the company. Using MedusaJS's GraphQL API, I was easily able to create product schemas for various types of products such as drinks of various sizes.",
  "User Authentication - To ensure security and personalized shopping experiences, user authentication is implemented using JWT (JSON Web Token). This allows users to create accounts, log in securely to access their profile data and order history.",
  "Shopping Cart - Customers can add products to their shopping cart while browsing through the website and have the option to edit or remove items before proceeding to checkout.",
  "Checkout Process - The checkout process is a crucial part of any e-commerce platform, and MedusaJS makes it easy to integrate different payment gateways. Customers can choose their preferred payment option and complete their purchase securely.",
  "Multi-Currency Support - As Beanbag Coffee Co. targets customers globally, the project includes multi-currency support using MedusaJS's currency conversion feature. This allows customers from different countries to view prices in their local currency.",
  "Order Management - All orders are managed through the Medusa dashboard where admins can track order status, manage inventory levels, and process refunds if needed.",
];

const BeanbagCoffeeSection = () => {
  return (
    <section className="my-8 px-3">
      <Suspense
        fallback={
          <div className="animate-pulse bg-gray-200 h-64 rounded"></div>
        }
      >
        <section>
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.75, delay: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <CldImage
              className="showcase-card-container"
              alt="Beanbag Coffee Co. hero image"
              width="3000"
              height="3000"
              sizes="(max-width: 768px) 100vw, 50vw"
              src="v1704378329/PortfolioSite/beanbag-coffee-2_rghloq.png"
              loading="eager"
              priority
            />
          </MotionDiv>
        </section>

        <section>
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.75, delay: 0.5 },
            }}
            viewport={{ once: true }}
            className="flex flex-row justify-around my-8"
          >
            <Suspense
              fallback={
                <div className="flex gap-4">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="w-20 h-10 bg-gray-200 rounded"
                      ></div>
                    ))}
                </div>
              }
            >
              <RoundButton
                href="https://github.com/joshl26/nextjs-medusa-beanbag"
                buttonText="GIT"
                buttonClass="round-button"
                rel=""
                target="_blank"
              />
              <RoundButton
                buttonText="LIVE SITE"
                buttonClass="round-button"
                href="https://storefront-git-main-joshl26.vercel.app/"
                rel=""
                target="_blank"
              />
              <RoundButton
                buttonText="UI/UX"
                buttonClass="round-button"
                rel=""
                target="_blank"
                href="https://www.figma.com/file/of2oaPSPrse9hSU35jkvlB/Beanbag?type=design&node-id=0%3A1&mode=design&t=twYXNZu70vXFLblW-1"
              />
            </Suspense>
          </MotionDiv>
        </section>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.75, delay: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <section className="portfolio-main-section">
            <h2 className="portfolio-h2 mb-8">DETAILS</h2>
            <div className="flex flex-row justify-between gap-x-3">
              <h4 className="portfolio-h4">December 2023 - February 2024</h4>
              <h4 className="xl:text-left text-right portfolio-h4">
                E-COMMERCE SITE
              </h4>
            </div>

            <div className="flex flex-row flex-wrap gap-3 justify-start my-8">
              <Suspense
                fallback={
                  <div className="flex gap-2 flex-wrap">
                    {Array(11)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="w-16 h-8 bg-gray-200 rounded"
                        ></div>
                      ))}
                  </div>
                }
              >
                {techStack.map((tech) => (
                  <RoundButton
                    key={tech}
                    buttonText={tech}
                    buttonClass="showcased-btn"
                    rel=""
                    target=""
                    href=""
                  />
                ))}
              </Suspense>
            </div>

            <p className="portfolio-p">
              Beanbag Coffee Co. is a headless e-commerce solution that provides
              a flexible framework for building custom e-commerce platforms. It
              offers features such as GraphQL API, server-side rendering,
              payment integrations, multi-currency support, and many others. The
              Beanbag Coffee Co. e-commerce project is a fully functional online
              store that allows customers to browse and purchase a variety of
              coffee products ranging from whole beans to ground coffee.
            </p>
            <p className="portfolio-p mb-8">
              This website is designed to be user-friendly and visually
              appealing, providing customers with an enjoyable shopping
              experience. The project uses MedusaJS as its core framework
              combined with other technologies such as NextJS for front-end
              development, Node.js for server-side rendering and PostgreSQL for
              the DB. This stack was chosen because it enables fast development
              of scalable applications while also offering performance benefits.
            </p>
          </section>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.75, delay: 0.25 },
          }}
          viewport={{ once: true }}
        >
          <section className="portfolio-main-section">
            <h2 className="portfolio-h2">DESIGN INTENT</h2>
            <ul className="list-disc list-inside xl:list-outside">
              {designFeatures.map((feature, index) => (
                <li key={index} className="portfolio-p">
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.75, delay: 0.25 },
          }}
          viewport={{ once: true }}
        >
          <section className="portfolio-main-section">
            <h2 className="portfolio-h2">CHALLENGES OVERCOME</h2>
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
          </section>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.75, delay: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <section className="portfolio-main-section">
            <h2 className="portfolio-h2">FONT TYPES</h2>
            <div className="flex justify-between items-end">
              <span>
                <h1 className="portfolio-font-nunito">NUNITO</h1>
              </span>
              <div className="portfolio-li">
                <span>Weight</span>
                <ul className="list-none flex gap-2">
                  <li>200</li>
                  <li>300</li>
                  <li>500</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <span className="portfolio-font-cabin">CABIN</span>
              <div className="portfolio-li">
                <span>Weight</span>
                <ul className="list-none flex gap-2">
                  <li>400</li>
                  <li>500</li>
                  <li>600</li>
                  <li>700</li>
                </ul>
              </div>
            </div>
          </section>
        </MotionDiv>

        <section className="portfolio-main-section">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.75, delay: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <h2 className="portfolio-h2">SCREENS</h2>
          </MotionDiv>

          {screenImages.map((image, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.75, delay: 0.5 + index * 0.1 },
              }}
              viewport={{ once: true }}
            >
              <CldImage
                className="showcase-card-container my-8"
                alt={image.alt}
                width="3000"
                height="3000"
                sizes="(max-width: 768px) 100vw, 50vw"
                src={image.src}
                loading="lazy"
              />
            </MotionDiv>
          ))}
        </section>
      </Suspense>
    </section>
  );
};

export default BeanbagCoffeeSection;
