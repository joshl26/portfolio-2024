"use client";

/* eslint-disable react/no-unescaped-entities */
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
  "JAVASCRIPT",
  "CSS3",
  "HTML5",
  "WIREFRAMING",
  "UI/UX DESIGN",
  "REACT",
  "REDUX",
  "BABEL",
  "WEBPACK",
  "GIT",
];

// Key features data
const keyFeatures = [
  "Customization Engine: Utilizes complex matching algorithms to ensure that pertinent details are emphasized in response to different job postings.",
  "Interactive User Interface: Offers a clean, responsive design for easy navigation through various functionalities.",
  "Data Security: Implement secure login mechanisms and encrypted personal data storage.",
  "Direct Integration with Job Boards: Fetches live data from popular hiring platforms for accurate tailoring of documents.",
  "User-Friendly Interface: Ensures simple navigation and interaction across various functionalities within the platform.",
  "Dynamic Customization Capabilities: Uses bespoke algorithms to match users' profiles with suitable job descriptions, emphasizing necessary skills and experiences.",
  "Data Security Measures: Incorporates high-level security protocols to protect user data throughout their interaction with the service.",
];

// Tools & technologies data
const toolsTechnologies = [
  "Frontend Development: Utilized ReactJS and Next.js for their superior handling of stateful interactions and responsive design capabilities, enhancing user experience.",
  "Backend Development: Leveraged Node.js along with the Express framework, providing a robust backend structure capable of efficiently managing multiple user requests simultaneously.",
  "Database Management: MongoDB was chosen for its flexible document-oriented model, facilitating smooth storage, retrieval, and manipulation of various types of personal user data.",
  "CI/CD: The entire workflow from coding to deployment has been managed through Git. Highlights can be viewed on GitHub at [Resume Wrangler Repository](https://github.com/joshl26/resume-wrangler).",
];

// Screen images data
const screenImages = [
  {
    src: "v1713749853/ResumeWrangler/Resume_Wrangler_Resume_Styling_Page_1_guydrc.png",
    alt: "Resume Wrangler resume styling page",
    className: "showcase-card-container",
  },
  {
    src: "v1713749846/ResumeWrangler/Resume_Wrangler_Landing_Page_1_dyjemr.png",
    alt: "Resume Wrangler landing page",
    className: "portfolio-screen my-8",
  },
  {
    src: "v1713749846/ResumeWrangler/Resume_Wrangler_Landing_Page_2_r6z3vy.png",
    alt: "Resume Wrangler landing page section 2",
    className: "showcase-card-container my-8",
  },
  {
    src: "v1713749848/ResumeWrangler/Resume_Wrangler_Landing_Page_3_w7w9wg.png",
    alt: "Resume Wrangler landing page section 3",
    className: "showcase-card-container my-8",
  },
  {
    src: "v1713749848/ResumeWrangler/Resume_Wrangler_Landing_Page_4_lumjsw.png",
    alt: "Resume Wrangler landing page section 4",
    className: "showcase-card-container my-8",
  },
  {
    src: "v1713749849/ResumeWrangler/Resume_Wrangler_Landing_Page_5_uchzhv.png",
    alt: "Resume Wrangler landing page section 5",
    className: "showcase-card-container my-8",
  },
  {
    src: "v1713749851/ResumeWrangler/Resume_Wrangler_Register_Page_1_jfwacl.png",
    alt: "Resume Wrangler registration page",
    className: "showcase-card-container my-8",
  },
  {
    src: "v1713749850/ResumeWrangler/Resume_Wrangler_Login_Page_1_yiy86v.png",
    alt: "Resume Wrangler login page",
    className: "showcase-card-container my-8",
  },
  {
    src: "v1713749845/ResumeWrangler/Resume_Wrangler_Education_Page_1_e5jpw3.png",
    alt: "Resume Wrangler education page",
    className: "showcase-card-container my-8",
  },
];

