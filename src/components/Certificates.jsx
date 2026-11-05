import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Shield,
  Laptop,
  Award,
  Globe,
  MessageSquare,
  FileCheck,
  Eye,
  ExternalLink,
  X,
  Calendar,
  Hash,
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
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

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
              <div className="h-full border border-border bg-card hover:shadow-md transition-shadow duration-300 rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col group">
                {/* Certificate Image Preview if available */}
                {cert.image && (
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted border border-border/70 mb-3.5 sm:mb-4 group/media cursor-pointer shadow-xs"
                  >
                    <img
                      src={cert.image}
                      alt={cert.imageAlt || `${cert.title} Certificate`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover/media:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/45 opacity-0 group-hover/media:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-medium backdrop-blur-[2px]">
                      <Eye className="h-4 w-4" />
                      <span>View Certificate</span>
                    </div>
                    {cert.duration && (
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-background/90 text-foreground backdrop-blur-md border border-border/60 shadow-xs">
                        {cert.duration}
                      </div>
                    )}
                  </div>
                )}

                {/* Card Header: Icon + Title */}
                <div className="flex items-start gap-3 sm:gap-3.5 mb-2.5 sm:mb-3">
                  <div className="flex-shrink-0 p-2 sm:p-2.5 rounded-lg bg-primary/10 text-primary">
                    <div className="h-4.5 w-4.5 sm:h-5 sm:w-5">{getCertIcon(cert.icon)}</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-foreground leading-tight pt-0.5 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    {cert.period && (
                      <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                        <Calendar className="h-3 w-3 inline text-primary/70" />
                        {cert.period}
                      </p>
                    )}
                  </div>
                </div>

                {/* Organization Badge & Credential Tag */}
                <div className="flex flex-wrap items-center gap-1.5 mb-2.5 sm:mb-3">
                  <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-medium bg-secondary text-secondary-foreground">
                    {cert.organization}
                  </span>
                  {cert.credentialId && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono text-muted-foreground bg-muted border border-border/60">
                      <Hash className="h-2.5 w-2.5" />
                      {cert.credentialId}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
                  {cert.description}
                </p>

                {/* Action Footer if image exists */}
                {cert.image && (
                  <div className="mt-3.5 pt-3 border-t border-border flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>Inspect Credential</span>
                    </button>
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`Open ${cert.title} certificate full size in new tab`}
                      title="Open full size in new tab"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCert.title} Certificate Preview`}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-border flex items-center justify-between gap-3 bg-card">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-foreground truncate">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">
                    {selectedCert.organization}
                    {selectedCert.credentialId ? ` • ID: ${selectedCert.credentialId}` : ""}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer shrink-0"
                  aria-label="Close certificate preview"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body / Image */}
              <div className="flex-1 overflow-auto p-3 sm:p-6 bg-muted/30 flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.imageAlt || selectedCert.title}
                  className="max-h-[68vh] w-auto max-w-full rounded-lg border border-border/80 shadow-md object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-3 sm:p-4 border-t border-border flex items-center justify-between gap-3 bg-card">
                {selectedCert.period ? (
                  <span className="text-xs text-muted-foreground hidden sm:inline">
                    Issued: {selectedCert.period}
                  </span>
                ) : (
                  <span />
                )}
                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Open Full Size</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="px-3 py-1.5 rounded-lg border border-border bg-muted/60 text-foreground text-xs sm:text-sm font-medium hover:bg-muted transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
