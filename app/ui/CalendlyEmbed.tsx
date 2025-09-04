"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface CalendlyEmbedProps {
  url: string;
}

// Extend Window interface for Calendly
declare global {
  interface Window {
    Calendly?: {
      closePopupWidget: () => void;
      destroyBadgeWidget?: () => void;
    };
  }
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url }) => {
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cleanup function when component unmounts
    return () => {
      if (typeof window !== "undefined" && window.Calendly) {
        try {
          // Clean up any active Calendly widgets/popups
          window.Calendly.closePopupWidget();
        } catch (error) {
          // Calendly cleanup methods might not exist, that's ok
        }
      }
    };
  }, []);

  const handleScriptLoad = () => {
    setScriptLoaded(true);
    console.log("Calendly script loaded successfully");
  };

  const handleScriptError = () => {
    console.error("Failed to load Calendly script");
  };

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        onLoad={handleScriptLoad}
        onError={handleScriptError}
        strategy="lazyOnload"
      />

      <div
        ref={widgetRef}
        className="calendly-inline-widget rounded flex"
        data-url={url}
        style={{
          margin: "auto",
          height: "925px",
          width: "100%",
          overflow: "hidden",
        }}
      />

      {!scriptLoaded && (
        <div
          style={{
            height: "925px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f5f5f5",
            borderRadius: "8px",
          }}
        >
          <p>Loading calendar...</p>
        </div>
      )}
    </>
  );
};

export default CalendlyEmbed;