const ResumeWranglerSection = () => {
  return (
    <div className="mt-6 mb-10 px-3">
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
              alt="Resume Wrangler hero image"
              width="1000"
              height="1000"
              sizes="(max-width: 768px) 100vw, 50vw"
              src="v1713749846/ResumeWrangler/Resume_Wrangler_Landing_Page_1_dyjemr.png"
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
            className="flex flex-row justify-around py-10"
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
                href="https://github.com/joshl26/resume-wrangler"
                buttonText="GIT"
                buttonClass="round-button"
                rel=""
                target="_blank"
              />
              <RoundButton
                buttonText="LIVE SITE"
                buttonClass="round-button"
                href="https://resume-wrangler.vercel.app/"
                rel=""
                target="_blank"
              />
              <RoundButton
                buttonText="UI/UX"
                buttonClass="round-button"
                rel=""
                target=""
                href=""
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
          <section className="portfolio-main-section pb-6">
            <h2 className="portfolio-h2 mb-6">PROJECT DETAILS</h2>
            <div className="flex flex-row justify-between">
              <h4 className="portfolio-h4">SPRING 2023 - CURRENT</h4>
              <h4 className="xl:text-left text-right portfolio-h4">
                COMMERCIAL PRODUCT
              </h4>
            </div>

            <div className="flex flex-row flex-wrap gap-y-3 justify-between py-8 font-ayer tracking-wider">
              <Suspense
                fallback={
                  <div className="flex gap-2 flex-wrap">
                    {Array(10)
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
              Resume Wrangler is a dynamic and innovative resume and cover
              letter customization tool aimed at revolutionizing how job seekers
              prepare their application materials. This web application provides
              an intuitive platform where users can input their professional
              information and automatically generate tailored resumes and cover
              letters based on specific job descriptions.
            </p>
            <p className="portfolio-p">
              Users can easily input their professional information into the
              system, which then processes this data using advanced algorithms
              to generate tailored resumes and cover letters specifically
              designed for individual job postings. This not only simplifies the
              application process but also significantly enhances the relevance
              and appeal of the application documents to prospective employers
            </p>
            <p className="portfolio-p">
              The project's core functionality revolves around parsing user data
              and aligning it seamlessly with the qualifications sought by
              employers. It incorporates smart algorithms that highlight the
              most relevant experiences, skills, and achievements – optimizing
              each application to stand out amidst competitive job markets.
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
          <section className="portfolio-main-section mb-8">
            <h2 className="portfolio-h2">KEY FEATURES</h2>
            <ul className="list-disc list-inside xl:list-outside">
              {keyFeatures.map((feature, index) => (
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
          <section className="portfolio-main-section mb-8">
            <h2 className="portfolio-h2">Tools & Technologies Used</h2>
            <ul className="list-disc list-inside xl:list-outside">
              {toolsTechnologies.map((tool, index) => (
                <li key={index} className="portfolio-p">
                  {tool}
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
              I successfully addressed these challenges by utilizing
              sophisticated algorithmic approaches combined with current web
              technologies, making Resume Wrangler highly efficient yet
              straightforward enough for non-techie users.
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
          <section className="portfolio-main-section mb-8">
            <h2 className="portfolio-h2">FONT TYPES</h2>
            <div className="flex justify-between items-end">
              <span>
                <h1 className="portfolio-font-lusi">LUSI</h1>
              </span>
              <div className="portfolio-li">
                <span>Weight</span>
                <ul className="list-none flex gap-2">
                  <li>200</li>
                  <li>500</li>
                  <li>800</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <span>
                <h1 className="portfolio-font-roboto">ROBO</h1>
              </span>
              <div className="portfolio-li">
                <span>Weight</span>
                <ul className="list-none flex gap-2">
                  <li>200</li>
                  <li>500</li>
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
            <h2 className="portfolio-h2 mb-8">SCREENS</h2>
          </MotionDiv>

          {screenImages.map((image, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.75, delay: 0.5 + index * 0.05 },
              }}
              viewport={{ once: true }}
            >
              <CldImage
                className={image.className}
                alt={image.alt}
                width="1000"
                height="1000"
                sizes="(max-width: 768px) 100vw, 50vw"
                src={image.src}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </MotionDiv>
          ))}
        </section>
      </Suspense>
    </div>
  );
};

export default ResumeWranglerSection;
