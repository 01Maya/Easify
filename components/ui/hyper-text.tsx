"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HyperTextProps {
  as?: keyof JSX.IntrinsicElements;
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  animateOnHover?: boolean;
}

export function HyperText({
  as: Component = "span",
  children,
  className = "",
  duration = 800,
  delay = 0,
  animateOnHover = true,
}: HyperTextProps) {
  const [displayedText, setDisplayedText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const scramble = () => {
    setIsAnimating(true);
    const chars = children.split("");
    let frame = 0;
    const totalFrames = Math.floor(duration / 40);

    const interval = setInterval(() => {
      setDisplayedText(() =>
        chars
          .map((char, i) => {
            if (frame < totalFrames - i * 2) {
              return characters[Math.floor(Math.random() * characters.length)];
            }
            return char;
          })
          .join("")
      );

      frame++;
      if (frame > totalFrames) {
        clearInterval(interval);
        setDisplayedText(children);
        setIsAnimating(false);
      }
    }, 40);
  };

  useEffect(() => {
    const timeout = setTimeout(() => scramble(), delay);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  // ✅ Framer Motion dynamic element fix:
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      className={className}
      onMouseEnter={() => animateOnHover && !isAnimating && scramble()}
    >
      {displayedText}
    </MotionComponent>
  );
}
