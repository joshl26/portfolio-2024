import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "gold" | "grey" | "outline";
  className?: string;
};

export default function Badge({
  children,
  variant = "gold",
  className = "",
}: BadgeProps) {
  const base =
    "inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold";
  const styles =
    variant === "gold"
      ? "bg-gold-600/10 text-gold-300 border border-gold-500/10"
      : variant === "outline"
      ? "bg-transparent text-gray-200 border border-gray-700/40"
      : "bg-gray-800/50 text-gray-200 border border-gray-700/40";

  return (
    <span className={`${base} ${styles} ${className}`.trim()}>{children}</span>
  );
}
