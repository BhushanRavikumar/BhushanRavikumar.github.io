"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type MotionTagName =
  | "div"
  | "section"
  | "header"
  | "ul"
  | "li"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "button"
  | "form"
  | "a"
  | "span";

type RevealProps = {
  as?: MotionTagName;
  children: React.ReactNode;
  className?: string;
  /** Stagger offset in seconds. */
  delay?: number;
} & Record<string, unknown>;

/**
 * Scroll-triggered entrance (Framer Motion). Fades + lifts content into view
 * once, with an ease-out curve. Honors `prefers-reduced-motion` by rendering
 * the element statically with no animation.
 */
export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  ...rest
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Tag = as as React.ElementType;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const MotionTag = (motion as unknown as Record<string, React.ElementType>)[
    as
  ];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
