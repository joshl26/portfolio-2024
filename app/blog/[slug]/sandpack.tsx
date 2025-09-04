"use client";

import { getSandpackCssText } from "@codesandbox/sandpack-react";
import { useServerInsertedHTML } from "next/navigation";
import { useRef } from "react";

// Global cache to prevent multiple CSS generations
const sandpackCssCache = (() => {
  let cssText: string | null = null;
  let isLoaded = false;

  return {
    get: (): string => {
      if (!isLoaded) {
        try {
          cssText = getSandpackCssText();
          isLoaded = true;
        } catch (error) {
          console.warn("Sandpack CSS generation failed:", error);
          cssText = "";
          isLoaded = true;
        }
      }
      return cssText || "";
    },
    clear: () => {
      cssText = null;
      isLoaded = false;
    },
  };
})();

export function SandpackCSS() {
  const hasInserted = useRef(false);

  useServerInsertedHTML(() => {
    // Prevent duplicate insertions
    if (hasInserted.current) return null;

    const cssText = sandpackCssCache.get();

    // Skip if no CSS content
    if (!cssText) return null;

    hasInserted.current = true;

    return (
      <style
        dangerouslySetInnerHTML={{ __html: cssText }}
        id="sandpack"
        suppressHydrationWarning
      />
    );
  });

  return null;
}

// Utility for cache management (useful for testing)
export const clearSandpackCssCache = () => sandpackCssCache.clear();
