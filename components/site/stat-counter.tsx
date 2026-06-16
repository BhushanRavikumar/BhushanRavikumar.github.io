"use client";

import * as React from "react";

/**
 * Animated count-up that starts when the number scrolls into view,
 * mirroring the original `.stat-num` counter.
 */
export function StatCounter({ target }: { target: number }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(target * eased));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      animate();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span className="stat-num" ref={ref}>
      +{value}
    </span>
  );
}
