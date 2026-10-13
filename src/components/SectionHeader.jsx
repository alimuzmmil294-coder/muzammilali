import React from "react";
import { cn } from "@/lib/utils";

export default function SectionHeader({ title, className }) {
  return (
    <div className={cn("text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14", className)}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-foreground tracking-tight mb-2.5 sm:mb-3">
        {title}
      </h2>
      <div className="w-10 sm:w-12 h-1 bg-primary mx-auto rounded-full" />
    </div>
  );
}
