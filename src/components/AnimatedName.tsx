"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ParticleText from "./ParticleText";

export default function AnimatedName() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <div className="h-[140px] md:h-[180px] lg:h-[200px] w-full flex items-start justify-start -ml-3 mb-10 md:mb-4 lg:-mb-2 pointer-events-auto">
      <ParticleText
        text="Asechan Chib"
        particleSize={2.5}
        density={3}
        color={isDark ? "#eaeaea" : "#2c2c2e"}
        highlightColor={isDark ? "#8ea395" : "#a3b1c6"}
        scatter={1500}
        gatherDuration={1600}
        stagger={420}
        pointerRepel={40}
        repelRadius={120}
        idleDrift={0.7}
        trigger="mount"
        fontSize={120}
        fontWeight={300}
        fontFamily="'Outfit', sans-serif"
        glow={true}
      />
    </div>
  );
}
