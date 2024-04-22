import React from "react";
import "@/app/ui/Portfolio.css";
import CleanerByDesignSection from "@/app/ui/CleanerByDesignSection";

export const metadata = {
  title: "CleanerByDesign",
  description:
    "CleanerByDesign is an e-commerce web application designed to provide a seamless online shopping experience.",
};

const Page = () => {
  return (
    <main className="max-w-screen-xl m-auto">
      <CleanerByDesignSection />
    </main>
  );
};

export default Page;
