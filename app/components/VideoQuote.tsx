import React from "react";

export default function VideoQuote() {
  return (
    <section className="py-20 sm:py-24 md:py-32 lg:py-48 bg-background-dark relative flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("/quote.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl text-center">
        <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif italic text-white/90 leading-tight mb-6 sm:mb-8 md:mb-10 px-4">
          &quot;The piano is a monster that screams when you touch its teeth.&quot;
        </blockquote>
        <cite className="text-primary text-xs sm:text-sm uppercase tracking-[0.2em] font-bold not-italic">
          — Andres Segovia
        </cite>
      </div>
    </section>
  );
}
