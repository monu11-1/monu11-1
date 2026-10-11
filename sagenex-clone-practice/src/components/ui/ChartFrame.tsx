"use client";

import { useLayoutEffect, useRef, useState } from "react";

type ChartFrameProps = {
  className?: string;
  children: (size: { width: number; height: number }) => React.ReactNode;
};

/** Measures parent size so Recharts always gets non-zero width/height. */
export function ChartFrame({ className = "", children }: ChartFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 640, height: 288 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      setSize((prev) =>
        prev.width === width && prev.height === height
          ? prev
          : { width, height },
      );
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className={`w-full ${className}`}>
      {children(size)}
    </div>
  );
}
