import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-start md:items-center text-sm md:text-base border-t border-foreground/5 mt-32">
      <div className="flex flex-col gap-2 mb-8 md:mb-0">
        <p className="font-medium text-foreground">Asechan Chib</p>
        <p className="text-foreground/60">Full-Stack & ML Developer</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-foreground/80">
        <a 
          href="mailto:asechanchib@gmail.com"
          className="flex items-center gap-1 hover:text-accent-sage transition-colors duration-300"
        >
          Email <ArrowUpRight className="w-4 h-4" />
        </a>
        <a 
          href="https://linkedin.com/in/asechan-chib"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-accent-sage transition-colors duration-300"
        >
          LinkedIn <ArrowUpRight className="w-4 h-4" />
        </a>
        <a 
          href="https://github.com/asechan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-accent-sage transition-colors duration-300"
        >
          GitHub <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
}
