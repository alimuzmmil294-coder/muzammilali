import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo, certificates } from "@/data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const visibleNavLinks = navLinks.filter(
    (link) => link.href !== "#certificates" || (certificates && certificates.length > 0)
  );

  const scrollTo = (id) => {
    closeMenu();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop;
        if (window.scrollY >= top - 200) {
          current = section.getAttribute("id") || "";
        }
      });
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          className="text-base sm:text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors font-mono truncate max-w-[210px] sm:max-w-none"
        >
          &lt; {personalInfo.name} /&gt;
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-accent transition-colors flex items-center justify-center shrink-0 ml-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 2xl:gap-2">
          {visibleNavLinks.map((link) => {
            const id = link.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(id);
                }}
                className={`px-2.5 lg:px-3 py-2 text-xs lg:text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden transition-all duration-200 shadow-md">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-1">
            {visibleNavLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(id);
                  }}
                  className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
