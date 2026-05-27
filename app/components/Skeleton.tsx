"use client";

import React from "react";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "rectangular" | "circular" | "card" | "list-item";
  height?: string | number;
  width?: string | number;
}

export default function Skeleton({
  className = "",
  variant = "rectangular",
  height,
  width,
}: SkeletonProps) {
  // Styles tailored to the warm wood/leather/gold palette
  const baseClass = "relative overflow-hidden bg-[#2d1908] rounded-lg animate-pulse before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-[#42270f]/30 before:to-transparent";

  const variantClasses = {
    text: "h-4 w-3/4 rounded-md my-2",
    rectangular: "w-full rounded-lg",
    circular: "rounded-full aspect-square",
    card: "w-full h-48 rounded-2xl p-6 flex flex-col justify-between",
    "list-item": "w-full h-16 rounded-xl flex items-center px-4 gap-4",
  };

  const style: React.CSSProperties = {
    height: height !== undefined ? height : undefined,
    width: width !== undefined ? width : undefined,
  };

  return (
    <div
      className={`${baseClass} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
}
