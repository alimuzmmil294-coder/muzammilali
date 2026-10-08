import React from "react";
import { cn } from "@/lib/utils";

export default function SectionHeader({ title, className }) {
  return (
    <div className={cn("text-center mb-14", className)}>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-3">
        {title}
      </h2>
      <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
    </div>
  );
}
