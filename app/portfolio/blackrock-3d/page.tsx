import React from "react";
import BlackRock3DSection from "@/app/ui/BlackRock3DSection";

export const metadata = {
  title: "BlackRock 3D",
  description:
    "BlackRock3D is a wordpress site that was designed by Joshua Lehman in 2018 to showcase his skills in Engineering. This turned out to be the final catalyst in making me want to switch careers into software engineering.",
  alternates: {
    canonical: "/portfolio/blackrock-3d/",
  },
};

const Page = () => {
  return (
    <main className="max-w-screen-xl m-auto">
      <BlackRock3DSection />
    </main>
  );
};

export default Page;
