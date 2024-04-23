import React from "react";
import "@/app/ui/Portfolio.css";
import OutdoorsySection from "@/app/ui/OutdoorsySection";

export const metadata = {
  title: "Outdoorsy",
  description: "An modern outdoors enthusiast social platform.",
};

const PortfolioOutdoorsy = () => {
  return (
    <main className="max-w-screen-xl m-auto my-8">
      <OutdoorsySection />
    </main>
  );
};

export default PortfolioOutdoorsy;
