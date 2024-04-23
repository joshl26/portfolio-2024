import React from "react";
import "@/app/ui/Portfolio.css";
import ResumeWranglerSection from "@/app/ui/ResumeWranglerSection";

export const metadata = {
  title: "Resume Wrangler",
  description:
    "Resume Wrangler is an innovative and dynamic tool created to redefine the way job seekers prepare their application documents.",
};

const Page = () => {
  return (
    <main className="max-w-screen-xl m-auto">
      <ResumeWranglerSection />
    </main>
  );
};

export default Page;
