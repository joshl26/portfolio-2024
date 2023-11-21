"use client";

import React from "react";
// import { div, Image, Row } from "react-bootstrap";
import "./ResponsiveHeader.css";
import Image from "next/image";
import JLIconSmall from "../../public/JL_Icon_Small.png";
import { useMenuClicked } from "@/context/menu-context";

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
                <Image
                  className="header-hero-image"
                  alt="header hero image"
                  src={JLIconSmall}
                ></Image>
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
