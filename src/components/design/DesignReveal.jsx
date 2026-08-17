"use client";

import { useEffect, useRef } from "react";

export default function DesignReveal({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reveal = () => node.classList.add("in");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(node);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );

    observer.observe(node);

    requestAnimationFrame(() => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < viewportHeight * 0.9 && rect.bottom > 0) {
        reveal();
        observer.unobserve(node);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  );
}
