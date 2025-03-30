"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";

interface LazyImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  threshold?: number;
  blurEffect?: boolean;
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className,
  threshold = 0.1,
  blurEffect = true,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Create IntersectionObserver to detect when image is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    // Get current ref value
    const currentElement = document.getElementById(
      `lazy-img-${alt?.replace(/\s+/g, "-")}`
    );
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [alt, threshold]);

  return (
    <div
      id={`lazy-img-${alt?.replace(/\s+/g, "-")}`}
      className={`relative overflow-hidden ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      {isVisible && (
        <div className="w-full h-full">
          <Image
            src={src}
            alt={alt || ""}
            width={typeof width === "number" ? width : 0}
            height={typeof height === "number" ? height : 0}
            onLoadingComplete={() => setIsLoaded(true)}
            className={className}
            placeholder={blurEffect ? "blur" : "empty"}
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIiAvPjwvc3ZnPg=="
            priority={true}
            {...props}
          />
        </div>
      )}
      {(!isVisible || !isLoaded) && blurEffect && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-md" />
      )}
    </div>
  );
}
