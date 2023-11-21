"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import "./ResponsiveMenu.css";
import { useMenuClicked } from "@/context/menu-context";

const ResponsiveMenu = () => {
  const { menuClicked, toggleMenuClicked } = useMenuClicked();

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
        <Link onClick={() => toggleMenuClicked()} href="/">
          <h3 className="responsive-menu-header">Home</h3>
        </Link>
        <Link onClick={() => toggleMenuClicked()} href="/about">
          <h3 className="responsive-menu-header">About</h3>
        </Link>
        <Link onClick={() => toggleMenuClicked()} href="/portfolio">
          <h3 className="responsive-menu-header">Portfolio</h3>
        </Link>
        {/* <Link onClick={() => toggleMenuClicked()} to="/manifesto">
            <h3 className="responsive-menu-header">Mission</h3>
          </Link> */}
        <a
          rel="noreferrer"
          target="_blank"
          onClick={() => toggleMenuClicked()}
          href="https://drive.google.com/file/d/1zPQ_i4jfnUcPgrqQ_EfHCEHXGyEiQUFX/view?usp=sharing"
        >
          <h3 className="responsive-menu-header">Resume</h3>
        </a>
        {/* <Link onClick={() => toggleMenuClicked()} to="/services">
            <h3 className="responsive-menu-header">Services</h3>
          </Link> */}
        <Link onClick={() => toggleMenuClicked()} href="/contact">
          <h3 className="responsive-menu-header">Contact</h3>
        </Link>
      </div>
    </motion.section>
  );
};

export default ResponsiveMenu;
