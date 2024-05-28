"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import RoundButton from "@/app/ui/RoundButton";
import { CldImage } from "next-cloudinary";

const NyeMfgSection = () => {
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
            src="v1716856540/PortfolioSite/Untitled_ixlgk5.png"
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
            href={"https://github.com/joshl26/resume-wrangler"}
            buttonText={"GIT"}
            buttonClass={"round-button"}
            rel=""
            target="_blank"
          />
          <RoundButton
            buttonText={"LIVE SITE"}
            buttonClass={"round-button"}
            href={"https://resume-wrangler.vercel.app/"}
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
            <h4 className="portfolio-h4">SUMMER 2017 - WINTER 2018</h4>
            <h4 className="xl:text-left text-right portfolio-h4">
              COMMERCIAL WEBSITE
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
          </div>
          <p className="portfolio-p">
            Nye Manufacturing Ltd. is a family owned metal fabricating business
            with a primary focus on custom attachments. Founded in 1952 by Jack
            Nye, our company offers expertise developed through more than 70
            years of building, modifying and repairing heavy equipment of all
            types. Put our expertise to work for you.
          </p>
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
          <h2 className="portfolio-h2">KEY FEATURES</h2>
          <ul className="list-disc list-inside xl:list-outside">
            <li className="portfolio-p">
              Customization Engine: Utilizes complex matching algorithms to
              ensure that pertinent details are emphasized in response to
              different job postings.
            </li>
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
          <h2 className="portfolio-h2">Tools & Technologies Used</h2>
          <ul className="list-disc list-inside xl:list-outside">
            <li className="portfolio-p">
              Frontend Development: Utilized ReactJS and Next.js for their
              superior handling of stateful interactions and responsive design
              capabilities, enhancing user experience.
            </li>
            <li className="portfolio-p">
              Backend Development: Leveraged Node.js along with the Express
              framework, providing a robust backend structure capable of
              efficiently managing multiple user requests simultaneously.
            </li>
            <li className="portfolio-p">
              Database Management: MongoDB was chosen for its flexible
              document-oriented model, facilitating smooth storage, retrieval,
              and manipulation of various types of personal user data.
            </li>
            <li className="portfolio-p">
              CI/CD: The entire workflow from coding to deployment has been
              managed through Git. Highlights can be viewed on GitHub at [Resume
              Wrangler Repository](https://github.com/joshl26/resume-wrangler).
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
      </motion.div> */}
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
            alt="nye mfg hero"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1716856540/PortfolioSite/Untitled_ixlgk5.png"
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
            alt="blackrock3d"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1716860325/PortfolioSite/Untitled_n8zknn.png"
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
            alt="blackrock3d"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1716860411/PortfolioSite/Untitled_rqsduq.png"
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
            alt="blackrock3d"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1716860519/PortfolioSite/Untitled_xtddcq.png"
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
            alt="blackrock3d"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1716860670/PortfolioSite/Untitled_i32dvq.png"
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
            alt="blackrock3d"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1716860717/PortfolioSite/Untitled_i6uel7.png"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default NyeMfgSection;
