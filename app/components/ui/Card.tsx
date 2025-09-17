import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export default function Card({
  children,
  className = "",
  as = "div",
}: CardProps) {
  const El = as as any;
  return (
    <El
      className={`rounded-2xl border border-gray-700/30 bg-gradient-to-br from-gray-900/60 to-gray-900/40 shadow-lg transition-transform duration-300 ${className}`}
    >
      {children}
    </El>
  );
}
