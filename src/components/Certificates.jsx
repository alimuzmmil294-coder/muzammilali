import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Shield,
  Laptop,
  Award,
  Globe,
  MessageSquare,
  FileCheck,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { certificates } from "@/data/portfolioData";

function getCertIcon(iconName) {
  switch (iconName) {
    case "code":
      return <Code className="h-5 w-5" />;
    case "shield":
      return <Shield className="h-5 w-5" />;
    case "laptop":
      return <Laptop className="h-5 w-5" />;
    case "award":
      return <Award className="h-5 w-5" />;
    case "globe":
      return <Globe className="h-5 w-5" />;
    case "message-square":
      return <MessageSquare className="h-5 w-5" />;
    default:
      return <FileCheck className="h-5 w-5" />;
  }
}

export default function Certificates() {
  if (!certificates || certificates.length === 0) {
    return null;
  }

  return (
    <section id="certificates" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
        <SectionHeader title="Certificates & Achievements" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="h-full"
            >
              <div className="h-full border border-border bg-card hover:shadow-md transition-shadow duration-300 rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col">
                <div className="flex items-start gap-3 sm:gap-3.5 mb-3 sm:mb-4">
                  <div className="flex-shrink-0 p-2 sm:p-2.5 rounded-lg bg-primary/10 text-primary">
                    <div className="h-4.5 w-4.5 sm:h-5 sm:w-5">{getCertIcon(cert.icon)}</div>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground leading-tight pt-0.5">
                    {cert.title}
                  </h3>
                </div>

                <span className="inline-block w-fit px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-medium bg-secondary text-secondary-foreground mb-2.5 sm:mb-3">
                  {cert.organization}
                </span>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
