"use client";

import { useState } from "react";
import ResponsiveFooter from "./ui/ResponsiveFooter";
import ResponsiveHeader from "./ui/ResponsiveHeader";
import ResponsiveMenu from "./ui/ResponsiveMenu";

export default function Home() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  // const [menuClicked, setMenuClicked] = useState(false);
  // const hamburgerMenuClicked = () => {
  //   setMenuClicked(!menuClicked);
  // };

  return (
    <main>
      <ResponsiveHeader />
      <ResponsiveMenu />
      <ResponsiveFooter />
    </main>
  );
}
