import React from "react";
import "@/app/ui/Portfolio.css";
import BeanbagCoffeeSection from "@/app/ui/BeanbagCoffeeSection";

export const metadata = {
  title: "Beanbag Coffee Co.",
  description:
    "The Beanbag Coffee Co. e-commerce project is a fully functional online store.",
};

const Page = () => {
  return (
    <main className="max-w-screen-xl m-auto ">
      <BeanbagCoffeeSection />
    </main>
  );
};

export default Page;
