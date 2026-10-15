import React from "react";
import { Mail, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { navLinks, personalInfo, certificates } from "@/data/portfolioData";

export default function Footer() {
  const visibleNavLinks = navLinks.filter(
    (link) => link.href !== "#certificates" || (certificates && certificates.length > 0)
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-card/50 py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          {/* Brand */}
          <div>
            <p className="text-base sm:text-lg font-bold text-foreground">
              {personalInfo.name}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
              Full-Stack MERN Developer & Software Engineer
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-3.5 sm:gap-6">
            {visibleNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href.substring(1));
                }}
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-2 sm:gap-3">
            <a
              href="https://github.com/alimuzmmil294-coder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <GithubIcon className="h-4 sm:h-4.5 w-4 sm:w-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/muzammil-ali-824075386/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <LinkedinIcon className="h-4 sm:h-4.5 w-4 sm:w-4.5" />
            </a>
            <a
              href="mailto:alimuzmmil294@gmail.com"
              aria-label="Email"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Mail className="h-4 sm:h-4.5 w-4 sm:w-4.5" />
            </a>
            <a
              href="https://wa.me/923700504863"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <MessageCircle className="h-4 sm:h-4.5 w-4 sm:w-4.5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-border text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
