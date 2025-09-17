/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaArrowCircleUp } from "react-icons/fa";
import ThreeScene from "../../ui/ThreeScene";
import IntroWorkCard from "../../ui/IntroWorkCard";
import { TransitionLink } from "../../utils/TransitionLink";

export default function Home() {
  const initialWorkCards = [
    {
      id: "1",
      href: "https://blackrock-engineering.ca/",
      cloudinaryPublicUrl:
        "v1733070733/BlackRockEngineering/xhz37tcgmyu60y6p7k8s.png",
      projectTitle: "BlackRock Engineering Services",
      description:
        "Professional engineering services website built with modern web technologies",
      technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      id: "3",
      href: "https://www.jackolanternai.com/",
      cloudinaryPublicUrl: "v1726856183/JackOLanternAi/homepage_tgtubt.jpg",
      projectTitle: "Jack O'Lantern AI",
      description:
        "AI-powered creative application for generating unique digital art and designs",
      technologies: ["AI/ML", "React", "API Integration"],
    },
    {
      id: "4",
      href: "/portfolio/lucha-tacos",
      cloudinaryPublicUrl:
        "v1718930369/PortfolioSite/lucha-tacos-screen_1_o70hjo.png",
      projectTitle: "Lucha Tacos",
      description:
        "Restaurant website with online ordering system and modern responsive design",
      technologies: ["React", "E-commerce", "Responsive Design"],
    },
  ];

  return (
    <main role="main" className="relative">
      {/* Hero Section with Interactive Background */}
      <section
        className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden"
        aria-label="Software Developer Introduction"
      >
        {/* ThreeScene only visible in hero section */}
        <div className="absolute inset-0 z-0">
          <ThreeScene />
        </div>

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-5"></div>

        <div className="relative z-10 text-center flex justify-center items-center h-screen max-w-screen-lg w-full mx-auto px-4">
          <div className="flex flex-col max-w-screen-xl mx-auto">
            <header className="flex flex-row flex-wrap">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col md:flex-row md:justify-around flex-wrap mx-auto items-center">
                  <div className="flex flex-col justify-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.3em] text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text mx-auto font-sans drop-shadow-2xl filter brightness-110 animate-pulse">
                      CREATING
                    </h1>
                  </div>
                  <div className="flex md:flex-row md:justify-around flex-wrap items-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl px-6 mx-auto tracking-[0.2em] text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text font-black drop-shadow-2xl transform hover:scale-105 transition-all duration-300 filter brightness-125">
                      PRAGMATIC
                    </h1>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1
                      className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.4em] text-transparent bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 bg-clip-text mx-auto font-sans drop-shadow-2xl filter brightness-110 animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    >
                      &
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-around flex-wrap items-center">
                  <div className="flex flex-col justify-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl px-6 tracking-[0.2em] text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-300 bg-clip-text font-black drop-shadow-2xl transform hover:scale-105 transition-all duration-300 filter brightness-125">
                      THOUGHTFUL
                    </h1>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1
                      className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.3em] text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text mx-auto font-sans drop-shadow-2xl filter brightness-110 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    >
                      SOFTWARE
                    </h1>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-row">
              <p
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light mx-auto mt-8 text-amber-100 font-sans drop-shadow-lg"
                aria-label="Professional software development experience since 2018"
              >
                - CIRCA 2018 -
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Clean light background */}
      <section
        className="relative py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100"
        aria-label="About the Developer"
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
              Full-Stack Software Developer & Digital Solution Architect
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-8">
            <p className="text-xl md:text-2xl font-light">
              With over{" "}
              <span className="font-bold text-amber-600">
                6 years of professional experience
              </span>{" "}
              in software development, I specialize in creating{" "}
              <span className="italic text-gray-800">
                pragmatic and thoughtful digital solutions
              </span>{" "}
              that solve real-world problems. My expertise spans the full
              development stack, from responsive frontend interfaces to scalable
              backend architectures.
            </p>

            <p className="text-lg md:text-xl">
              I'm passionate about{" "}
              <span className="font-bold text-amber-600">
                modern web technologies
              </span>{" "}
              including React, Next.js, Node.js, and TypeScript. My approach
              combines clean, maintainable code with user-centered design
              principles to deliver applications that are both powerful and
              intuitive. Whether building{" "}
              <span className="italic">custom web applications</span>,{" "}
              <span className="italic">e-commerce platforms</span>, or{" "}
              <span className="italic">AI-integrated solutions</span>, I focus
              on creating software that makes a meaningful impact.
            </p>

            <p className="text-lg md:text-xl">
              From concept to deployment, I work closely with clients to
              understand their unique challenges and deliver{" "}
              <span className="font-bold text-gray-800">
                tailored software solutions
              </span>{" "}
              that drive business growth and enhance user experiences.
            </p>
          </div>

          {/* Skills/Technologies Grid */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold mb-12 text-gray-900">
              Core Technologies & Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "React & Next.js",
                "TypeScript",
                "Node.js",
                "JavaScript ES6+",
                "Tailwind CSS",
                "API Development",
                "Database Design",
                "Responsive Design",
                "Git & Version Control",
                "Agile Development",
                "UI/UX Design",
                "Performance Optimization",
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white hover:bg-gradient-to-br hover:from-amber-50 hover:to-yellow-50 px-6 py-4 rounded-xl font-medium text-gray-800 hover:text-gray-900 border border-gray-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section - Dark grey background */}
      <section
        className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"
        aria-label="Recent Software Development Projects"
      >
        {/* Gold accent pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(30deg,#fbbf2412_12%,transparent_12.5%,transparent_87%,#fbbf2412_87.5%,#fbbf2412)] bg-[length:20px_35px]"></div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <TransitionLink
              className="group hover:scale-95 transition-all duration-300 cursor-pointer inline-block"
              href="/portfolio"
              aria-label="View complete portfolio of software development projects"
            >
              <div className="flex flex-row justify-center items-center gap-6 mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-wide text-white group-hover:text-amber-200 transition-colors duration-300">
                  RECENT SHOWCASED WORK
                </h2>
                <FaArrowCircleUp
                  className="text-3xl md:text-4xl transform rotate-45 transition-all duration-500 group-hover:rotate-90 text-amber-400 group-hover:text-amber-200"
                  aria-label="Navigate to full portfolio"
                />
              </div>
            </TransitionLink>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore my latest web development projects showcasing modern
              technologies, clean design, and robust functionality across
              various industries and use cases.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-8 items-start justify-center"
            role="list"
            aria-label="Featured software development projects"
          >
            {initialWorkCards.map((workCard, index) => (
              <article
                key={workCard.id}
                role="listitem"
                className="relative flex-grow px-4 min-w-0 max-w-lg"
                style={{ flexBasis: "400px" }}
              >
                <div className="transform hover:scale-105 transition-all duration-300">
                  <IntroWorkCard
                    workCard={{
                      ...workCard,
                      alt: `${workCard.projectTitle} - ${
                        workCard.description
                      }. Built with ${workCard.technologies.join(", ")}`,
                    }}
                    priority={index < 2} // Optimize loading for first 2 images
                  />
                </div>
                {/* Enhanced project description for SEO */}
                <div className="sr-only" aria-hidden="true">
                  {workCard.description} This {workCard.projectTitle} project
                  demonstrates expertise in {workCard.technologies.join(", ")}{" "}
                  and modern web development best practices including responsive
                  design, performance optimization, and user experience design.
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <TransitionLink
              href="/portfolio"
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
              aria-label="View all software development projects in portfolio"
            >
              View Complete Portfolio
              <FaArrowCircleUp className="ml-3 text-xl rotate-45 group-hover:rotate-90 transition-transform duration-300" />
            </TransitionLink>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section - Elegant grey and gold gradient */}
      <section
        className="relative py-20 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white overflow-hidden"
        aria-label="Contact Information"
      >
        {/* Animated background elements with gold accents */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your next software development project. I specialize
            in creating custom web applications that drive results and exceed
            expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 hover:from-amber-600 hover:to-yellow-600 font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
              aria-label="Contact for software development services"
            >
              <span className="group-hover:text-gray-800 transition-colors duration-300">
                Start a Project
              </span>
            </a>
            <a
              href="/about"
              className="px-10 py-5 border-2 border-amber-400 hover:border-amber-300 text-gray-300 hover:text-white hover:bg-amber-400/10 font-semibold rounded-xl transition-all duration-300 hover:shadow-xl"
              aria-label="Learn more about my software development experience"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
