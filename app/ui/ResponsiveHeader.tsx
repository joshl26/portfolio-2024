import React from "react";
// import { div, Image, Row } from "react-bootstrap";
import "./ResponsiveHeader.css";
import JLIconSmall from "../data/images/JL_Icon_Small.png";

const ResponsiveHeader = ({
  menuClicked,
  hamburgerMenuClicked,
}: {
  menuClicked: any;
  hamburgerMenuClicked: any;
}) => {
  var hamburgerMenuStyle = menuClicked ? "is-active" : "";

  return (
    <header className="header-container">
      <div>
        <div>
          <div>
            <div className="header-hero-container">
              <a href="/">
                {/* <Image
                  className="header-hero-image"
                  alt="header hero image"
                  src={JLIconSmall}
                ></Image> */}
              </a>
            </div>
          </div>
          <div></div>
          <div>
            <div className="hamburger-container">
              <div
                onClick={hamburgerMenuClicked}
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
