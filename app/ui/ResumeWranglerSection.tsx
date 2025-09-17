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

// Tech stack data
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

// Key features
const keyFeatures = [
  "Customization Engine: Uses matching algorithms to emphasize the most relevant details for each job posting.",
  "Interactive UI: Clean, responsive interface for editing, previewing, and exporting resumes and cover letters.",
  "Secure Data Handling: Encrypted storage and safe authentication flows for personal user data.",
  "Job Board Integration: Pull job descriptions to automatically tailor content.",
  "ATS Optimization: Produces resumes formatted and structured for applicant tracking systems.",
  "Export Options: PDF, copy-paste friendly plaintext, and export presets.",
];

// Tools & technologies
const toolsTechnologies = [
  "React + Next.js for fast, SEO-friendly frontend",
  "Node.js backend running REST / serverless APIs",
  "MongoDB for flexible user data storage",
  "Git-based CI/CD with GitHub and Vercel for deployments",
];

// Screens (from original file)
const screenImages = [
  {
    src: "v1713749853/ResumeWrangler/Resume_Wrangler_Resume_Styling_Page_1_guydrc.png",
    alt: "Resume Wrangler resume styling page",
  },
  {
    src: "v1713749846/ResumeWrangler/Resume_Wrangler_Landing_Page_1_dyjemr.png",
    alt: "Resume Wrangler landing page",
  },
  {
    src: "v1713749846/ResumeWrangler/Resume_Wrangler_Landing_Page_2_r6z3vy.png",
    alt: "Resume Wrangler landing page section 2",
  },
  {
    src: "v1713749848/ResumeWrangler/Resume_Wrangler_Landing_Page_3_w7w9wg.png",
    alt: "Resume Wrangler landing page section 3",
  },
  {
    src: "v1713749848/ResumeWrangler/Resume_Wrangler_Landing_Page_4_lumjsw.png",
    alt: "Resume Wrangler landing page section 4",
  },
  {
    src: "v1713749849/ResumeWrangler/Resume_Wrangler_Landing_Page_5_uchzhv.png",
    alt: "Resume Wrangler landing page section 5",
  },
  {
    src: "v1713749851/ResumeWrangler/Resume_Wrangler_Register_Page_1_jfwacl.png",
    alt: "Resume Wrangler registration page",
  },
  {
    src: "v1713749850/ResumeWrangler/Resume_Wrangler_Login_Page_1_yiy86v.png",
    alt: "Resume Wrangler login page",
  },
  {
    src: "v1713749845/ResumeWrangler/Resume_Wrangler_Education_Page_1_e5jpw3.png",
    alt: "Resume Wrangler education page",
  },
];

