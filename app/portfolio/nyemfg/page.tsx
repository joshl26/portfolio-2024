import React from "react";
import "@/app/ui/Portfolio.css";
import NyeMfgSection from "@/app/ui/NyeMfgSection";

export const metadata = {
  title: "Nye Manufacturing",
  description:
    "Nye Manufacturing Ltd. is a family owned metal fabricating business with a primary focus on custom attachments. Founded in 1952 by Jack Nye, our company offers expertise developed through more than 70 years of building, modifying and repairing heavy equipment of all types. Put our expertise to work for you.",
  alternates: {
    canonical: `/portfolio/nyemfg`,
  },
};

const Page = () => {
  return (
    <main className="max-w-screen-xl m-auto">
      <NyeMfgSection />
    </main>
  );
};

export default Page;
