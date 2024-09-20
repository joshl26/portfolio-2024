"use client";

import React from "react";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import RoundButton from "@/app/ui/RoundButton";
import { TransitionLink } from "../utils/TransitionLink";

const PortfolioSection = () => {
  return (
    <section className="mb-10">
      <div className="portfolio-grid">
        <div className="portfolio-container mt-2">
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
            <TransitionLink className="" href={"https://jackolanternai.com"}>
              <CldImage
                className="showcase-card-container mt-8 xl:mb-8"
                alt="Jack-O-Lantern hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1726856183/JackOLanternAi/homepage_tgtubt.jpg"
              />
              <CldImage
                className="showcase-card-container hidden md:block my-8"
                alt="Jack-O-Lantern hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1726856237/JackOLanternAi/homepage_banner_grey_il17ux.jpg"
              />
              <CldImage
                className="showcase-card-container hidden md:block xl:my-8"
                alt="Jack-O-Lantern hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1726856278/JackOLanternAi/8_msg7ff.jpg"
              />
            </TransitionLink>
          </motion.div>
        </div>
        <div className="portfolio-container xl:mt-8">
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
            <h3 className="showcased-h3">Jack-O-Lantern Ai</h3>
            <p className="showcased-p">
              Generate pumpkin carving templates with the power of Ai.
            </p>
            <p className="pt-6 text-3xl text-bold">
              COMING SOON - OCTOBER 2024
            </p>

            <div className="my-8">
              <div>
                <ul className="showcased-list flex flex-row align-middle flex-wrap gap-4 justify-start my-2">
                  <li className="showcased-btn">NEXTJS</li>
                  <li className="showcased-btn">TAILWINDCSS</li>
                  <li className="showcased-btn">TRPC</li>
                  <li className="showcased-btn">DRIZZLE</li>
                  <li className="showcased-btn">POSTGRESQL</li>
                  <li className="showcased-btn">DOCKER</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-3 justify-around my-8">
              <RoundButton
                href={"#"}
                buttonClass={"round-button"}
                buttonText={"CODE"}
                target="_blank"
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href={"https://jackolanternai.com"}
                target="_blank"
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"SEE MORE"}
                target="_blank"
                rel=""
                href={
                  "https://www.producthunt.com/posts/jack-o-lantern-ai/maker-invite?code=AMwAjM"
                }
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="border-t-[1px] mb-8 mt-2" />
      <div className="portfolio-grid">
        <div className="portfolio-container mt-2">
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
            <TransitionLink className="" href={"/portfolio/lucha-tacos"}>
              <CldImage
                className="showcase-card-container mt-8 xl:mb-8"
                alt="lucha tacos hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1718930369/PortfolioSite/lucha-tacos-screen_1_o70hjo.png"
              />
              <CldImage
                className="showcase-card-container hidden md:block my-8"
                alt="lucha-tacos hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1718930369/PortfolioSite/lucha-tacos-screen_2_kdh3wm.png"
              />
              <CldImage
                className="showcase-card-container hidden md:block xl:my-8"
                alt="lucha-tacos hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1718930368/PortfolioSite/lucha-tacos-screen_4_dwtqru.png"
              />
            </TransitionLink>
          </motion.div>
        </div>
        <div className="portfolio-container xl:mt-8">
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
            <h3 className="showcased-h3">Lucha Tacos</h3>
            <p className="showcased-p">
              Bring the dynamic and lively flavors of Mexico to your dining
              experience, infusing it with an extra element of excitement. Our
              tacos embody the spirit of masked wrestlers in the ring - brimming
              with robust combinations of freshly sourced ingredients and rich,
              savory seasonings that are certain to leave your taste buds
              clamoring for an encore. Step right up and feast your eyes on our
              tantalizing tacos that are akin to masked wrestlers in the ring,
              each one bursting with a powerful medley of the freshest
              ingredients and the most mouthwatering seasonings.
            </p>
            <p className="showcased-p">
              Lucha Tacos brings the bold and vibrant flavors of Mexico to your
              plate with a twist of excitement. Our tacos are like masked
              wrestlers in the ring - packed with powerful combinations of fresh
              ingredients and savory seasonings that will have your taste buds
              cheering for more. Our menu is prepared with the same level of
              enthusiasm and dedication as the luchadores from the bygone days
              when wrestling was a grand spectacle of passion and skill.
            </p>
            <div className="my-8">
              <div>
                <ul className="showcased-list flex flex-row align-middle flex-wrap gap-4 justify-start my-2">
                  <li className="showcased-btn">JAVASCRIPT</li>
                  <li className="showcased-btn">TAILWINDCSS</li>
                  <li className="showcased-btn">BABEL</li>
                  <li className="showcased-btn">WEBPACK</li>
                  <li className="showcased-btn">GIT</li>
                  <li className="showcased-btn">CI/CD</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-3 justify-around my-8">
              <RoundButton
                href={"https://github.com/joshl26/lucha-tacos"}
                buttonClass={"round-button"}
                buttonText={"CODE"}
                target="_blank"
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href={"https://lucha-tacos.vercel.app/"}
                target="_blank"
                rel=""
              />
              <TransitionLink className="" href={"/portfolio/lucha-tacos"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  target="_blank"
                  rel=""
                  href={""}
                />
              </TransitionLink>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="border-t-[1px] mb-8 mt-2" />

      <div className="portfolio-grid">
        <div className="portfolio-container mt-2">
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
            <TransitionLink className="" href={"/portfolio/resume-wrangler"}>
              <CldImage
                className="showcase-card-container mt-8 xl:mb-8"
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
                className="showcase-card-container hidden md:block xl:my-8"
                alt="resume wrangler hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1713749853/ResumeWrangler/Resume_Wrangler_Resume_Styling_Page_1_guydrc.png"
              />
            </TransitionLink>
          </motion.div>
        </div>
        <div className="portfolio-container xl:mt-8">
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
            <div className="my-8">
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
            <div className="flex flex-row flex-wrap gap-3 justify-around my-8">
              <RoundButton
                href={"https://github.com/joshl26/resume-wrangler"}
                buttonClass={"round-button"}
                buttonText={"CODE"}
                target="_blank"
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href={"https://resume-wrangler.vercel.app/"}
                target="_blank"
                rel=""
              />
              <TransitionLink className="" href={"/portfolio/resume-wrangler"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  target="_blank"
                  rel=""
                  href={""}
                />
              </TransitionLink>
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
            <TransitionLink
              className=""
              href={"/portfolio/ecommerce/cleaner-by-design"}
            >
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
            </TransitionLink>
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
            <div className="my-8">
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
            <div className="flex flex-row flex-wrap gap-3 justify-around my-8">
              <RoundButton
                href={"https://github.com/joshl26/medusa-cleanerbydesign"}
                buttonClass={"round-button"}
                buttonText={"CODE"}
                target="_blank"
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href={"https://cleanerbydesign.store/"}
                target="_blank"
                rel=""
              />
              <TransitionLink
                className=""
                href={"/portfolio/ecommerce/cleaner-by-design"}
              >
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  target=""
                  rel=""
                  href=""
                />
              </TransitionLink>
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
            <TransitionLink
              className=""
              href={"/portfolio/ecommerce/beanbag-coffee-co"}
            >
              <CldImage
                className="showcase-card-container mt-3 mb-8"
                alt="cleaner by design hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1704378328/PortfolioSite/beanbag-coffee-1a_qo9kef.png"
              />
              <CldImage
                className="showcase-card-container hidden md:block my-8"
                alt="cleaner by design hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1704378329/PortfolioSite/beanbag-coffee-1_fw4uz2.png"
              />
              <CldImage
                className="showcase-card-container hidden md:block xl:my-8"
                alt="cleaner by design hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1704378329/PortfolioSite/beanbag-coffee-2_rghloq.png"
              />
            </TransitionLink>
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
            <div className="my-8">
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
            <div className="flex flex-row flex-wrap gap-3 justify-around my-8">
              <RoundButton
                href={"https://github.com/joshl26/nextjs-medusa-beanbag"}
                buttonClass={"round-button"}
                buttonText={"CODE"}
                target="_blank"
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href={"https://storefront-git-main-joshl26.vercel.app/"}
                target="_blank"
                rel=""
              />
              <TransitionLink
                className=""
                href={"/portfolio/ecommerce/beanbag-coffee-co"}
              >
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  target=""
                  rel=""
                  href=""
                />
              </TransitionLink>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="border-t-[1px] mb-8 mt-2" />
      <div className="portfolio-grid">
        <div className="portfolio-container mt-2">
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
            <TransitionLink className="" href={"/portfolio/el-in"}>
              <CldImage
                className="showcase-card-container"
                alt="electronics inventory hero image"
                width="2000"
                height="2000"
                sizes="100vw"
                src="v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_golden_lka0ur.png"
              />
            </TransitionLink>
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
            <h3 className="showcased-h3">Electronics Inventory</h3>
            <p className="showcased-p">
              Electronics Inventory is a cutting-edge web based app that
              efficiently organizes electronic lab inventory for both small
              businesses and individuals alike. The backend API has been fully
              documented and tested using OpenAPI and Swagger. Electronics
              Inventory web-app is available on any device from desktop pc to
              the smallest handheld. Manage your electronics inventory from
              anywhere!
            </p>
            <div className="my-8">
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
            <div className="my-8 flex flex-row flex-wrap gap-3 justify-around">
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"FRONTEND CODE"}
                href="https://github.com/joshl26/electronics-inventory-frontend"
                target="_blank"
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"BACKEND CODE"}
                href="https://github.com/joshl26/electronics-inventory-backend"
                target="_blank"
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href="https://electronics-inventory-client.onrender.com/"
                target="_blank"
                rel=""
              />
              <TransitionLink className="" href={"/portfolio/el-in/"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  href=""
                  target=""
                  rel=""
                />
              </TransitionLink>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="border-t-[1px] mb-8 mt-2" />
      <div className="portfolio-grid">
        <div className="portfolio-container mt-2 mb-8">
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
            <TransitionLink className="" href={"/portfolio/outdoorsy"}>
              <CldImage
                className="showcase-card-container"
                alt="outdoorsy app hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1697384652/PortfolioSite/Itab_outdoorsy_desert_horizontal_p92vrs.png"
              />
            </TransitionLink>
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
            <h3 className="showcased-h3">Outdoorsy</h3>
            <p className="showcased-p">
              Outdoorsy is a comprehensive website project designed to cater to
              the needs of outdoor enthusiasts. The website serves as a platform
              where users can create and review various outdoor activities such
              as campsites, canoe routes, hiking trails, and much more.
            </p>
            <div className="my-8">
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
            <div className="flex flex-row flex-wrap gap-3 justify-around my-8">
              <RoundButton
                href={"https://github.com/joshl26/Outdoorsy"}
                buttonClass={"round-button"}
                buttonText={"CODE"}
                target="_blank"
                rel=""
              />
              <RoundButton
                href={"https://joshlehman.ca/outdoorsy"}
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                target="_blank"
                rel=""
              />
              <TransitionLink className="" href={"/portfolio/outdoorsy"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  href=""
                  target=""
                  rel=""
                />
              </TransitionLink>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="border-t-[1px] mb-8 mt-2"></div>
      <div className="portfolio-grid">
        <div className="portfolio-container mt-2">
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
            <TransitionLink className="" href={"/portfolio/3dportfolio"}>
              <CldImage
                className="showcase-card-container"
                alt="3d portfolio hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1697384652/PortfolioSite/Iphone_3dportfolio_modern_desktop_1_unmjbe.png"
              />
            </TransitionLink>
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
            <div className="my-8">
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
            <div className="flex flex-row flex-wrap gap-3 justify-around my-8">
              <RoundButton
                href={"https://github.com/joshl26/portfolio-2023"}
                buttonClass={"round-button"}
                buttonText={"CODE"}
                target="_blank"
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href={"/experimental"}
                target=""
                rel=""
              />
              <TransitionLink className="" href={"/portfolio/3dportfolio"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  target=""
                  rel=""
                  href=""
                />
              </TransitionLink>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="border-t-[1px] mb-8 mt-2"></div>
      <div className="portfolio-grid">
        <div className="portfolio-container mt-2">
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
            <TransitionLink className="" href={"/portfolio/pomodor"}>
              <CldImage
                className="showcase-card-container"
                alt="pomodoro timer hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1697384652/PortfolioSite/Iphone_leaves_shade_pomo_jhnhw6.png"
              />
            </TransitionLink>
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
            <h3 className="showcased-h3">Pomodor Timer</h3>
            <p className="showcased-p">
              This project was started in winter 2023 as an introduction to
              ReactJS. The goal was to explore basic and advanced topics such as
              prop drilling, React Router, responsive UI/UX design, and state
              management with Redux.
            </p>
            <div>
              <div className="my-8">
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
            <div className="flex flex-row flex-wrap gap-3 justify-around my-8">
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"CODE"}
                href={"https://github.com/joshl26/pomodoro-app"}
                target="_blank"
                rel=""
              />
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href={"https://joshlehman.ca/pomodor"}
                target="_blank"
                rel=""
              />
              <TransitionLink className="" href={"/portfolio/pomodor"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  href=""
                  target=""
                  rel=""
                />
              </TransitionLink>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="border-t-[1px] mb-8 mt-2"></div>
      <div className="portfolio-grid">
        <div className="portfolio-container mt-2">
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
            <TransitionLink className="" href={"/portfolio/blackrock-3d"}>
              <CldImage
                className="showcase-card-container"
                alt="nye mfg hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1716859619/PortfolioSite/Untitled_n2iqdo.png"
              />
            </TransitionLink>
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
            <h3 className="showcased-h3">BlackRock3D</h3>
            <p className="showcased-p">
              BlackRock3D is a wordpress site that was designed by Joshua Lehman
              in 2018 to showcase his skills in Engineering. This turned out to
              be the final catalyst in making me want to switch careers into
              software engineering.
            </p>
            <div>
              <div className="my-8">
                <ul className="showcased-list flex flex-row align-middle flex-wrap gap-4 justify-start my-2">
                  <li className="showcased-btn">JAVASCRIPT</li>
                  <li className="showcased-btn">WORDPRESS</li>
                  <li className="showcased-btn">HTML5</li>
                  <li className="showcased-btn">REACT</li>
                  <li className="showcased-btn">UI/UX DESIGN</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-3 justify-around my-8">
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href={"https://blackrock3d.ca/"}
                target="_blank"
                rel=""
              />
              <TransitionLink className="" href={"/portfolio/blackrock-3d"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  href=""
                  target=""
                  rel=""
                />
              </TransitionLink>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t-[1px] mb-8 mt-2"></div>
      <div className="portfolio-grid">
        <div className="portfolio-container mt-2">
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
            <TransitionLink className="" href={"/portfolio/nyemfg"}>
              <CldImage
                className="showcase-card-container"
                alt="nye mfg hero"
                width="1000"
                height="1000"
                sizes="100vw"
                src="v1716856540/PortfolioSite/Untitled_ixlgk5.png"
              />
            </TransitionLink>
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
            <h3 className="showcased-h3">Nye Manufacturing Ltd.</h3>
            <p className="showcased-p">
              Nye Manufacturing Ltd. is a family owned metal fabricating
              business with a primary focus on custom attachments. Founded in
              1952 by Jack Nye, our company offers expertise developed through
              more than 70 years of building, modifying and repairing heavy
              equipment of all types. Put our expertise to work for you.
            </p>
            <div>
              <div className="my-8">
                <ul className="showcased-list flex flex-row align-middle flex-wrap gap-4 justify-start my-2">
                  <li className="showcased-btn">JAVASCRIPT</li>
                  <li className="showcased-btn">WORDPRESS</li>
                  <li className="showcased-btn">HTML5</li>
                  <li className="showcased-btn">REACT</li>
                  <li className="showcased-btn">UI/UX DESIGN</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-3 justify-around my-8">
              <RoundButton
                buttonClass={"round-button"}
                buttonText={"LIVE SITE"}
                href={"https://nyemanufacturing.com/"}
                target="_blank"
                rel=""
              />
              <TransitionLink className="" href={"/portfolio/nyemfg"}>
                <RoundButton
                  buttonClass={"round-button"}
                  buttonText={"SEE MORE"}
                  href=""
                  target=""
                  rel=""
                />
              </TransitionLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
