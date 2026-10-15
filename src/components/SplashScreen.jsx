import React, { useState, useEffect } from "react";

export default function SplashScreen() {
  const [removed, setRemoved] = useState(false);
  const [faded, setFaded] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFaded(true), 600);
    const timer2 = setTimeout(() => setRemoved(true), 1100);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      className="fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-500"
      style={{
        opacity: faded ? 0 : 1,
        pointerEvents: faded ? "none" : "auto",
      }}
    >
      <div className="text-center">
        <p className="text-2xl sm:text-3xl font-bold text-foreground mb-2 tracking-tight">
          Muzammil Ali
        </p>
        <p className="text-sm text-muted-foreground font-mono">
          Full Stack Developer
        </p>
      </div>
    </div>
  );
}
