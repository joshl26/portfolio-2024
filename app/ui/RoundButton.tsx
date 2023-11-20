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
      <button className={buttonClass}>{buttonText}</button>
    </a>
  ) : (
    <button className={buttonClass}>{buttonText}</button>
  );
};

export default RoundButton;
