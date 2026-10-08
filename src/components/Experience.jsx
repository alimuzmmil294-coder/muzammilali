import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/data/portfolioData";

// Helper to compute initials from company name
function getInitials(name) {
  return name
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function RoleItem({ role }) {
  return (
    <div className="space-y-3 pt-4 first:pt-0">
      {/* Type & Location */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="inline-flex items-center rounded-full px-3 py-0.5 text-[11px] font-medium bg-primary/10 text-primary border border-primary/20">
          <Briefcase className="mr-1.5 h-3 w-3" />
          {role.type}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {role.location}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-foreground/90">
        {role.description}
      </p>

      {/* Highlights */}
      {role.highlights && role.highlights.length > 0 && (
        <ul className="space-y-1.5 pt-1">
          {role.highlights.map((point, idx) => (
            <li
              key={idx}
              className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Technologies */}
      {role.technologies && role.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1.5">
          {role.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="rounded-lg border border-primary/10 bg-primary/5 px-2.5 py-0.5 text-[11px] font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Work Experience" />

        <div className="space-y-6">
          {experiences.map((exp, expIdx) => {
            const hasMultipleRoles = exp.roles.length > 1;

            return (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(expIdx, 3) * 0.08,
                  ease: "easeOut",
                }}
                className="group rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:shadow-primary/5 overflow-hidden"
              >
                {/* Company Header */}
                <header className="flex items-start gap-4 px-6 py-5 border-b border-border/50 bg-muted/20 group-hover:bg-muted/30 transition-colors duration-300">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 font-bold text-primary ring-1 ring-inset ring-primary/15 group-hover:ring-primary/30 group-hover:bg-primary/15 transition-all duration-300 text-sm">
                    {getInitials(exp.company)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg group-hover:text-primary transition-colors">
                        {exp.company}
                      </h3>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          Present
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {exp.period} • {exp.duration}
                    </p>
                  </div>
                </header>

                {/* Roles Body */}
                <div className="p-6 divide-y divide-border/40">
                  {exp.roles.map((role) => (
                    <div key={role.title} className="py-4 first:pt-0 last:pb-0">
                      {hasMultipleRoles && (
                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                          <h4 className="text-sm font-semibold text-foreground">
                            {role.title}
                          </h4>
                          <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                            {role.period} • {role.duration}
                          </span>
                        </div>
                      )}
                      {!hasMultipleRoles && (
                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                          <h4 className="text-sm font-semibold text-foreground">
                            {role.title}
                          </h4>
                        </div>
                      )}
                      <RoleItem role={role} />
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
