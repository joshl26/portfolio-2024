"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import "./ResponsiveMenu.css";

const ResponsiveMenu = ({
  menuClicked,
  hamburgerMenuClicked,
}: {
  menuClicked: any;
  hamburgerMenuClicked: any;
}) => {
  const variants: any = {
    open: { position: "absolute", zIndex: 10, opacity: 1, width: "100vw" },
    closed: {
      position: "absolute",
      zIndex: -10,
      opacity: 0,
      width: "100vw",
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={menuClicked ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0, x: "-25%" }}
      className="responsive-menu-section"
    >
      <div className="responsive-menu-container">
        <div className="menu-spacer"></div>
        <Link onClick={() => hamburgerMenuClicked()} href="/">
          <h3 className="responsive-menu-header">Home</h3>
        </Link>
        <Link onClick={() => hamburgerMenuClicked()} href="/about">
          <h3 className="responsive-menu-header">About</h3>
        </Link>
        <Link onClick={() => hamburgerMenuClicked()} href="/portfolio">
          <h3 className="responsive-menu-header">Portfolio</h3>
        </Link>
        {/* <Link onClick={() => hamburgerMenuClicked()} to="/manifesto">
            <h3 className="responsive-menu-header">Mission</h3>
          </Link> */}
        <a
          rel="noreferrer"
          target="_blank"
          onClick={() => hamburgerMenuClicked()}
          href="https://drive.google.com/file/d/1zPQ_i4jfnUcPgrqQ_EfHCEHXGyEiQUFX/view?usp=sharing"
        >
          <h3 className="responsive-menu-header">Resume</h3>
        </a>
        {/* <Link onClick={() => hamburgerMenuClicked()} to="/services">
            <h3 className="responsive-menu-header">Services</h3>
          </Link> */}
        <Link onClick={() => hamburgerMenuClicked()} href="/contact">
          <h3 className="responsive-menu-header">Contact</h3>
        </Link>
      </div>
    </motion.section>
  );
};

export default ResponsiveMenu;
