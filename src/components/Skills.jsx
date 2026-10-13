import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { BrandIcon } from "./BrandIcons";
import { skills } from "@/data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-muted/50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
        <SectionHeader title="Skills & Technologies" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid grid-cols-2 min-[380px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2.5 sm:gap-3.5 md:gap-4">
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
                  <div className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 md:p-5 rounded-xl border border-border bg-card hover:shadow-md transition-all duration-200 h-full justify-center">
                    <div className="text-2xl sm:text-3xl transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                      <BrandIcon
                        name={skill.icon}
                        color={skill.color}
                        className="w-7 h-7 sm:w-8 sm:h-8"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-foreground text-center leading-tight break-words">
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
