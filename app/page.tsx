"use client";

import Link from "next/link";
import { FaArrowCircleUp } from "react-icons/fa";
import "@/app/Home.css";
import ThreeScene from "./ui/ThreeScene";
import IntroWorkCard from "./ui/IntroWorkCard";

console.log("__________________**__________________");
console.log("_________________*  *_________________");
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
  const workCardData = [
    {
      id: "1",
      href: "/portfolio/resume-wrangler",
      cloudinaryPublicUrl:
        "v1713540526/PortfolioSite/Resume_Wrangler_Landing_Page_1_n2arsw.png",
      projectTitle: "Résumé Wrangler",
    },
    {
      id: "2",
      href: "/portfolio/ecommerce/cleaner-by-design",
      cloudinaryPublicUrl:
        "v1713542395/PortfolioSite/CleanerByDesign_Landing_Page_1_npsuin.png",
      projectTitle: "CLEANER BY DESIGN",
    },
    {
      id: "3",
      href: "/portfolio/ecommerce/beanbag-coffee-co",
      cloudinaryPublicUrl:
        "v1704379963/PortfolioSite/beanbag-coffee-2a_ocgeuz.png",
      projectTitle: "Beanbag Coffee Co.",
    },
    {
      id: "4",
      href: "/portfolio/el-in",
      cloudinaryPublicUrl:
        "v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_golden_lka0ur.png",
      projectTitle: "ELECTRONICS INVENTORY",
    },
    {
      id: "5",
      href: "/portfolio/outdoorsy",
      cloudinaryPublicUrl:
        "v1697384652/PortfolioSite/Itab_outdoorsy_desert_horizontal_p92vrs.png",
      projectTitle: "OUTDOORSY",
    },
    {
      id: "6",
      href: "/portfolio/pomodor",
      cloudinaryPublicUrl:
        "v1697384652/PortfolioSite/Iphone_leaves_shade_pomo_jhnhw6.png",
      projectTitle: "POMODOR TIMER",
    },
  ];

  return (
    <div>
      <ThreeScene />
      <section className="title-container px-2">
        <h1 className="text-based-title">
          CREATING <span className="title-accent">PRAGMATIC </span>&
          <span className="title-accent"> THOUGHTFUL</span> SOFTWARE
          <br />
          <span className="title-year"> -CIRCA 2021- </span>
        </h1>
      </section>
      <section className="showcased-work">
        <div className="max-w-screen-xl m-auto">
          <Link href={"/portfolio"}>
            <div className="spacer-small" />
            <div className="flex flex-row justify-between px-4 items-center h-full mt-1 mb-3">
              <div>
                <h2 className="showcased-h2">RECENT SHOWCASED WORK</h2>
              </div>
              <div className="text-right">
                <FaArrowCircleUp className="showcased-work-link" />
              </div>
            </div>
            <div className="showcase-border-top mb-10" />
          </Link>
          <div className="intro-grid">
            {workCardData.map((workCard) => (
              <IntroWorkCard key={workCard.id} workCard={workCard} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
