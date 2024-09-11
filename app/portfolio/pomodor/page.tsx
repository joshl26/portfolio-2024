import React from "react";
import "@/app/ui/Portfolio.css";
import PomodorSection from "@/app/ui/PomodorSection";

export const metadata = {
  title: "Pomodoro",
  description: "A pomodoro timer built with ReactJS.",
  alternates: {
    canonical: `/portfolio/pomodor`,
  },
};

const PortfolioPomodor = () => {
  return (
    <main className="max-w-screen-xl m-auto my-8">
      <PomodorSection />
    </main>
  );
};

export default PortfolioPomodor;
