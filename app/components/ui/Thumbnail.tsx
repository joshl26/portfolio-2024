"use client";

import React, { useState } from "react";
import { CldImage } from "next-cloudinary";

type ThumbnailProps = {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
};

export default function Thumbnail({
  src,
  alt = "",
  width = 320,
  height = 180,
  className = "",
}: ThumbnailProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-md ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/30 animate-pulse">
          <div className="h-8 w-24 rounded-md bg-gray-700/60" />
        </div>
      )}

      <CldImage
        src={src}
        alt={alt}
        width={typeof width === "number" ? width : parseInt(String(width), 10)}
        height={
          typeof height === "number" ? height : parseInt(String(height), 10)
        }
        className={`object-cover w-full h-full transition-transform duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