const ResumeWranglerSection = () => {
  return (
    <div className="mt-6 mb-10 px-3">
      <Suspense
        fallback={<div className="animate-pulse bg-gray-200 h-64 rounded" />}
      >
        {/* Hero / CTA */}
        <section className="flex flex-col items-center text-center mb-12">
          <MotionDiv
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
            className="w-full max-w-4xl"
          >
            <CldImage
              className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-700/30"
              alt="Resume Wrangler hero"
              width={1200}
              height={700}
              src={screenImages[1].src}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
              priority
            />
          </MotionDiv>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Suspense
              fallback={
                <div className="flex gap-4">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="w-20 h-10 bg-gray-200 rounded" />
                    ))}
                </div>
              }
            >
              <RoundButton
                href="https://github.com/joshl26/resume-wrangler"
                buttonText="GIT"
                buttonClass="px-5 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold rounded-full shadow hover:scale-105 transition-transform"
                rel=""
                target="_blank"
              />
              <RoundButton
                href="https://resume-wrangler.vercel.app/"
                buttonText="LIVE SITE"
                buttonClass="px-5 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold rounded-full shadow hover:scale-105 transition-transform"
                rel=""
                target="_blank"
              />
              <RoundButton
                buttonText="UI/UX"
                buttonClass="px-5 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold rounded-full shadow"
                rel=""
                target=""
                href=""
              />
            </Suspense>
          </div>
        </section>

        {/* Details card */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.1 },
          }}
          viewport={{ once: true }}
        >
          <section className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 p-8 rounded-2xl shadow-2xl border border-gray-700/40 mb-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Project Details
                </h2>
                <p className="text-gray-300 max-w-2xl">
                  Resume Wrangler is a dynamic resume & cover letter
                  customization platform that uses smart algorithms to tailor
                  candidate documents to job postings while maintaining secure
                  and export-ready outputs.
                </p>
              </div>
              <div className="flex gap-6 text-sm text-gray-400">
                <div>
                  <div className="text-amber-400 font-semibold">
                    SPRING 2023 - CURRENT
                  </div>
                  <div className="mt-1">Commercial Product</div>
                </div>
                <div>
                  <div className="text-amber-400 font-semibold">PLATFORM</div>
                  <div className="mt-1">Web</div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex flex-wrap gap-3">
                {techStack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-gray-800/60 text-gray-200 text-xs rounded-full border border-gray-700/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">About</h3>
                <p className="text-gray-300 mb-3">
                  Users input professional information which the system
                  processes to generate targeted resumes and cover letters —
                  improving relevance and application success.
                </p>
                <p className="text-gray-300">
                  The app focuses on parsing user data, highlighting relevant
                  experiences, and producing exportable, ATS-friendly output.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Tools & Technologies
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {toolsTechnologies.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </MotionDiv>

        {/* Key features */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.15 },
          }}
          viewport={{ once: true }}
        >
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyFeatures.map((f, i) => (
                <li
                  key={i}
                  className="bg-gray-900/80 border border-gray-700/40 rounded-lg p-4 text-gray-300"
                >
                  <div className="text-amber-400 font-semibold mb-2">•</div>
                  <div>{f}</div>
                </li>
              ))}
            </ul>
          </section>
        </MotionDiv>

        {/* Challenges */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.2 },
          }}
          viewport={{ once: true }}
        >
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              Challenges & Solutions
            </h2>
            <p className="text-gray-300 mb-4">
              Integrating backend processing with frontend editing workflows
              required careful design of data flows and user feedback loops.
              Security and privacy considerations drove early adoption of
              encrypted storage and strong authentication.
            </p>
            <p className="text-gray-300">
              Real-time job data retrieval and accurate content tailoring were
              addressed using robust parsing and matching logic with careful
              performance optimization.
            </p>
          </section>
        </MotionDiv>

        {/* Fonts */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.25 },
          }}
          viewport={{ once: true }}
        >
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">Font Types</h2>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="bg-gray-900/80 p-4 rounded-lg border border-gray-700/30">
                <h3 className="text-white text-3xl font-semibold mb-2">LUSI</h3>
                <div className="flex gap-2 text-gray-300">
                  <span className="px-3 py-1 bg-gray-800/60 rounded">200</span>
                  <span className="px-3 py-1 bg-gray-800/60 rounded">500</span>
                  <span className="px-3 py-1 bg-gray-800/60 rounded">800</span>
                </div>
              </div>

              <div className="bg-gray-900/80 p-4 rounded-lg border border-gray-700/30">
                <h3 className="text-white text-3xl font-semibold mb-2">ROBO</h3>
                <div className="flex gap-2 text-gray-300">
                  <span className="px-3 py-1 bg-gray-800/60 rounded">200</span>
                  <span className="px-3 py-1 bg-gray-800/60 rounded">500</span>
                </div>
              </div>
            </div>
          </section>
        </MotionDiv>

        {/* Screens */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.3 },
          }}
          viewport={{ once: true }}
        >
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Screens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {screenImages.map((img, i) => (
                <MotionDiv
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.1 + i * 0.05 },
                  }}
                  viewport={{ once: true }}
                >
                  <CldImage
                    className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-700/30"
                    alt={img.alt}
                    width={1000}
                    height={700}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src={img.src}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </MotionDiv>
              ))}
            </div>
          </section>
        </MotionDiv>
      </Suspense>
    </div>
  );
};

export default ResumeWranglerSection;
