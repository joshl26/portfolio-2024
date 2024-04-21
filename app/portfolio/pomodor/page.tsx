import React from "react";
import "@/app/ui/Portfolio.css";
import PomodorSection from "@/app/ui/PomodorSection";

export const metadata = {
  title: "Pomodoro",
  description: "A pomodoro timer built with ReactJS.",
};

const PortfolioPomodor = () => {
  return (
    <main className="main-container">
      <PomodorSection />
    </main>
  );
};

export default PortfolioPomodor;
