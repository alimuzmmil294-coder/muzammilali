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
    <section id="certificates" className="py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Certificates & Achievements" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="h-full"
            >
              <div className="h-full border border-border bg-card hover:shadow-md transition-shadow duration-300 rounded-2xl p-6 flex flex-col">
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="flex-shrink-0 p-2.5 rounded-lg bg-primary/10 text-primary">
                    <div className="h-5 w-5">{getCertIcon(cert.icon)}</div>
                  </div>
                  <h3 className="text-base font-bold text-foreground leading-tight pt-0.5">
                    {cert.title}
                  </h3>
                </div>

                <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground mb-3">
                  {cert.organization}
                </span>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
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
