/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import useMousePosition from "../hooks/useMousePosition";
import clsx from "clsx";

type CursorContainerProps = {
  children: React.ReactNode;
};

export default function CursorContainer({ children }: CursorContainerProps) {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 40;

  return (
    <div className="main-container">
      <motion.div
        className={clsx("bg-yellow-700 opacity-75")}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,

          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      ></motion.div>
      {children}
    </div>
  );
}
