import React from "react";
import "@/app/ui/Portfolio.css";
import OutdoorsySection from "@/app/ui/OutdoorsySection";

export const metadata = {
  title: "Outdoorsy",
  description: "An modern outdoors enthusiast social platform.",
};

const PortfolioOutdoorsy = () => {
  return (
    <main className="main-container">
      <OutdoorsySection />
    </main>
  );
};

export default PortfolioOutdoorsy;
