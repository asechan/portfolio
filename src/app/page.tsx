import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import AnimatedName from "@/components/AnimatedName";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-24">
      {/* Hero Section */}
      <section id="home" className="min-h-[70vh] flex flex-col justify-center">
        <AnimatedSection>
          <AnimatedName />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl font-light leading-relaxed">
            Building systems that think, and platforms that scale. <br className="hidden md:block" />
            Full-Stack & ML Developer based in Bengaluru.
          </p>
        </AnimatedSection>
      </section>

      {/* About Section */}
      <section id="about" className="flex flex-col gap-24 pt-24">
        {/* Bio Section */}
        <div className="flex flex-col gap-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-light mb-8">About</h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="max-w-3xl flex flex-col gap-6 text-lg text-foreground/80 font-light leading-relaxed">
              <p>
                I am a CS Engineering student at Manipal Institute of Technology, Bengaluru, specializing in Computer Science Engineering (Data Science) (2023–2027).
              </p>
              <p>
                I build full-stack systems and ML pipelines — from query optimizers to clinical signal-processing tools. Beyond code, I've founded and scaled a registered NGO and led a 1,000+ member photography club. I'm passionate about building systems that think and platforms that scale.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col gap-8">
          <AnimatedSection delay={0.2}>
            <h2 className="text-sm font-medium tracking-widest uppercase text-foreground/50 border-b border-foreground/10 pb-4">
              Skills & Tools
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.3} className="flex flex-col gap-4">
              <h3 className="font-medium">Languages</h3>
              <ul className="flex flex-col gap-2 text-foreground/70 font-light">
                <li>Python, Java, JavaScript</li>
                <li>C, SQL</li>
                <li>HTML, CSS</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="flex flex-col gap-4">
              <h3 className="font-medium">ML & AI</h3>
              <ul className="flex flex-col gap-2 text-foreground/70 font-light">
                <li>PyTorch, TensorFlow, CNNs</li>
                <li>OpenCV, scikit-learn</li>
                <li>NumPy, Pandas, Matplotlib</li>
                <li>LLM Prompt Engineering</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.5} className="flex flex-col gap-4">
              <h3 className="font-medium">Web & Backend</h3>
              <ul className="flex flex-col gap-2 text-foreground/70 font-light">
                <li>React.js, Node.js</li>
                <li>Spring Boot, FastAPI</li>
                <li>REST APIs</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.6} className="flex flex-col gap-4">
              <h3 className="font-medium">Databases & Cloud</h3>
              <ul className="flex flex-col gap-2 text-foreground/70 font-light">
                <li>MySQL, MongoDB</li>
                <li>AWS, Docker</li>
                <li>Git, GitHub Actions (CI/CD)</li>
              </ul>
            </AnimatedSection>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="flex flex-col gap-8">
          <AnimatedSection delay={0.2}>
            <h2 className="text-sm font-medium tracking-widest uppercase text-foreground/50 border-b border-foreground/10 pb-4">
              Experience
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-12">
            <AnimatedSection delay={0.3} className="flex flex-col md:flex-row gap-4 md:gap-16">
              <div className="md:w-1/4 text-foreground/50 font-light">2022–2023</div>
              <div className="md:w-3/4 flex flex-col gap-2">
                <h3 className="text-xl font-light">Lead Developer, KCMUN '22</h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Designed and automated a delegate registration & payment pipeline (MERN stack) processing 360 confirmed registrations; built conference-wide features (committee pages, ROP viewer, dynamic scheduling) serving 500+ users; optimized responsive UI and asset delivery.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="flex flex-col md:flex-row gap-4 md:gap-16">
              <div className="md:w-1/4 text-foreground/50 font-light">2021</div>
              <div className="md:w-3/4 flex flex-col gap-2">
                <h3 className="text-xl font-light">Founder & Lead Developer, Raunak Foundation</h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Founded and scaled a registered NGO to 6 regional branches, impacting 300+ underprivileged children; architected the foundation's web platform (FastAPI + MySQL), achieving 1.9s page load and 200+ monthly visitors; drove organic growth via structured data markup and SEO.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Beyond Code Section */}
        <div className="flex flex-col gap-8">
          <AnimatedSection delay={0.2}>
            <h2 className="text-sm font-medium tracking-widest uppercase text-foreground/50 border-b border-foreground/10 pb-4">
              Beyond Code
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <ul className="flex flex-col gap-4 text-foreground/70 font-light leading-relaxed max-w-3xl">
              <li><strong className="font-medium text-foreground">President, Photography Club</strong> (2024–2025) — scaled to 1,000+ members, produced 12+ events including 3 auditorium-scale shows.</li>
              <li><strong className="font-medium text-foreground">Media Head, Neura AI & CyberSpace Club</strong> (2024–2025) — media/content strategy across 2 tech clubs.</li>
              <li><strong className="font-medium text-foreground">King Constantine Medal, Round Square</strong> — recognized for global youth leadership and community impact.</li>
              <li><strong className="font-medium text-foreground">Top 20 nationally</strong>, Cisco Next Gen Systems League (CNSL), 2026.</li>
            </ul>
          </AnimatedSection>
        </div>

      </section>

      {/* Projects Section */}
      <section id="work" className="flex flex-col gap-12 md:gap-24 pt-24">
        <AnimatedSection>
          <h2 className="text-sm font-medium tracking-widest uppercase text-foreground/50 mb-4 border-b border-foreground/10 pb-4">
            Selected Work
          </h2>
        </AnimatedSection>
        
        {/* Changed to a single column centered layout */}
        <div className="flex flex-col gap-y-16 max-w-4xl mx-auto w-full">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.slug}
              title={project.title}
              summary={project.summary}
              stack={project.stack}
              slug={project.slug}
              index={index}
              video={project.video}
              poster={project.poster}
              image={project.image}
            />
          ))}
        </div>

        {/* Certifications (Placeholder) */}
        <div className="flex flex-col gap-8 mt-12 md:mt-0">
          <AnimatedSection delay={0.2}>
            <h2 className="text-sm font-medium tracking-widest uppercase text-foreground/50 border-b border-foreground/10 pb-4">
              Certifications
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <AnimatedSection key={i} delay={0.3 + i * 0.1} className="p-6 border border-foreground/5 rounded-sm bg-foreground/[0.02]">
                <div className="h-4 w-3/4 bg-foreground/10 rounded mb-4 animate-pulse"></div>
                <div className="h-3 w-1/2 bg-foreground/5 rounded animate-pulse"></div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex flex-col gap-24 pt-24 min-h-[70vh]">
        <div className="flex flex-col gap-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-light mb-2">Get in touch</h1>
            <p className="text-foreground/70 text-lg font-light max-w-xl">
              Whether you have a question, a project in mind, or just want to say hi, I'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          {/* Contact Form */}
          <AnimatedSection delay={0.2} className="order-2 md:order-1">
            <form 
              action="https://formspree.io/f/YOUR_FORM_ID_HERE" 
              method="POST"
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium tracking-wide text-foreground/80">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="bg-transparent border-b border-foreground/20 py-2 outline-none focus:border-accent-sage transition-colors text-foreground font-light"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium tracking-wide text-foreground/80">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="bg-transparent border-b border-foreground/20 py-2 outline-none focus:border-accent-sage transition-colors text-foreground font-light"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium tracking-wide text-foreground/80">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  className="bg-transparent border-b border-foreground/20 py-2 outline-none focus:border-accent-sage transition-colors text-foreground font-light resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="mt-4 self-start px-8 py-3 bg-foreground text-background font-medium rounded-full hover:bg-accent-sage transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </AnimatedSection>

          {/* Direct Links */}
          <AnimatedSection delay={0.3} className="order-1 md:order-2 flex flex-col gap-8 md:pl-16">
            <div className="flex flex-col gap-6">
              <h2 className="text-sm font-medium tracking-widest uppercase text-foreground/50 border-b border-foreground/10 pb-4">
                Direct Contact
              </h2>
              <div className="flex flex-col gap-4 text-lg font-light">
                <a href="mailto:asechanchib@gmail.com" className="flex items-center gap-2 hover:text-accent-sage transition-colors w-fit">
                  asechanchib@gmail.com <ArrowUpRight className="w-5 h-5 text-foreground/50" />
                </a>
                <p className="text-foreground/70">
                  +91 89510-53951
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 mt-8">
              <h2 className="text-sm font-medium tracking-widest uppercase text-foreground/50 border-b border-foreground/10 pb-4">
                Socials
              </h2>
              <div className="flex flex-col gap-4 text-lg font-light">
                <a href="https://linkedin.com/in/asechan-chib" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-sage transition-colors w-fit">
                  LinkedIn <ArrowUpRight className="w-5 h-5 text-foreground/50" />
                </a>
                <a href="https://github.com/asechan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-sage transition-colors w-fit">
                  GitHub <ArrowUpRight className="w-5 h-5 text-foreground/50" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
