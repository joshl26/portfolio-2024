"use client";

import React from "react";
import "@/app/ui/ResponsiveHeader.css";
import { useMenuClicked } from "@/context/menu-context";
import { CldImage } from "next-cloudinary";

const ResponsiveHeader = () => {
  const { menuClicked, toggleMenuClicked } = useMenuClicked();

  var hamburgerMenuStyle = menuClicked ? "is-active" : "";

  return (
    <header className="header-container">
      <div>
        <div className="grid-container">
          <div>
            <div className="header-hero-container">
              <a href="/">
                <CldImage
                  className="header-hero-image"
                  alt="header hero image"
                  width="600"
                  height="600"
                  preserveTransformations
                  src="https://res.cloudinary.com/dv6keahg3/image/upload/v1697384652/PortfolioSite/JL_Icon_Small_kzcjux.svg"
                />
              </a>
            </div>
          </div>
          <div></div>
          <div>
            <div className="hamburger-container">
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
      </div>
    </header>
  );
};

export default ResponsiveHeader;
