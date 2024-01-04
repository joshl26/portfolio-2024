"use client";

import Link from "next/link";
import { FaArrowCircleUp } from "react-icons/fa";
import { CldImage } from "next-cloudinary";
import "@/app/Home.css";
import ThreeScene from "./ui/ThreeScene";

export default function Home() {
  return (
    <div>
      <ThreeScene />
      <section className="title-container">
        <h1 className="text-based-title">
          CREATING <span className="title-accent">PRAGMATIC </span>&
          <span className="title-accent"> THOUGHTFUL</span> SOFTWARE
          <br />
          <span className="title-year">-SINCE 2021-</span>
        </h1>
      </section>
      <section className="showcased-work">
        <div style={{ maxWidth: "1600px", margin: "auto" }}>
          <Link href={"/portfolio"}>
            <div className="intro-row">
              <div>
                <h2 className="showcased-h2">SHOWCASED WORK</h2>
              </div>
              <div className="text-right">
                <div className="spacer-xsmall"></div>
                <FaArrowCircleUp className="showcased-work-link" />
              </div>
            </div>
          </Link>
          <div className="intro-grid">
            <div className="intro-container">
              <Link href={"/portfolio/ecommerce/beanbag-coffee-co"}>
                <CldImage
                  className="showcase-card-container"
                  alt="beanbag coffee co. hero"
                  width="1000"
                  height="1000"
                  sizes="100vw"
                  src="v1704379963/PortfolioSite/beanbag-coffee-2a_ocgeuz.png"
                  placeholder="blur"
                  blurDataURL="v1704379963/PortfolioSite/beanbag-coffee-2a_ocgeuz.png"
                />

                <div className="spacer-small"></div>
                <div className="showcase-border-top" />
                <div className="spacer-small"></div>
                <div className="intro-row">
                  <div className="intro-col">
                    <h3 className="showcased-h3">Beanbag Coffee Co.</h3>
                  </div>
                  <div className="text-right intro-col">
                    <FaArrowCircleUp className="showcased-work-link" />
                  </div>
                  <div className="spacer-small"></div>
                </div>
              </Link>
            </div>

            <div className="intro-container">
              <Link href={"/portfolio/el-in"}>
                <CldImage
                  className="showcase-card-container"
                  alt="electronics inventory hero image"
                  width="1000"
                  height="1000"
                  sizes="100vw"
                  src="v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_golden_lka0ur.png"
                  placeholder="blur"
                  blurDataURL="v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_golden_lka0ur.png"
                />
                <div className="spacer-small"></div>
                <div className="showcase-border-top" />
                <div className="spacer-small"></div>
                <div className="intro-row">
                  <div className="intro-col">
                    <h3 className="showcased-h3">ELECTRONICS INVENTORY</h3>
                  </div>
                  <div className="text-right intro-col">
                    <FaArrowCircleUp className="showcased-work-link" />
                  </div>
                  <div className="spacer-small"></div>
                </div>
              </Link>
            </div>
          </div>
          <div className="spacer-small"></div>
          <div className="intro-grid">
            <div className="intro-container">
              <Link href={"/portfolio/outdoorsy"}>
                <CldImage
                  className="showcase-card-container"
                  alt="outdoorsy app hero"
                  width="1000"
                  height="1000"
                  sizes="100vw"
                  src="v1697384652/PortfolioSite/Itab_outdoorsy_desert_horizontal_p92vrs.png"
                  placeholder="blur"
                  blurDataURL="v1697384652/PortfolioSite/Itab_outdoorsy_desert_horizontal_p92vrs.png"
                />
                <div className="spacer-small"></div>
                <div className="showcase-border-top" />
                <div className="spacer-small"></div>
                <div className="intro-row">
                  <div className="intro-col">
                    <h3 className="showcased-h3">OUTDOORSY</h3>
                  </div>
                  <div className="text-right row-col">
                    <FaArrowCircleUp className="showcased-work-link" />
                  </div>
                  <div className="spacer-small"></div>
                </div>
              </Link>
            </div>
            <div className="intro-container">
              <Link href={"/portfolio/pomodor"}>
                <CldImage
                  className="showcase-card-container"
                  alt="pomodoro timer hero"
                  width="1000"
                  height="1000"
                  sizes="100vw"
                  src="v1697384652/PortfolioSite/Iphone_leaves_shade_pomo_jhnhw6.png"
                  placeholder="blur"
                  blurDataURL="v1697384652/PortfolioSite/Iphone_leaves_shade_pomo_jhnhw6.png"
                />
                <div className="spacer-small"></div>
                <div className="showcase-border-top" />
                <div className="spacer-small"></div>
                <div className="intro-row">
                  <div className="intro-col">
                    <h3 className="showcased-h3">POMODOR TIMER</h3>
                  </div>
                  <div className="text-right intro-col">
                    <FaArrowCircleUp className="showcased-work-link" />
                  </div>
                  <div className="spacer-small"></div>
                </div>
              </Link>
            </div>
          </div>
          <div className="spacer"></div>
        </div>
      </section>
    </div>
  );
}
