import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Image } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { projects } from "@/data/portfolioData";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="h-full"
    >
      <a
        href={project.projectLink || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full group cursor-pointer"
      >
        <div className="overflow-hidden h-full flex flex-col border border-border bg-card hover:shadow-lg transition-all duration-300 rounded-2xl">
          {/* Project Media Header: Actual Image or Reserved Placeholder */}
          {project.image ? (
            <div className="relative h-48 sm:h-52 overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                <ExternalLink className="h-4 w-4 text-foreground" />
              </div>
            </div>
          ) : (
            <div className="relative h-48 sm:h-52 overflow-hidden bg-muted/40 border-b border-dashed border-border/70 flex flex-col items-center justify-center text-center p-4 select-none group-hover:bg-muted/60 transition-colors">
              <div className="p-3 rounded-xl bg-primary/10 text-primary mb-2">
                <Image className="h-6 w-6" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-foreground">
                Project Image
              </p>
              <p className="text-[11px] sm:text-xs text-muted-foreground font-mono mt-0.5 bg-background/80 px-2.5 py-0.5 rounded-full border border-border/60">
                Size: 600 × 350 px (16:9)
              </p>

              {/* Hover External Link Indicator */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                <ExternalLink className="h-4 w-4 text-foreground" />
              </div>
            </div>
          )}

          {/* Details Body */}
          <div className="flex flex-col flex-grow p-5 sm:p-6">
            <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-md bg-secondary text-secondary-foreground px-2.5 py-0.5 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-14 bg-muted/50 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Featured Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
