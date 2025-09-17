import React from "react";
import ResponsiveMenu from "./ResponsiveMenu";

const ResponsiveHeader: React.FC = () => {
  return (
    <header className="w-full h-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-row justify-between items-center">
        {/* Navigation Section */}
        <div className="flex-shrink-0">
          <div className="relative">
            <ResponsiveMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ResponsiveHeader;
