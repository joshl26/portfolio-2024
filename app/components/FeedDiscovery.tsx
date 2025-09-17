// components/FeedDiscovery.js - Optional component to display feed links
import React from "react";

export default function FeedDiscovery() {
  return (
    <div className="flex items-center gap-4 justify-center mt-8 text-sm">
      <span className="text-gray-400">Subscribe to updates:</span>
      <div className="flex items-center gap-3">
        <a
          href="/blog/rss.xml"
          className="flex items-center gap-2 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors duration-200 font-medium"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Subscribe to RSS feed"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3.429 2.571c0-.952.806-1.714 1.714-1.714a1.71 1.71 0 011.714 1.714 1.71 1.71 0 01-1.714 1.714c-.952 0-1.714-.762-1.714-1.714zM3.429 7.429c0-.952.806-1.714 1.714-1.714 4.286 0 7.714 3.429 7.714 7.714 0 .952-.762 1.714-1.714 1.714-.952 0-1.714-.762-1.714-1.714 0-2.381-1.905-4.286-4.286-4.286-.952 0-1.714-.762-1.714-1.714zM3.429 12.286c0-.952.806-1.714 1.714-1.714 1.429 0 2.571 1.143 2.571 2.571 0 .952-.762 1.714-1.714 1.714-.952 0-1.714-.762-1.714-1.714z" />
          </svg>
          RSS
        </a>

        <a
          href="/blog/atom.xml"
          className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Subscribe to Atom feed"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
              clipRule="evenodd"
            />
          </svg>
          Atom
        </a>
      </div>
    </div>
  );
}
