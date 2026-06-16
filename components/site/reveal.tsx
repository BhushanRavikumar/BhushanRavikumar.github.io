"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type RevealProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Fades + slides its content in once it scrolls into view, mirroring the
 * original IntersectionObserver `.reveal` behavior.
 */
export function Reveal<T extends React.ElementType = "div">({
  as,
  children,
  className,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as React.ElementType;
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={cn("reveal", className)} {...rest}>
      {children}
    </Tag>
  );
}
