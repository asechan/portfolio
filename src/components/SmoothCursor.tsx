"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function SmoothCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if the device has a touch screen
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
    }
  }, []);

  const cursorSize = 16; // 16px (w-4 h-4)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 10, stiffness: 1000, mass: 0.01 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half the size to center the cursor
      mouseX.set(e.clientX - cursorSize / 2);
      mouseY.set(e.clientY - cursorSize / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, cursorSize]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] h-4 w-4 rounded-full bg-[#cccccc] mix-blend-exclusion hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    />
  );
}
