"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMenuClicked } from "@/context/menu-context";
import "@/app/ui/ResponsiveMenu.css";

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
      <div className="responsive-menu-container max-w-screen-xl m-auto pt-20 px-10 md:py-32">
        <div className="flex flex-col lg:flex-row flex-wrap gap-x-12 justify-around align-middle">
          <Link onClick={() => toggleMenuClicked()} href="/">
            <h3 className="responsive-menu-header text-center">Home</h3>
          </Link>
          <Link onClick={() => toggleMenuClicked()} href="/about">
            <h3 className="responsive-menu-header">About</h3>
          </Link>
          <Link onClick={() => toggleMenuClicked()} href="/blog">
            <h3 className="responsive-menu-header">Blog</h3>
          </Link>
          <Link onClick={() => toggleMenuClicked()} href="/contact">
            <h3 className="responsive-menu-header">Contact</h3>
          </Link>
          <Link onClick={() => toggleMenuClicked()} href="/guestbook">
            <h3 className="responsive-menu-header">Guestbook</h3>
          </Link>
          <Link onClick={() => toggleMenuClicked()} href="/portfolio">
            <h3 className="responsive-menu-header">Portfolio</h3>
          </Link>
        </div>

        {/* <a
          rel="noreferrer"
          target="_blank"
          onClick={() => toggleMenuClicked()}
          href="https://drive.google.com/file/d/1HHADY94BHA4waDwAbuJj_T8yuvSHCu1r/view?usp=sharing"
        >
          <h3 className="responsive-menu-header">Resume</h3>
        </a> */}
      </div>
    </motion.section>
  );
};

export default ResponsiveMenu;
