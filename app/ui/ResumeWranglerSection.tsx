"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import RoundButton from "@/app/ui/RoundButton";
import { CldImage } from "next-cloudinary";

const ResumeWranglerSection = () => {
  return (
    <div className="max-w-screen-xl m-auto mt-6 mb-10">
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
            src="v1713749846/ResumeWrangler/Resume_Wrangler_Landing_Page_1_dyjemr.png"
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
        <section className="portfolio-main-section pb-6">
          <h2 className="portfolio-h2 mt-6">DETAILS</h2>
          <div style={{ justifyContent: "space-between", display: "flex" }}>
            <span>
              <h4>SPRING 2023-CURRENT</h4>
            </span>
            <span>
              <h4>COMMERCIAL PRODUCT</h4>
            </span>
          </div>
          <div className="flex flex-row justify-between py-8">
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
            Resume Wrangler is a dynamic and innovative resume and cover letter
            customization tool aimed at revolutionizing how job seekers prepare
            their application materials. This web application provides an
            intuitive platform where users can input their professional
            information and automatically generate tailored resumes and cover
            letters based on specific job descriptions.
          </p>
          <p className="portfolio-p">
            Users can easily input their professional information into the
            system, which then processes this data using advanced algorithms to
            generate tailored resumes and cover letters specifically designed
            for individual job postings. This not only simplifies the
            application process but also significantly enhances the relevance
            and appeal of the application documents to prospective employers
          </p>
          <p className="portfolio-p">
            The project's core functionality revolves around parsing user data
            and aligning it seamlessly with the qualifications sought by
            employers. It incorporates smart algorithms that highlight the most
            relevant experiences, skills, and achievements – optimizing each
            application to stand out amidst competitive job markets.
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
        <section className="portfolio-main-section py-6">
          <h2 className="portfolio-h2">KEY FEATURES</h2>
          <ul className="list-disc list-inside">
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
        <section className="portfolio-main-section py-6">
          <h2 className="portfolio-h2">Tools & Technologies Used</h2>
          <ul className="list-disc list-inside">
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
        <section className="portfolio-main-section py-6">
          <h2 className="portfolio-h2">Challenges Faced</h2>
          <p className="showcased-p">
            Developing a seamless interface between the frontend inputs and
            backend processing logic required meticulous debugging during the
            initial stages. Ensuring privacy while handling confidential user
            information prompted the implementation of advanced security
            protocols early in development.
          </p>
          <p className="showcased-p">
            One significant obstacle in this project involved integrating
            real-time job data fetching mechanisms from various sources while
            maintaining quick response times for end-users. Another challenge
            was ensuring that personalized content generation maintained
            accuracy in matching candidate skill sets with job demands while
            producing engaging narratives within cover letters.
          </p>
          <p className="showcased-p">
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
        <section className="portfolio-main-section py-6">
          <h2 className="portfolio-h2">FONT TYPES</h2>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <span>
              <h1 className="portfolio-font-lusi">LUSITANA</h1>
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
          <h2 className="portfolio-h2 mt-8 mb-8">SCREENS</h2>
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
            alt="outdoorsy app hero"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1713749853/ResumeWrangler/Resume_Wrangler_Resume_Styling_Page_1_guydrc.png"
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
            alt="tablets among the rocks"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1713749846/ResumeWrangler/Resume_Wrangler_Landing_Page_1_dyjemr.png"
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
            alt="outdoorsy app hero"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1713749846/ResumeWrangler/Resume_Wrangler_Landing_Page_2_r6z3vy.png"
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
            alt="outdoorsy app hero"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1713749848/ResumeWrangler/Resume_Wrangler_Landing_Page_3_w7w9wg.png"
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
            alt="outdoorsy app hero"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1713749848/ResumeWrangler/Resume_Wrangler_Landing_Page_4_lumjsw.png"
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
            alt="outdoorsy app hero"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1713749849/ResumeWrangler/Resume_Wrangler_Landing_Page_5_uchzhv.png"
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
            alt="outdoorsy app hero"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1713749851/ResumeWrangler/Resume_Wrangler_Register_Page_1_jfwacl.png"
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
            alt="outdoorsy app hero"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1713749850/ResumeWrangler/Resume_Wrangler_Login_Page_1_yiy86v.png"
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
            alt="outdoorsy app hero"
            width="1000"
            height="1000"
            sizes="100vw"
            src="v1713749845/ResumeWrangler/Resume_Wrangler_Education_Page_1_e5jpw3.png"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default ResumeWranglerSection;
