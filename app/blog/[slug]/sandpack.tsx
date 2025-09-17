"use client";

import { getSandpackCssText } from "@codesandbox/sandpack-react";
import { useServerInsertedHTML } from "next/navigation";
import { useRef, useEffect, useCallback } from "react";

// Enhanced cache interface for better type safety
interface SandpackCssCache {
  get(): string;
  clear(): void;
  isLoaded(): boolean;
  getLoadTime(): number | null;
  getError(): Error | null;
}

// Enhanced global cache with better error handling and metrics
const sandpackCssCache = (() => {
  let cssText: string | null = null;
  let isLoaded = false;
  let loadTime: number | null = null;
  let lastError: Error | null = null;
  let retryCount = 0;
  const MAX_RETRIES = 3;

  const cache: SandpackCssCache = {
    get: (): string => {
      if (!isLoaded) {
        const startTime = performance.now();

        try {
          cssText = getSandpackCssText();
          isLoaded = true;
          loadTime = performance.now() - startTime;
          lastError = null;
          retryCount = 0;

          // Log success in development
          if (process.env.NODE_ENV === "development") {
            console.log(
              `✅ Sandpack CSS loaded successfully in ${loadTime.toFixed(2)}ms`
            );
          }
        } catch (error) {
          const errorObj =
            error instanceof Error ? error : new Error(String(error));
          lastError = errorObj;
          retryCount++;

          // Retry logic for transient failures
          if (retryCount <= MAX_RETRIES) {
            console.warn(
              `⚠️ Sandpack CSS generation failed (attempt ${retryCount}/${MAX_RETRIES}):`,
              errorObj.message
            );

            // Exponential backoff retry
            setTimeout(() => {
              isLoaded = false;
              cache.get();
            }, Math.pow(2, retryCount) * 100);
          } else {
            console.error(
              `❌ Sandpack CSS generation failed permanently after ${MAX_RETRIES} attempts:`,
              errorObj
            );
            cssText = "";
            isLoaded = true;
          }
        }
      }
      return cssText || "";
    },

    clear: (): void => {
      cssText = null;
      isLoaded = false;
      loadTime = null;
      lastError = null;
      retryCount = 0;

      if (process.env.NODE_ENV === "development") {
        console.log("🧹 Sandpack CSS cache cleared");
      }
    },

    isLoaded: (): boolean => isLoaded,

    getLoadTime: (): number | null => loadTime,

    getError: (): Error | null => lastError,
  };

  return cache;
})();

// Props interface for better type safety
interface SandpackCSSProps {
  /** Unique identifier for the style tag */
  id?: string;
  /** Whether to enable development mode logging */
  enableDevLogs?: boolean;
  /** Custom error handler */
  onError?: (error: Error) => void;
  /** Custom success handler */
  onSuccess?: (loadTime: number) => void;
}

/**
 * Enhanced SandpackCSS component with improved error handling and performance monitoring
 */
