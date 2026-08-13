import { notFound } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Using the type definition for Next.js 15 page props where params is a Promise
type Params = Promise<{ slug: string }>;

export default async function ProjectDetails({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-24">
      {/* Back link */}
      <AnimatedSection>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/50 hover:text-accent-sage transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>
      </AnimatedSection>

      {/* Header */}
      <section className="flex flex-col gap-8">
        <AnimatedSection delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight">
            {project.title}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="flex flex-col md:flex-row gap-8 md:gap-16 border-b border-foreground/10 pb-12">
          <div className="md:w-2/3">
            <p className="text-xl md:text-2xl font-light text-foreground/80 leading-relaxed">
              {project.summary}
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col gap-6">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-foreground/50 mb-2">Stack</h3>
              <p className="font-light text-foreground/90">{project.stack}</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-foreground/50 mb-2">Links</h3>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-light text-foreground/90 hover:text-accent-sage transition-colors duration-300"
              >
                View Repository <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Hero Image / Video */}
      <AnimatedSection delay={0.3}>
        <div className="w-full aspect-[21/9] bg-foreground/5 rounded-sm relative overflow-hidden flex items-center justify-center">
          {(project as any).video ? (
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              poster={(project as any).poster}
              className="w-full h-full object-cover"
            >
              <source src={(project as any).video} type="video/mp4" />
            </video>
          ) : (project as any).image ? (
            <img 
              src={(project as any).image} 
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover"
            />
          ) : (
            <p className="text-foreground/30 font-light tracking-wide">Screenshot Placeholder</p>
          )}
        </div>
      </AnimatedSection>

      {/* Details */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-4 lg:col-span-3">
          <AnimatedSection delay={0.1}>
            <h2 className="text-lg font-medium sticky top-32">The Process</h2>
          </AnimatedSection>
        </div>
        <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-8">
          <AnimatedSection delay={0.2}>
            <p className="text-lg font-light text-foreground/80 leading-relaxed">
              {project.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mt-8 md:mt-16">
        <div className="md:col-span-4 lg:col-span-3">
          <AnimatedSection delay={0.1}>
            <h2 className="text-lg font-medium sticky top-32">The Outcome</h2>
          </AnimatedSection>
        </div>
        <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-8">
          <AnimatedSection delay={0.2}>
            <p className="text-lg font-light text-foreground/80 leading-relaxed">
              {project.outcome}
            </p>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
