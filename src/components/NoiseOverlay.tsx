"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import GradientWaves from "./GradientWaves";

export default function NoiseOverlay() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <>
      <div className="fixed -top-[10vh] left-0 w-screen h-[120vh] z-[-1] opacity-70">
        <GradientWaves
          horizonColor={isDark ? "#111112" : "#f7f7f5"}
          waveColor={isDark ? "#1e2621" : "#8ea395"}
          crestColor={isDark ? "#3a4656" : "#a3b1c6"}
          speed={0.3}
          amplitude={1.8}
          waveScale={1.0}
          waveRatio={1.0}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1.0}
          height={5.5}
          fogDepth={40}
          detail="low"
          brightness={0.9}
          opacity={1.0}
          mouseInteraction={true}
          parallaxStrength={0.9}
          grain={false}
          grainIntensity={0}
        />
      </div>
    </>
  );
}
