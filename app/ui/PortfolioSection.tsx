"use client";

import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import RoundButton from "@/app/ui/RoundButton";

const PortfolioSection = () => {
  return (
    <section className="">
      <div className="portfolio-grid">
        <div className="portfolio-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0,
              },
            }}
          >
            <Link href={"/portfolio/resume-wrangler"}>
              <CldImage
                className="showcase-card-container mt-8 mb-8"
                alt="resume wrangler hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1713540526/PortfolioSite/Resume_Wrangler_Landing_Page_1_n2arsw.png"
              />
              <CldImage
                className="showcase-card-container hidden md:block my-8"
                alt="resume wrangler hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1713540526/PortfolioSite/Resume_Wrangler_Landing_Page_1_n2arsw.png"
              />
            </Link>
          </motion.div>
        </div>
        <div className="portfolio-container mt-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0,
              },
            }}
            className="showcase-border-top"
          >
            <h3 className="showcased-h3">Résumé Wrangler</h3>
            <p className="showcased-p">
              Resume Wrangler is a dynamic and innovative resume and cover
              letter customization tool aimed at revolutionizing how jobseekers
              prepare their application materials. This web application provides
              an intuitive platform where users can input their professional
              information and automatically generate tailored resumes and cover
              letters based on specific job descriptions.
            </p>
            <div className="mt-8">
              <div>
                <ul className="showcased-list flex flex-row align-middle flex-wrap gap-4 justify-start my-2">
                  <li className="flex items-center rounded-full border p-2">
                    TYPESCRIPT
                  </li>
                  <li className="flex items-center rounded-full border p-2">
                    TAILWINDCSS
                  </li>
                  <li className="flex items-center rounded-full border p-2">
                    POSTGRESQL
                  </li>
                  <li className="flex items-center rounded-full border p-2">
                    REACTJS
                  </li>
                  <li className="flex items-center rounded-full border p-2">
                    TESTING
                  </li>
                  <li className="flex items-center rounded-full border p-2">
                    BACKEND DESIGN
                  </li>
                  <li className="flex items-center rounded-full border p-2">
                    FRONTEND DESIGN
                  </li>
                  <li className="flex items-center rounded-full border p-2">
                    NEXTJS
                  </li>
                  <li className="flex items-center rounded-full border p-2">
                    BABEL
                  </li>
                  <li className="flex items-center rounded-full border p-2">
                    WEBPACK
                  </li>
                  <li className="flex items-center rounded-full border p-2">
                    GIT
                  </li>
                  <li className="flex items-center rounded-full border p-2">
                    CI/CD
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row justify-around mt-8">
              <RoundButton
                href={"https://github.com/joshl26/nextjs-medusa-beanbag"}
                buttonClass={"round-button"}
                buttonText={"CODE"}
                target=""
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href={"https://storefront-git-main-joshl26.vercel.app/"}
                target=""
                rel=""
              />
              <Link href={"/portfolio/ecommerce/beanbag-coffee-co"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  target=""
                  rel=""
                  href=""
                />
              </Link>
            </div>
            <div className="spacer"></div>
          </motion.div>
        </div>
      </div>
      <div className="portfolio-grid">
        <div className="portfolio-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0,
              },
            }}
          >
            <Link href={"/portfolio/ecommerce/cleaner-by-design"}>
              <CldImage
                className="showcase-card-container mt-2 mb-0 sm:mb-8"
                alt="cleaner by design hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1713542395/PortfolioSite/CleanerByDesign_Landing_Page_1_npsuin.png"
              />
              <CldImage
                className="showcase-card-container my-8 hidden md:block"
                alt="cleaner by design hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1713542395/PortfolioSite/CleanerByDesign_Landing_Page_1_npsuin.png"
              />
              <CldImage
                className="showcase-card-container my-8 hidden md:block"
                alt="cleaner by design hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1713542395/PortfolioSite/CleanerByDesign_Landing_Page_1_npsuin.png"
              />
            </Link>
          </motion.div>
        </div>
        <div className="portfolio-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0,
              },
            }}
            className="showcase-border-top"
          >
            <h3 className="showcased-h3">Cleaner By Design</h3>
            <p className="showcased-p">
              Beanbag Coffee Co. is a headless e-commerce solution that provides
              a flexible framework for building custom e-commerce platforms. It
              offers features such as GraphQL API, server-side rendering,
              payment integrations, multi-currency support, and many others. The
              Beanbag Coffee Co. e-commerce project is a fully functional online
              store that allows customers to browse and purchase a variety of
              coffee products ranging from whole beans to ground coffee. The
              website is designed to be user-friendly and visually appealing,
              providing customers with an enjoyable shopping experience. The
              project uses MedusaJS as its core framework combined with other
              technologies such as NextJS for front-end development, Node.js for
              server-side rendering and PostgreSQL for the DB. This stack was
              chosen because it enables fast development of scalable
              applications while also offering performance benefits.
            </p>
            <div>
              <div>
                <ul className="showcased-list">
                  <li>TYPESCRIPT</li>
                  <li>TAILWINDCSS</li>
                  <li>POSTGRESQL</li>
                  <li>HEADLESS DESIGN</li>
                  <li>REDIS</li>
                </ul>
              </div>
              <div>
                <ul className="showcased-list">
                  <li>FRONTEND DESIGN</li>
                  <li>NEXTJS</li>
                  <li>BABEL</li>
                  <li>WEBPACK</li>
                  <li>GIT</li>
                </ul>
              </div>
            </div>
            <div>
              <RoundButton
                href={"https://github.com/joshl26/nextjs-medusa-beanbag"}
                buttonClass={"round-button"}
                buttonText={"CODE"}
                target=""
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href={"https://storefront-git-main-joshl26.vercel.app/"}
                target=""
                rel=""
              />
              <Link href={"/portfolio/ecommerce/beanbag-coffee-co"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  target=""
                  rel=""
                  href=""
                />
              </Link>
            </div>
            <div className="spacer"></div>
          </motion.div>
        </div>
      </div>
      <div className="portfolio-grid">
        <div className="portfolio-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0,
              },
            }}
          >
            <Link href={"/portfolio/ecommerce/cleaner-by-design"}>
              <CldImage
                className="showcase-card-container"
                alt="cleaner by design hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1704379963/PortfolioSite/beanbag-coffee-2a_ocgeuz.png"
              />
              <div className="spacer-small"></div>
              <div className="spacer-small"></div>
            </Link>
            <div className="spacer"></div>
          </motion.div>
        </div>
        <div className="portfolio-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0,
              },
            }}
            className="showcase-border-top"
          >
            <h3 className="showcased-h3">Beanbag Coffee Co.</h3>
            <p className="showcased-p">
              Beanbag Coffee Co. is a headless e-commerce solution that provides
              a flexible framework for building custom e-commerce platforms. It
              offers features such as GraphQL API, server-side rendering,
              payment integrations, multi-currency support, and many others. The
              Beanbag Coffee Co. e-commerce project is a fully functional online
              store that allows customers to browse and purchase a variety of
              coffee products ranging from whole beans to ground coffee. The
              website is designed to be user-friendly and visually appealing,
              providing customers with an enjoyable shopping experience. The
              project uses MedusaJS as its core framework combined with other
              technologies such as NextJS for front-end development, Node.js for
              server-side rendering and PostgreSQL for the DB. This stack was
              chosen because it enables fast development of scalable
              applications while also offering performance benefits.
            </p>
            <div>
              <div>
                <ul className="showcased-list">
                  <li>TYPESCRIPT</li>
                  <li>TAILWINDCSS</li>
                  <li>POSTGRESQL</li>
                  <li>HEADLESS DESIGN</li>
                  <li>REDIS</li>
                </ul>
              </div>
              <div>
                <ul className="showcased-list">
                  <li>FRONTEND DESIGN</li>
                  <li>NEXTJS</li>
                  <li>BABEL</li>
                  <li>WEBPACK</li>
                  <li>GIT</li>
                </ul>
              </div>
            </div>
            <div>
              <RoundButton
                href={"https://github.com/joshl26/nextjs-medusa-beanbag"}
                buttonClass={"round-button"}
                buttonText={"CODE"}
                target=""
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href={"https://storefront-git-main-joshl26.vercel.app/"}
                target=""
                rel=""
              />
              <Link href={"/portfolio/ecommerce/beanbag-coffee-co"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  target=""
                  rel=""
                  href=""
                />
              </Link>
            </div>
            <div className="spacer"></div>
          </motion.div>
        </div>
      </div>
      <div className="portfolio-grid">
        <div className="portfolio-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0,
              },
            }}
          >
            <Link href={"/portfolio/el-in"}>
              <CldImage
                className="showcase-card-container"
                alt="electronics inventory hero image"
                width="2000"
                height="2000"
                sizes="100vw"
                src="v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_golden_lka0ur.png"
              />
              <div className="spacer-small"></div>
              <div className="spacer-small"></div>
            </Link>
            <div className="spacer"></div>
          </motion.div>
        </div>
        <div className="portfolio-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0,
              },
            }}
            className="showcase-border-top"
          >
            <h3 className="showcased-h3">electronics inventory</h3>
            <p className="showcased-p">
              Electronics Inventory is a cutting-edge web based app that
              efficiently organizes electronic lab inventory for both small
              businesses and individuals alike. The backend API has been fully
              documented and tested using OpenAPI and Swagger. Electronics
              Inventory web-app is available on any device from desktop pc to
              the smallest handheld. Manage your electronics inventory from
              anywhere!
            </p>
            <div className="spacer-small"></div>
            <div>
              <div>
                <ul className="showcased-list">
                  <li>JAVASCRIPT</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  <li>WIREFRAMING</li>
                  <li>UI/UX DESIGN</li>
                  <li>REACT</li>
                  <li>REDUX</li>
                </ul>
              </div>
              <div>
                <ul className="showcased-list">
                  <li>OPENAPI</li>
                  <li>BACKEND DESIGN</li>
                  <li>EXPRESS</li>
                  <li>REST API</li>
                  <li>BABEL</li>
                  <li>WEBPACK</li>
                  <li>GIT</li>
                </ul>
              </div>
            </div>
            <div className="spacer-small"></div>
            <div>
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"FRONTEND CODE"}
                href="https://github.com/joshl26/electronics-inventory-frontend"
                target=""
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"BACKEND CODE"}
                href="https://github.com/joshl26/electronics-inventory-backend"
                target=""
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href="https://el-in.ca/"
                target=""
                rel=""
              />
              <Link href={"/portfolio/el-in/"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  href=""
                  target=""
                  rel=""
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="portfolio-grid">
        <div className="portfolio-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0,
              },
            }}
          >
            <Link href={"/portfolio/outdoorsy"}>
              <CldImage
                className="showcase-card-container"
                alt="outdoorsy app hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1697384652/PortfolioSite/Itab_outdoorsy_desert_horizontal_p92vrs.png"
              />
              <div className="spacer-small"></div>
              <div className="spacer-small"></div>
            </Link>
            <div className="spacer"></div>
          </motion.div>
        </div>
        <div className="portfolio-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0,
              },
            }}
            className="showcase-border-top"
          >
            <h3 className="showcased-h3">outdoorsy</h3>
            <p className="showcased-p">
              Outdoorsy is a comprehensive website project designed to cater to
              the needs of outdoor enthusiasts. The website serves as a platform
              where users can create and review various outdoor activities such
              as campsites, canoe routes, hiking trails, and much more.
            </p>
            <div>
              <div>
                <ul className="showcased-list">
                  <li>JAVASCRIPT</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  <li>WIREFRAMING</li>
                  <li>UI/UX DESIGN</li>
                </ul>
              </div>
              <div>
                <ul className="showcased-list">
                  <li>BACKEND DESIGN</li>
                  <li>EXPRESS</li>
                  <li>REST API</li>
                  <li>BABEL</li>
                  <li>WEBPACK</li>
                  <li>GIT</li>
                </ul>
              </div>
            </div>
            <div>
              <RoundButton
                href={"https://github.com/joshl26/Outdoorsy"}
                buttonClass={"round-button"}
                buttonText={"CODE"}
                target=""
                rel=""
              />
              <RoundButton
                href={"https://outdors.ca"}
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                target=""
                rel=""
              />
              <Link href={"/portfolio/outdoorsy"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  href=""
                  target=""
                  rel=""
                />
              </Link>
            </div>
            <div className="spacer"></div>
          </motion.div>
        </div>
      </div>
      <div className="portfolio-grid">
        <div className="portfolio-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0,
              },
            }}
          >
            <Link href={"/portfolio/3dportfolio"}>
              <CldImage
                className="showcase-card-container"
                alt="3d portfolio hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1697384652/PortfolioSite/Iphone_3dportfolio_modern_desktop_1_unmjbe.png"
              />
              <div className="spacer-small"></div>
              <div className="spacer-small"></div>
            </Link>
            <div className="spacer"></div>
          </motion.div>
        </div>
        <div className="portfolio-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0,
              },
            }}
            className="showcase-border-top"
          >
            <h3 className="showcased-h3">3D Portfolio</h3>
            <p className="showcased-p">
              An experimental three dimensional portfolio site created with
              ThreeJS and Blender. I had a lot of fun learning new technologies
              to complete this project. In the end the limitations of responsive
              styling within this 3d environment meant I had to switch back to a
              more traditional portfolio website layout to offer improved user
              accessibility over different devices, specifically older browsers.
              Still it was a FUN experiment and I do see applications for this
              type of tech in the future with AR (i.e. Augmented Reality).
            </p>
            <div>
              <div>
                <ul className="showcased-list">
                  <li>JAVASCRIPT</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  <li>REACT</li>
                  <li>REDUX</li>
                </ul>
              </div>
              <div>
                <ul className="showcased-list">
                  <li>FRONTEND DESIGN</li>
                  <li>BABEL</li>
                  <li>WEBPACK</li>
                  <li>GIT</li>
                </ul>
              </div>
            </div>
            <div>
              <RoundButton
                href={"https://github.com/joshl26/portfolio-2023"}
                buttonClass={"round-button"}
                buttonText={"CODE"}
                target=""
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href={"/portfolio/experimental"}
                target=""
                rel=""
              />
              <Link href={"/portfolio/3dportfolio"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  target=""
                  rel=""
                  href=""
                />
              </Link>
            </div>
            <div className="spacer"></div>
          </motion.div>
        </div>
      </div>
      <div className="portfolio-grid">
        <div className="portfolio-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0,
              },
            }}
          >
            <Link href={"/portfolio/pomodor"}>
              <CldImage
                className="showcase-card-container"
                alt="pomodoro timer hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1697384652/PortfolioSite/Iphone_leaves_shade_pomo_jhnhw6.png"
              />
              <div className="spacer-small"></div>
              <div className="spacer-small"></div>
            </Link>
            <div className="spacer"></div>
          </motion.div>
        </div>
        <div className="portfolio-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0,
              },
            }}
            className="showcase-border-top"
          >
            <h3 className="showcased-h3">Pomodor Timer</h3>
            <p className="showcased-p">
              This project was started in winter 2023 as an introduction to
              ReactJS. The goal was to explore basic and advanced topics such as
              prop drilling, React Router, responsive UI/UX design, and state
              management with Redux.
            </p>
            <div>
              <div>
                <ul className="showcased-list">
                  <li>JAVASCRIPT</li>
                  <li>BOOTSTRAP</li>
                  <li>HTML5</li>
                  <li>REACT</li>
                  <li>REDUX</li>
                </ul>
              </div>
              <div>
                <ul className="showcased-list">
                  <li>UI/UX DESIGN</li>

                  <li>BABEL</li>
                  <li>WEBPACK</li>
                  <li>GIT</li>
                </ul>
              </div>
            </div>
            <div>
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"CODE"}
                href={"https://github.com/joshl26/pomodoro-app"}
                target=""
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href={"https://joshlehman.ca/pomodor"}
                target=""
                rel=""
              />
              <Link href={"/portfolio/pomodor"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  href=""
                  target=""
                  rel=""
                />
              </Link>
            </div>
            <div className="spacer"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
