"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface ProjectCardProps {
  title: string;
  summary: string;
  stack: string;
  slug: string;
  index: number;
  video?: string;
  poster?: string;
  image?: string;
}

export default function ProjectCard({ title, summary, stack, slug, index, video, poster, image }: ProjectCardProps) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <Link href={`/projects/${slug}`} className="block group">
        <div className="relative w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-sm bg-foreground/5 mb-6">
          {/* Project media */}
          <motion.div 
            className="absolute inset-0 w-full h-full bg-foreground/10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {video ? (
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="none" 
                poster={poster}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              >
                <source src={video} type="video/mp4" />
              </video>
            ) : image ? (
              <img 
                src={image} 
                alt={`${title} project preview`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
            ) : null}
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-sm tracking-widest uppercase bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
              View Project
            </span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-baseline">
            <h3 className="text-xl md:text-2xl font-light text-foreground group-hover:text-accent-sage transition-colors duration-300">
              {title}
            </h3>
            <span className="text-xs text-foreground/50 tracking-wider uppercase">
              {stack.split(',')[0]} {/* Just show the primary tech */}
            </span>
          </div>
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl">
            {summary}
          </p>
        </div>
      </Link>
    </AnimatedSection>
  );
}
