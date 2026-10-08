import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { BrandIcon } from "./BrandIcons";
import { skills } from "@/data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-muted/50 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Skills & Technologies" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {skills.map((skill, index) => {
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl border border-border bg-card hover:shadow-md transition-all duration-200 h-full justify-center">
                    <div className="text-3xl transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                      <BrandIcon
                        name={skill.icon}
                        color={skill.color}
                        className="w-8 h-8"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-foreground text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
