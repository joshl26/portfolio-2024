"use client";

import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import RoundButton from "@/app/ui/RoundButton";

const PortfolioSection = () => {
  return (
    <section className="mb-20">
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
                src="v1713749845/ResumeWrangler/Resume_Wrangler_Dashboard_Page_1_lghqt5.png"
              />
              <CldImage
                className="showcase-card-container hidden md:block my-8"
                alt="resume wrangler hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1713749853/ResumeWrangler/Resume_Wrangler_Resume_Styling_Page_1_guydrc.png"
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
              Resume Wrangler is an innovative and dynamic tool created to
              redefine the way job seekers prepare their application documents.
              This web-based application features an intuitive platform that
              users can leverage to input their professional details, which are
              then used to automatically generate customized resumes and cover
              letters specific to varying job descriptions.
            </p>
            <p className="showcased-p">
              The goal of Resume Wrangler is not just about transformation, but
              also about empowerment. Job applicants can seamlessly navigate
              through the process of customizing their applications. A feature
              previously seen as daunting becomes, a convenient online resource
              for success. The Wrangler brings a progressive change in the world
              of career development, by providing a user-friendly interface.
            </p>
            <div className="mt-6">
              <div>
                <ul className="showcased-list flex flex-row align-middle flex-wrap gap-4 justify-start my-2">
                  <li className="showcased-btn">TYPESCRIPT</li>
                  <li className="showcased-btn">TAILWINDCSS</li>
                  <li className="showcased-btn">POSTGRESQL</li>
                  <li className="showcased-btn">REACTJS</li>
                  <li className="showcased-btn">TESTING</li>
                  <li className="showcased-btn">BACKEND DESIGN</li>
                  <li className="showcased-btn">FRONTEND DESIGN</li>
                  <li className="showcased-btn">NEXTJS</li>
                  <li className="showcased-btn">BABEL</li>
                  <li className="showcased-btn">WEBPACK</li>
                  <li className="showcased-btn">GIT</li>
                  <li className="showcased-btn">CI/CD</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row justify-around my-8">
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
              <Link href={"/portfolio/resume-wrangler"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  target=""
                  rel=""
                  href=""
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="border-t-[1px] mb-8 mt-2" />
      <div className="portfolio-grid">
        <div className="portfolio-container">
          <motion.div
            className="showcase-border-top"
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
                src="v1713545937/PortfolioSite/CleanerByDesign_Product_Page_1_saw9xt.png"
              />
              <CldImage
                className="showcase-card-container my-8 hidden md:block"
                alt="cleaner by design hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1713545943/PortfolioSite/CleanerByDesign_Checkout_Page_1_fcqqge.png"
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
          >
            <h3 className="showcased-h3">Cleaner By Design</h3>
            <p className="showcased-p">
              Cleaner By Design is an e-commerce web application designed to
              provide a seamless online shopping experience. This platform
              specializes in offering eco-friendly and sustainable home
              organization products, catering to a niche market of
              environmentally conscious consumers. Built using Next.js,
              PostgreSQL, and TypeScript, the project not only highlights
              technical proficiency but also demonstrates a commitment to
              modern, scalable web technologies aligned with innovative business
              practices.
            </p>
            <p className="showcased-p">
              The inclusion of eco-friendly products geared towards
              sustainability gives Cleaner By Design a unique edge by meeting
              the demand for environmentally conscious solutions within the home
              organization sector. The choice of Next.js as the front-end
              framework showcases a forward-thinking approach to development
              while PostgreSQL ensures robust database management. Additionally,
              leveraging TypeScript enhances code quality and maintainability
              throughout the project.
            </p>
            <div className="mt-6">
              <div>
                <ul className="showcased-list flex flex-row align-middle flex-wrap gap-4 justify-start my-2">
                  <li className="showcased-btn">TYPESCRIPT</li>
                  <li className="showcased-btn">TAILWINDCSS</li>
                  <li className="showcased-btn">POSTGRESQL</li>
                  <li className="showcased-btn">HEADLESS DESIGN</li>
                  <li className="showcased-btn">REDIS</li>
                  <li className="showcased-btn">FRONTEND DESIGN</li>
                  <li className="showcased-btn">NEXTJS</li>
                  <li className="showcased-btn">BABEL</li>
                  <li className="showcased-btn">WEBPACK</li>
                  <li className="showcased-btn">GIT</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row justify-around my-8">
              <RoundButton
                href={"https://github.com/joshl26/medusa-cleanerbydesign"}
                buttonClass={"round-button"}
                buttonText={"CODE"}
                target=""
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href={"https://cleanerbydesign.store/"}
                target=""
                rel=""
              />
              <Link href={"/portfolio/ecommerce/cleaner-by-design"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  target=""
                  rel=""
                  href=""
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="border-t-[1px] mb-8 mt-2"></div>
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
                className="showcase-card-container mt-3 mb-8"
                alt="cleaner by design hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1704378328/PortfolioSite/beanbag-coffee-1a_qo9kef.png"
              />
              <CldImage
                className="showcase-card-container my-8"
                alt="cleaner by design hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1704378329/PortfolioSite/beanbag-coffee-1_fw4uz2.png"
              />
              <CldImage
                className="showcase-card-container my-8"
                alt="cleaner by design hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1704378329/PortfolioSite/beanbag-coffee-2_rghloq.png"
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
            <h3 className="showcased-h3">Beanbag Coffee Co.</h3>
            <p className="showcased-p">
              The Beanbag Coffee Co. e-commerce project is a fully functional
              online store that allows customers to browse and purchase a
              variety of coffee products ranging from whole beans to ground
              coffee. The website is designed to be user-friendly and visually
              appealing, providing customers with an enjoyable shopping
              experience. The project uses MedusaJS as its core framework
              combined with other technologies such as NextJS for front-end
              development, Node.js for server-side rendering and PostgreSQL for
              the DB. This stack was chosen because it enables fast development
              of scalable applications while also offering performance benefits.
            </p>
            <div className="mt-6">
              <div>
                <ul className="showcased-list flex flex-row align-middle flex-wrap gap-4 justify-start my-2">
                  <li className="showcased-btn">TYPESCRIPT</li>
                  <li className="showcased-btn">TAILWINDCSS</li>
                  <li className="showcased-btn">POSTGRESQL</li>
                  <li className="showcased-btn">HEADLESS DESIGN</li>
                  <li className="showcased-btn">REDIS</li>
                  <li className="showcased-btn">FRONTEND DESIGN</li>
                  <li className="showcased-btn">NEXTJS</li>
                  <li className="showcased-btn">BABEL</li>
                  <li className="showcased-btn">WEBPACK</li>
                  <li className="showcased-btn">GIT</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row justify-around my-8">
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
          </motion.div>
        </div>
      </div>
      <div className="border-t-[1px] mb-8 mt-2"></div>
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
            <div className="mt-6">
              <div>
                <ul className="showcased-list flex flex-row align-middle flex-wrap gap-4 justify-start my-2">
                  <li className="showcased-btn">JAVASCRIPT</li>
                  <li className="showcased-btn">CSS3</li>
                  <li className="showcased-btn">HTML5</li>
                  <li className="showcased-btn">WIREFRAMING</li>
                  <li className="showcased-btn">UI/UX DESIGN</li>
                  <li className="showcased-btn">REACT</li>
                  <li className="showcased-btn">REDUX</li>
                  <li className="showcased-btn">OPENAPI</li>
                  <li className="showcased-btn">BACKEND DESIGN</li>
                  <li className="showcased-btn">EXPRESS</li>
                  <li className="showcased-btn">REST API</li>
                  <li className="showcased-btn">BABEL</li>
                  <li className="showcased-btn">WEBPACK</li>
                  <li className="showcased-btn">GIT</li>
                </ul>
              </div>
            </div>
            <div className="my-8">
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
      <div className="border-t-[1px] mb-8 mt-2" />
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
            <h3 className="showcased-h3">outdoorsy</h3>
            <p className="showcased-p">
              Outdoorsy is a comprehensive website project designed to cater to
              the needs of outdoor enthusiasts. The website serves as a platform
              where users can create and review various outdoor activities such
              as campsites, canoe routes, hiking trails, and much more.
            </p>
            <div className="mt-6">
              <div>
                <ul className="showcased-list flex flex-row align-middle flex-wrap gap-4 justify-start my-2">
                  <li className="showcased-btn">JAVASCRIPT</li>
                  <li className="showcased-btn">CSS3</li>
                  <li className="showcased-btn">HTML5</li>
                  <li className="showcased-btn">WIREFRAMING</li>
                  <li className="showcased-btn">UI/UX DESIGN</li>
                  <li className="showcased-btn">BACKEND DESIGN</li>
                  <li className="showcased-btn">EXPRESS</li>
                  <li className="showcased-btn">REST API</li>
                  <li className="showcased-btn">BABEL</li>
                  <li className="showcased-btn">WEBPACK</li>
                  <li className="showcased-btn">GIT</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row justify-around my-8">
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
          </motion.div>
        </div>
      </div>
      <div className="border-t-[1px] mb-8 mt-2"></div>
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
            <div className="mt-6">
              <div>
                <ul className="showcased-list flex flex-row align-middle flex-wrap gap-4 justify-start my-2">
                  <li className="showcased-btn">JAVASCRIPT</li>
                  <li className="showcased-btn">CSS3</li>
                  <li className="showcased-btn">HTML5</li>
                  <li className="showcased-btn">REACT</li>
                  <li className="showcased-btn">REDUX</li>
                  <li className="showcased-btn">FRONTEND DESIGN</li>
                  <li className="showcased-btn">BABEL</li>
                  <li className="showcased-btn">WEBPACK</li>
                  <li className="showcased-btn">GIT</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row justify-around my-8">
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
          </motion.div>
        </div>
      </div>
      <div className="border-t-[1px] mb-8 mt-2"></div>
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
            <h3 className="showcased-h3">Pomodor Timer</h3>
            <p className="showcased-p">
              This project was started in winter 2023 as an introduction to
              ReactJS. The goal was to explore basic and advanced topics such as
              prop drilling, React Router, responsive UI/UX design, and state
              management with Redux.
            </p>
            <div>
              <div>
                <ul className="showcased-list flex flex-row align-middle flex-wrap gap-4 justify-start my-2">
                  <li className="showcased-btn">JAVASCRIPT</li>
                  <li className="showcased-btn">BOOTSTRAP</li>
                  <li className="showcased-btn">HTML5</li>
                  <li className="showcased-btn">REACT</li>
                  <li className="showcased-btn">REDUX</li>
                  <li className="showcased-btn">UI/UX DESIGN</li>
                  <li className="showcased-btn">BABEL</li>
                  <li className="showcased-btn">WEBPACK</li>
                  <li className="showcased-btn">GIT</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row justify-around my-8">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
