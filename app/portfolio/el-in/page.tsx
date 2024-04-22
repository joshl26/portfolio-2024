import React from "react";
import "@/app/ui/Portfolio.css";
import ElectronicsInventorySection from "@/app/ui/ElectronicsInventorySection";

export const metadata = {
  title: "Electronics Inventory",
  description:
    "Resume Wrangler is an innovative and dynamic tool created to redefine the way job seekers prepare their application documents.",
};

const Page = () => {
  return (
    <main className="main-container">
      <ElectronicsInventorySection />
    </main>
  );
};

export default Page;
