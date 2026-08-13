"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLenis } from "lenis/react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { path: "#about", label: "About" },
  { path: "#work", label: "Work" },
  { path: "#contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const lenis = useLenis();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastY && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastY(latest);
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(path, { offset: -50, duration: 1.5 });
    } else {
      document.querySelector(path)?.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState(null, "", path);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 p-6 md:p-12 flex justify-between items-center pointer-events-none transition-transform duration-300 max-md:pb-8 max-md:pt-[max(1.5rem,env(safe-area-inset-top))]",
        hidden ? "max-md:-translate-y-[150%]" : "translate-y-0"
      )}
    >
      {/* Seamless gradient and blur for mobile only */}
      <div className="absolute inset-0 z-[-1] md:hidden bg-gradient-to-b from-background/90 via-background/70 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] pointer-events-none" />
      
      <div className="flex items-center gap-6 pointer-events-auto">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="text-sm md:text-base font-medium tracking-wide hover:text-accent-sage transition-colors duration-300"
        >
          Home
        </a>

        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-foreground/70 hover:text-accent-sage transition-colors duration-300 flex items-center justify-center p-1 rounded-full"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        )}
      </div>

      <nav className="pointer-events-auto flex gap-6 md:gap-10">
        {navItems.map((item) => {
          return (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleScroll(e, item.path)}
              className="relative text-sm md:text-base transition-colors duration-300 text-foreground/70 hover:text-accent-sage"
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
