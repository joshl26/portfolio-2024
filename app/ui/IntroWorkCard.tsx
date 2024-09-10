import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { TransitionLink } from "../utils/TransitionLink";

const IntroWorkCard = ({ workCard }: { workCard: any }) => {
  return (
    <div className="intro-container">
      <TransitionLink
        className="nav-link hover:scale-95 hover:text-gray-800 transition-transform text-gray-800 duration-300 cursor-pointer"
        href={workCard.href}
      >
        <CldImage
          className="showcase-card-container"
          alt="resume wrangler hero"
          width="1000"
          height="1000"
          sizes="100vw"
          src={workCard.cloudinaryPublicUrl}
          placeholder="blur"
          blurDataURL={workCard.cloudinaryPublicUrl}
        />
        <div className="flex flex-row justify-between items-center py-3">
          <div className="flex-col">
            <h3 className="showcased-h3">{workCard.projectTitle}</h3>
          </div>
          <div className="flex-col w-auto">
            <FaArrowCircleUp className="showcased-work-link" />
          </div>
        </div>
        <div className="showcase-border-top mb-10" />
      </TransitionLink>
    </div>
  );
};

export default IntroWorkCard;
