import { memo, useMemo } from "react";

interface ViewData {
  slug: string;
  count: number;
}

interface ViewCounterProps {
  slug: string;
  allViews: ViewData[];
  trackView?: boolean;
  showIcon?: boolean;
  className?: string;
}

// Memoized number formatter
const formatNumber = (num: number): string => {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toLocaleString();
};

// Create a Map for O(1) lookup performance
const createViewsMap = (views: ViewData[]): Map<string, number> => {
  return new Map(views.map((view) => [view.slug, view.count]));
};

const ViewCounter = memo(function ViewCounter({
  slug,
  allViews,
  trackView = false,
  showIcon = true,
  className = "text-gray-400 text-sm",
}: ViewCounterProps) {
  // Memoize the views map for better lookup performance
  const viewsMap = useMemo(() => {
    return allViews?.length ? createViewsMap(allViews) : new Map();
  }, [allViews]);

  // Get view count with O(1) lookup
  const viewCount = viewsMap.get(slug) || 0;

  // Memoize formatted count
  const formattedCount = useMemo(() => formatNumber(viewCount), [viewCount]);

  // Early return for zero views (optional)
  if (viewCount === 0 && !trackView) {
    return <span className={className}>No views yet</span>;
  }

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {showIcon && (
        <svg
          className="w-3.5 h-3.5 opacity-70"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fillRule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <span>
        {formattedCount} view{viewCount !== 1 ? "s" : ""}
      </span>
    </div>
  );
});

export default ViewCounter;
