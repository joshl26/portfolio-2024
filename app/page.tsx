"use client";

import Link from "next/link";
import { FaArrowCircleUp } from "react-icons/fa";
import "@/app/Home.css";
import ThreeScene from "./ui/ThreeScene";
import IntroWorkCard from "./ui/IntroWorkCard";
import TestScene from "./ui/TestScene";
import { Canvas, extend } from "@react-three/fiber";
import { TransitionLink } from "./utils/TransitionLink";

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
      href: "/portfolio/lucha-tacos",
      cloudinaryPublicUrl:
        "v1718930369/PortfolioSite/lucha-tacos-screen_1_o70hjo.png",
      projectTitle: "Lucha Tacos",
    },
    {
      id: "2",
      href: "/portfolio/resume-wrangler",
      cloudinaryPublicUrl:
        "v1713540526/PortfolioSite/Resume_Wrangler_Landing_Page_1_n2arsw.png",
      projectTitle: "Résumé Wrangler",
    },
    {
      id: "3",
      href: "/portfolio/ecommerce/cleaner-by-design",
      cloudinaryPublicUrl:
        "v1713542395/PortfolioSite/CleanerByDesign_Landing_Page_1_npsuin.png",
      projectTitle: "CLEANER BY DESIGN",
    },
    {
      id: "4",
      href: "/portfolio/ecommerce/beanbag-coffee-co",
      cloudinaryPublicUrl:
        "v1704379963/PortfolioSite/beanbag-coffee-2a_ocgeuz.png",
      projectTitle: "Beanbag Coffee Co.",
    },
    {
      id: "5",
      href: "/portfolio/el-in",
      cloudinaryPublicUrl:
        "v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_golden_lka0ur.png",
      projectTitle: "ELECTRONICS INVENTORY",
    },
    {
      id: "6",
      href: "/portfolio/outdoorsy",
      cloudinaryPublicUrl:
        "v1697384652/PortfolioSite/Itab_outdoorsy_desert_horizontal_p92vrs.png",
      projectTitle: "OUTDOORSY",
    },
    {
      id: "7",
      href: "/portfolio/pomodor",
      cloudinaryPublicUrl:
        "v1697384652/PortfolioSite/Iphone_leaves_shade_pomo_jhnhw6.png",
      projectTitle: "POMODOR TIMER",
    },
    {
      id: "8",
      href: "/portfolio/blackrock-3d",
      cloudinaryPublicUrl: "v1688839247/PortfolioSite/blackrock_zgussj.png",
      projectTitle: "Blackrock 3D Wordpress",
    },
    {
      id: "9",
      href: "/portfolio/nyemfg",
      cloudinaryPublicUrl: "v1716856540/PortfolioSite/Untitled_ixlgk5.png",
      projectTitle: "Nye Manufacturing",
    },
  ];

  return (
    <main>
      <ThreeScene />
      <section className="title-container">
        <div className="flex flex-col max-w-screen-xl m-auto">
          <div className="flex flex-row flex-wrap ">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row md:justify-around flex-wrap m-auto">
                <div className="flex flex-col pt-1">
                  <h2 className="title-accent m-auto">CREATING</h2>
                </div>
                <div className="flex md:flex-row md:justify-around flex-wrap">
                  <h3 className="title-main px-6 m-auto">PRAGMATIC</h3>
                </div>
                <div className="flex flex-col pt-1">
                  <h3 className="title-accent m-auto">&</h3>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:justify-around flex-wrap">
                <div className="flex flex-col">
                  <h2 className="title-main px-6">THOUGHTFUL</h2>
                </div>
                <div className="flex flex-col pt-1">
                  <h2 className="title-accent m-auto">SOFTWARE</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row ">
            <h2 className="title-year m-auto"> - CIRCA 2018 - </h2>
          </div>
        </div>
      </section>
      <section className="showcased-work">
        <div className="max-w-screen-xl m-auto">
          <TransitionLink
            className="nav-link hover:scale-95 hover:text-gray-800 transition-transform text-gray-800 duration-300 cursor-pointer"
            href={"/portfolio"}
          >
            <div className="spacer-small" />
            <div className="flex flex-row justify-between px-4 items-center h-full mt-1 mb-3">
              <div>
                <h2 className="showcased-h2">RECENT SHOWCASED WORK</h2>
              </div>
              <div className="text-right">
                <FaArrowCircleUp className="showcased-work-link" />
              </div>
            </div>
          </TransitionLink>
          <div className="intro-grid">
            {workCardData.map((workCard) => (
              <IntroWorkCard key={workCard.id} workCard={workCard} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
