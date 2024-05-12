import clsx from "clsx";
import React from "react";

const RoundButton = ({
  buttonText = "",
  href = "",
  buttonClass = "",
  target = "_blank",
  rel = "noreferrer",
}: {
  buttonText: string;
  href: string;
  buttonClass: string;
  target: string;
  rel: string;
}) => {
  return href !== "" ? (
    <a rel={rel} target={target} href={href}>
      <button
        className={clsx(buttonClass, "font-ayer tracking-wider text-[1.25rem]")}
      >
        {buttonText}
      </button>
    </a>
  ) : (
    <button
      className={clsx(buttonClass, "font-ayer tracking-wider text-[1.25rem]")}
    >
      {buttonText}
    </button>
  );
};

export default RoundButton;
