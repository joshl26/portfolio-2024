"use client";

import Link from "next/link";
import { FaArrowCircleUp } from "react-icons/fa";
import { CldImage } from "next-cloudinary";
import "@/app/Home.css";
import ThreeScene from "./ui/ThreeScene";

console.log("_________________*  *__________________");
console.log("________________*    *________________");
console.log("_______________*      *_______________");
console.log("______________*        *______________");
console.log("_____________*          *_____________");
console.log("____________*            *____________");
console.log("************              ************");
console.log("*             **    **               *");
console.log("__*           **    **             *__");
console.log("____*         **    **           *____");
console.log("______*                        *______");
console.log("________*                    *________");
console.log("________*                    *________");
console.log("______ *         *  *         *_______");
console.log("______*         *    *         *______");
console.log("_____*         *      *         *_____");
console.log("____*         *        *         *____");
console.log("____**********__________**********____");

console.log("Thanks for visiting my portfolio site!");
console.log(
  "You can find me on Linked: https://www.linkedin.com/in/joshrlehman/"
);
console.log("Or contact me by email here: joshlehman.dev@gmail.com");

export default function Home() {
  return (
    <div>
      <ThreeScene />
      <section className="title-container px-2">
        <h1 className="text-based-title">
          CREATING <span className="title-accent">PRAGMATIC </span>&
          <span className="title-accent"> THOUGHTFUL</span> SOFTWARE
          <br />
          <span className="title-year">-CIRCA 2021-</span>
        </h1>
      </section>
      <section className="showcased-work">
        <div className="max-w-screen-xl" style={{ margin: "auto" }}>
          <Link href={"/portfolio"}>
            <div className="spacer-small" />
            <div className="flex flex-row justify-between px-4 items-center h-full">
              <div>
                <h2 className="showcased-h2">SHOWCASED WORK</h2>
              </div>
              <div className="text-right">
                <FaArrowCircleUp className="showcased-work-link" />
              </div>
            </div>
            <div className="spacer-small" />
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
                <div className="flex flex-row justify-between">
                  <div className="flex-col">
                    <h3 className="showcased-h3">Beanbag Coffee Co.</h3>
                  </div>
                  <div className="flex-col w-auto">
                    <FaArrowCircleUp className="showcased-work-link" />
                  </div>
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
