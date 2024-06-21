import React from "react";
import "@/app/ui/Portfolio.css";
import LuchaTacosSection from "@/app/ui/LuchaTacosSection";

export const metadata = {
  title: "Resume Wrangler",
  description:
    "Resume Wrangler is an innovative and dynamic tool created to redefine the way job seekers prepare their application documents.",
};

const Page = () => {
  return (
    <main className="max-w-screen-xl m-auto">
      <LuchaTacosSection />
    </main>
  );
};

export default Page;
