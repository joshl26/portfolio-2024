"use client";

import React, { createContext, useContext, useState } from "react";

type MenuClicked = true | false;

type MenuContextType = {
  menuClicked: MenuClicked;
  toggleMenuClicked: () => void;
};

type MenuContextProviderProps = {
  children: React.ReactNode;
};

const MenuContext = createContext<MenuContextType | null>(null);

export default function MenuContextProvider({
  children,
}: MenuContextProviderProps) {
  const [menuClicked, setMenuClicked] = useState<MenuClicked>(false);

  const toggleMenuClicked = () => {
    if (menuClicked === true) {
      setMenuClicked(false);
    } else {
      setMenuClicked(true);
    }
  };

  return (
    <MenuContext.Provider value={{ menuClicked, toggleMenuClicked }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuClicked() {
  const context = useContext(MenuContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
