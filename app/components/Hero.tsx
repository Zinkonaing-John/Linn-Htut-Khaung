import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center items-center px-4 md:px-10">
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/hero.png")' }}
        >
          <div className="absolute inset-0 bg-background-dark/60 backdrop-brightness-75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 text-center max-w-4xl mx-auto pt-20 px-4">
        <div className="space-y-4 sm:space-y-6 animate-fade-in-up">
          <p className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase opacity-80">
            Contemporary Minimalist Piano
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-tighter leading-none">
            ECHOES OF <br />
            <span className="font-bold">SILENCE</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light tracking-wide max-w-lg mx-auto leading-relaxed opacity-90 px-4">
            The new album. A sonic exploration of solitude and resonance.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8 w-full sm:w-auto">
          <Link href="/audio" className="flex-1 sm:flex-initial">
            <button className="flex w-full sm:min-w-[180px] items-center justify-center rounded-full h-12 sm:h-14 px-6 sm:px-8 bg-white text-black text-xs sm:text-sm uppercase tracking-widest font-bold transition hover:bg-primary hover:text-white transform hover:-translate-y-1 duration-300">
              Listen Now
            </button>
          </Link>
          <Link href="/videos" className="flex-1 sm:flex-initial">
            <button className="flex w-full sm:min-w-[180px] items-center justify-center rounded-full h-12 sm:h-14 px-6 sm:px-8 bg-transparent border border-white/30 text-white backdrop-blur-sm text-xs sm:text-sm uppercase tracking-widest font-bold transition hover:bg-white/10 hover:border-white transform hover:-translate-y-1 duration-300">
              Watch Film
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <span className="material-symbols-outlined text-white">
          keyboard_arrow_down
        </span>
      </div>
    </section>
  );
}
