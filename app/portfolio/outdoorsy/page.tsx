import React from "react";
import OutdoorsySection from "@/app/ui/OutdoorsySection";

export const metadata = {
  title: "Outdoorsy",
  description: "An modern outdoors enthusiast social platform.",
  alternates: {
    canonical: "/portfolio/outdoorsy/",
  },
};

const PortfolioOutdoorsy = () => {
  return (
    <main className="max-w-screen-xl m-auto my-8">
      <OutdoorsySection />
    </main>
  );
};

export default PortfolioOutdoorsy;
