"use client";

import React, { useEffect } from "react";

const CalendlyEmbed = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded flex"
      data-url={url}
      style={{
        margin: "auto",
        height: "925px",
        width: "100%",
        overflow: "hidden",
      }}
    ></div>
  );
};

export default CalendlyEmbed;