export function SandpackCSS({
  id = "sandpack-css",
  enableDevLogs = process.env.NODE_ENV === "development",
  onError,
  onSuccess,
}: SandpackCSSProps = {}) {
  const hasInserted = useRef(false);
  const insertionTime = useRef<number | null>(null);

  // Memoized CSS retrieval
  const getCssText = useCallback(() => {
    const startTime = performance.now();
    const cssText = sandpackCssCache.get();
    const endTime = performance.now();

    const error = sandpackCssCache.getError();
    const loadTime = sandpackCssCache.getLoadTime();

    // Handle success callback
    if (cssText && loadTime && onSuccess) {
      onSuccess(loadTime);
    }

    // Handle error callback
    if (error && onError) {
      onError(error);
    }

    // Development logging
    if (enableDevLogs && cssText) {
      console.log(
        `📊 Sandpack CSS retrieved in ${(endTime - startTime).toFixed(2)}ms`
      );
    }

    return cssText;
  }, [enableDevLogs, onError, onSuccess]);

  // Effect for monitoring and cleanup
  useEffect(() => {
    // Log cache status in development
    if (enableDevLogs) {
      const isLoaded = sandpackCssCache.isLoaded();
      const error = sandpackCssCache.getError();
      const loadTime = sandpackCssCache.getLoadTime();

      console.log("📋 Sandpack CSS Cache Status:", {
        isLoaded,
        hasError: !!error,
        loadTime: loadTime ? `${loadTime.toFixed(2)}ms` : "N/A",
        errorMessage: error?.message || "None",
      });
    }

    // Cleanup function
    return () => {
      if (enableDevLogs) {
        console.log("🧹 SandpackCSS component unmounting");
      }
    };
  }, [enableDevLogs]);

  useServerInsertedHTML(() => {
    // Prevent duplicate insertions
    if (hasInserted.current) {
      if (enableDevLogs) {
        console.log("⏭️ Sandpack CSS already inserted, skipping");
      }
      return null;
    }

    const startTime = performance.now();
    const cssText = getCssText();
    const endTime = performance.now();

    // Skip if no CSS content
    if (!cssText) {
      if (enableDevLogs) {
        console.log("⚠️ No Sandpack CSS content to insert");
      }
      return null;
    }

    hasInserted.current = true;
    insertionTime.current = endTime - startTime;

    if (enableDevLogs) {
      console.log(
        `✅ Sandpack CSS inserted in ${insertionTime.current.toFixed(2)}ms`
      );
    }

    return (
      <style
        dangerouslySetInnerHTML={{ __html: cssText }}
        id={id}
        suppressHydrationWarning
        data-sandpack-css="true"
        data-insertion-time={insertionTime.current}
      />
    );
  });

  return null;
}

/**
 * Enhanced cache management utilities
 */
export const sandpackCacheUtils = {
  /**
   * Clear the Sandpack CSS cache
   */
  clear: (): void => {
    sandpackCssCache.clear();
  },

  /**
   * Get cache status information
   */
  getStatus: () => ({
    isLoaded: sandpackCssCache.isLoaded(),
    loadTime: sandpackCssCache.getLoadTime(),
    error: sandpackCssCache.getError(),
    hasError: !!sandpackCssCache.getError(),
  }),

  /**
   * Preload Sandpack CSS (useful for optimization)
   */
  preload: (): Promise<string> => {
    return new Promise((resolve, reject) => {
      try {
        const cssText = sandpackCssCache.get();
        const error = sandpackCssCache.getError();

        if (error) {
          reject(error);
        } else {
          resolve(cssText);
        }
      } catch (error) {
        reject(error instanceof Error ? error : new Error(String(error)));
      }
    });
  },

  /**
   * Force refresh the cache
   */
  refresh: (): string => {
    sandpackCssCache.clear();
    return sandpackCssCache.get();
  },
};

/**
 * Hook for accessing Sandpack CSS cache status
 */
export function useSandpackCssStatus() {
  return {
    ...sandpackCacheUtils.getStatus(),
    preload: sandpackCacheUtils.preload,
    refresh: sandpackCacheUtils.refresh,
    clear: sandpackCacheUtils.clear,
  };
}

/**
 * Higher-order component for Sandpack CSS management
 */
export function withSandpackCSS<P extends object>(
  Component: React.ComponentType<P>,
  options: SandpackCSSProps = {}
) {
  const WrappedComponent = (props: P) => (
    <>
      <SandpackCSS {...options} />
      <Component {...props} />
    </>
  );

  WrappedComponent.displayName = `withSandpackCSS(${
    Component.displayName || Component.name
  })`;

  return WrappedComponent;
}

// Legacy export for backward compatibility
/** @deprecated Use sandpackCacheUtils.clear instead */
export const clearSandpackCssCache = sandpackCacheUtils.clear;

// Type exports for better TypeScript support
export type { SandpackCSSProps, SandpackCssCache };
