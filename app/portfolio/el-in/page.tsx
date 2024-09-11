import React from "react";
import "@/app/ui/Portfolio.css";
import ElectronicsInventorySection from "@/app/ui/ElectronicsInventorySection";

export const metadata = {
  title: "Electronics Inventory",
  description:
    "Resume Wrangler is an innovative and dynamic tool created to redefine the way job seekers prepare their application documents.",
  alternates: {
    canonical: `/portfolio/el-in`,
  },
};

const Page = () => {
  return (
    <main className="max-w-screen-xl m-auto my-8">
      <ElectronicsInventorySection />
    </main>
  );
};

export default Page;
