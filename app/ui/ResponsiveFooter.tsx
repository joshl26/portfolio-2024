import { FaLinkedinIn, FaGithub, FaYoutubeSquare } from "react-icons/fa";

const ResponsiveFooter = () => {
  return (
    <footer
      className="relative z-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 py-12 px-6 mt-auto shadow-lg"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Copyright section */}
          <div className="text-center lg:text-left">
            <a
              href="mailto:joshlehman.dev@gmail.com?subject=Portfolio%20Site%20Contact"
              className="inline-block group transition-all duration-300 hover:scale-105"
              aria-label="Contact Josh Lehman via email"
            >
              <p className="text-lg font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300">
                © Josh Lehman
              </p>
              <p className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">
                Full Stack Developer
              </p>
            </a>
          </div>

          {/* Social media links */}
          <nav
            className="flex items-center gap-6"
            aria-label="Social media links"
          >
            <a
              href="https://www.linkedin.com/in/joshrlehman/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-gray-700/50 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/25"
              aria-label="Visit Josh Lehman's LinkedIn profile"
            >
              <FaLinkedinIn
                className="text-xl text-gray-300 group-hover:text-gray-900 transition-colors duration-300"
                aria-hidden="true"
              />
            </a>

            <a
              href="https://github.com/joshl26"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-gray-700/50 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/25"
              aria-label="Visit Josh Lehman's GitHub profile"
            >
              <FaGithub
                className="text-xl text-gray-300 group-hover:text-gray-900 transition-colors duration-300"
                aria-hidden="true"
              />
            </a>

            <a
              href="https://www.youtube.com/channel/UCp73vCN8JROvOh-DrCczCew"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-gray-700/50 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/25"
              aria-label="Visit Josh Lehman's YouTube channel"
            >
              <FaYoutubeSquare
                className="text-xl text-gray-300 group-hover:text-gray-900 transition-colors duration-300"
                aria-hidden="true"
              />
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-8"></div>

        {/* Additional footer info */}
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-2">
            Crafted with passion • Built with modern web technologies
          </p>
          <p className="text-xs text-gray-500">
            {new Date().getFullYear()} • All rights reserved
          </p>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;
