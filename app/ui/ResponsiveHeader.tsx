"use client";

import React from "react";
import "@/app/ui/ResponsiveHeader.css";
import { useMenuClicked } from "@/context/menu-context";
import { CldImage } from "next-cloudinary";

const ResponsiveHeader = () => {
  const { menuClicked, toggleMenuClicked } = useMenuClicked();

  var hamburgerMenuStyle = menuClicked ? "is-active" : "";

  return (
    <header className="max-w-screen-xl m-auto h-auto px-1">
      <div className="flex flex-row justify-between align-middle items-center">
        <div className="flex flex-col">
          <div className="header-hero-container">
            <a href="/">
              <CldImage
                className="header-hero-image"
                alt="header hero image"
                width="600"
                height="600"
                priority={true}
                preserveTransformations
                src="https://res.cloudinary.com/dv6keahg3/image/upload/q_auto/f_auto/v1697384652/PortfolioSite/JL_Icon_Small_kzcjux.svg"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="hamburger-container pt-2">
            <div
              onClick={toggleMenuClicked}
              className={`hamburger hamburger--spring + ${hamburgerMenuStyle}`}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ResponsiveHeader;
