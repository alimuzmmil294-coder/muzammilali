import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { personalInfo, education } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
        <SectionHeader title="About Me" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {/* Card 1: Who I Am */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="h-full rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 hover:shadow-primary/5">
              <div className="p-5 sm:p-6 lg:p-7">
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">
                  Who I Am
                </h3>
                <div className="space-y-3">
                  {personalInfo.aboutBio.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-xs sm:text-sm text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="h-full rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 hover:shadow-primary/5">
              <div className="p-5 sm:p-6 lg:p-7">
                <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                  <div className="p-1.5 rounded-lg bg-primary/10">
                    <GraduationCap className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    Education
                  </h3>
                </div>

                <div className="space-y-4">
                  {education.map((item, idx) => (
                    <div
                      key={idx}
                      className="pb-3.5 sm:pb-4 border-b border-border/50 last:border-0 last:pb-0"
                    >
                      <h4 className="font-semibold text-foreground text-xs sm:text-sm mb-1">
                        {item.institution}
                      </h4>
                      {item.degree && (
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <Award className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                          <p className="text-xs text-muted-foreground">
                            {item.degree}
                          </p>
                        </div>
                      )}
                      {item.period && (
                        <p className="text-xs text-muted-foreground">
                          {item.period}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
