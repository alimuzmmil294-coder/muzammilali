import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personalInfo } from "@/data/portfolioData";

function Typewriter({ words, speed = 100, pause = 2000 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, words, speed, pause]);

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span className="inline-block w-0.5 h-6 ml-1 bg-primary align-middle animate-pulse" />
    </span>
  );
}

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="bg-background min-h-[calc(100vh-4rem)] flex items-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        {/* Left Column: Details & Bio */}
        <motion.div
          className="flex-1 text-center md:text-left w-full"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs sm:text-sm font-semibold text-primary mb-2.5 sm:mb-3 tracking-wider uppercase">
            {personalInfo.titlePrefix}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight text-balance">
            Hi, I'm {personalInfo.name}
          </h1>

          <div className="text-xl sm:text-2xl text-muted-foreground mb-4 sm:mb-6 min-h-[2.25rem] sm:min-h-[2.5rem] flex items-center justify-center md:justify-start font-medium">
            <Typewriter words={personalInfo.roles} speed={70} pause={2000} />
          </div>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm sm:text-base hover:opacity-90 active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              Get in Touch
            </button>
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 rounded-xl border border-border bg-card text-foreground font-medium text-sm sm:text-base hover:bg-accent active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              View Projects
            </button>
          </div>

          {/* Social Links */}
          <div className="flex mt-6 sm:mt-8 gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/alimuzmmil294-coder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 sm:p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <GithubIcon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/muzammil-ali-824075386/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 sm:p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <LinkedinIcon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
            </a>
            <a
              href="mailto:alimuzmmil294@gmail.com"
              aria-label="Email"
              className="p-2 sm:p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Mail className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://wa.me/923700504863"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 sm:p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <MessageCircle className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 2xl:w-[26rem] 2xl:h-[26rem]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-muted border border-border/60 shadow-lg">
              <img
                src={personalInfo.profileImage}
                alt="Muzammil Ali - Full Stack MERN Developer based in Peshawar, Pakistan"
                width="384"
                height="384"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
