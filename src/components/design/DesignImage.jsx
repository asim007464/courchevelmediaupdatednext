"use client";

import { designImage } from "@/lib/designImages";

export default function DesignImage({
  slot,
  alt = "",
  className = "design-img",
  fallbackIndex = 0,
}) {
  return (
    <img
      src={designImage(slot, fallbackIndex)}
      alt={alt}
      className={className}
      loading="lazy"
      draggable="false"
    />
  );
}
