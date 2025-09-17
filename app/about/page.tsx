/* eslint-disable react/no-unescaped-entities */
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

export const metadata: Metadata = {
  title:
    "About | Blackrock Design - Full Stack Developer & Engineering Solutions",
  description:
    "Learn about our 20+ years of experience in mechanical engineering, robotics, software development, and full-stack web development. Specializing in React, NextJS, TypeScript, AWS, and industrial IoT solutions.",
  keywords: [
    "full stack developer",
    "mechanical engineer",
    "robotics engineer",
    "React developer",
    "NextJS developer",
    "TypeScript",
    "AWS",
    "industrial IoT",
    "software engineering",
    "web development",
  ],
  authors: [{ name: "Blackrock Design" }],
  creator: "Blackrock Design",
  publisher: "Blackrock Design",
  openGraph: {
    title:
      "About | Blackrock Design - Full Stack Developer & Engineering Solutions",
    description:
      "Experienced full-stack developer and mechanical engineer with 20+ years in software development, robotics, and industrial automation.",
    type: "website",
    locale: "en_US",
    siteName: "Blackrock Design",
    images: [
      {
        url: "/og-about.png",
        width: 1200,
        height: 630,
        alt: "Blackrock Design About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About | Blackrock Design - Full Stack Developer & Engineering Solutions",
    description:
      "20+ years experience in mechanical engineering, robotics, and full-stack web development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/about/",
  },
};

const About = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about/" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden lg:block absolute -top-28 -left-28 w-96 h-96 rounded-full bg-amber-600/6 blur-3xl transform rotate-45" />
        <div className="hidden lg:block absolute -bottom-28 -right-28 w-96 h-96 rounded-full bg-amber-400/6 blur-3xl transform -rotate-12" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8 py-12">
        {/* Structured data for Person (JSON-LD) */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Blackrock Design",
              url: "https://blackrock.design/",
              sameAs: [
                "https://github.com/joshl26/",
                "https://www.linkedin.com/in/joshrlehman/",
              ],
              jobTitle: "Full Stack Developer / Mechanical Engineer",
              description:
                "Experienced full-stack developer and mechanical engineer with 20+ years in software development, robotics, and industrial automation.",
            }),
          }}
        />

        {/* Breadcrumb */}
        <div className="pt-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* HERO - main title now matches Blog styling */}
        <section className="flex flex-col items-center text-center min-h-[56vh] justify-center py-10">
          <h1
            className="portfolio-h1 bg-gradient-to-r from-white via-amber-200 to-yellow-200 
                        bg-clip-text text-transparent mb-8 tracking-tight
                        drop-shadow-2xl text-6xl md:text-7xl lg:text-8xl font-black"
          >
            ABOUT
          </h1>

          <div className="mt-4 w-28 h-1 rounded-full bg-gradient-to-r from-amber-300 to-yellow-500" />

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl">
            Experienced in mechanical engineering, robotics, embedded systems,
            and full-stack web development. I design and build industrial IoT
            solutions, cloud-backed web apps, and reliable automation systems —
            focused on pragmatic, maintainable engineering.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/60 border border-amber-500/20 text-amber-300 font-medium">
              Full‑Stack & Embedded
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-200">
              Industrial IoT
            </span>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-10 max-w-4xl mx-auto prose prose-invert text-gray-300">
          <p>
            With two decades of experience in mechanical engineering, robotics,
            software engineering and full-stack web development, I bring a
            practical and multidisciplinary approach to complex problems. I am
            certified in areas spanning mechanical engineering, robotics, and
            embedded systems.
          </p>

          <p>
            As the Owner/Operator of Blackrock Design, I build and maintain web
            applications using modern stacks including Next.js, React,
            TypeScript, Tailwind CSS, PostgreSQL, MongoDB, and AWS. I also
            prototype embedded solutions with ESP32/ESP8266 and C++.
          </p>

          <p>
            I enjoy collaborating with clients and teams to deliver user-focused
            interfaces, reliable systems, and maintainable software. My work
            spans enterprise web apps, industrial automation, and
            research-oriented projects such as machine vision and autonomous
            systems.
          </p>

          <p>
            I am passionate about continuing to learn, contributing to
            open-source, and applying engineering discipline to build safe,
            scalable, and efficient systems.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section className="py-12 max-w-6xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
            ENGINEERING &amp; SOFTWARE EXPERIENCE
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <article className="group bg-gradient-to-br from-gray-900/80 to-gray-800/70 border border-gray-700/40 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <header className="text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-amber-300 mb-2">
                  LEAD SOFTWARE DEVELOPER / OWNER
                </h3>
                <div className="inline-flex items-center justify-center gap-3">
                  <span className="px-4 py-2 rounded-full bg-amber-400/10 text-amber-300 font-semibold">
                    SEPT 2022 - CURRENT
                  </span>
                </div>
              </header>

              <div className="mt-6 space-y-4 text-gray-300">
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    Develop modern web applications using Next.js, React, and
                    TypeScript.
                  </li>
                  <li>
                    Design and deploy cloud infrastructure on AWS and managed
                    services.
                  </li>
                  <li>
                    Prototype embedded IoT devices using ESP32/ESP8266 and MQTT.
                  </li>
                  <li>
                    Build machine-vision and ML prototyping pipelines for
                    robotics projects.
                  </li>
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind",
                    "AWS",
                    "Node.js",
                    "Postgres",
                    "MongoDB",
                    "C++",
                    "Embedded",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-800 text-amber-300 rounded-full text-sm border border-amber-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <article className="group bg-gradient-to-br from-gray-900/80 to-gray-800/70 border border-gray-700/40 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <header className="text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-amber-300 mb-2">
                  SOFTWARE &amp; AUTOMATION ENGINEER
                </h3>
                <div className="inline-flex items-center justify-center gap-3">
                  <span className="px-4 py-2 rounded-full bg-gray-800/50 text-amber-200 font-semibold border border-amber-400/10">
                    2006 - 2022
                  </span>
                </div>
              </header>

              <div className="mt-6 space-y-4 text-gray-300">
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    Custom CAD automation with AutoCAD LISP and Inventor
                    tooling.
                  </li>
                  <li>
                    SQL reporting, custom VB utilities, and legacy system
                    integration.
                  </li>
                  <li>
                    Robotic cell design and commissioning for manufacturing
                    lines.
                  </li>
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "AutoCAD",
                    "LISP",
                    "SQL Server",
                    "VB",
                    "Robotics",
                    "HMI",
                    "Kubernetes",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-800 text-amber-300 rounded-full text-sm border border-amber-500/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 mb-6">
              Interested in collaborating or need engineering help? I enjoy
              practical engineering challenges and building reliable systems.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:scale-[1.02] transform transition-all duration-200"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </div>

      {/* Page JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About — Blackrock Design",
            description:
              "Experienced full-stack developer and mechanical engineer with 20+ years in software development, robotics, and industrial automation.",
            url: "/about/",
            author: {
              "@type": "Person",
              name: "Blackrock Design",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "/about/",
            },
          }),
        }}
      />
    </main>
  );
};

export default About;
