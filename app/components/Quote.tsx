"use client";
import React from "react";

const Quote = () => (
  <section className="quote-section relative flex items-center justify-center min-h-[28rem] my-16 overflow-hidden">
    {/* Background image with slow zoom-in animation */}
    <img
      src="/quote.png"
      alt="Pianist at piano"
      className="absolute inset-0 w-full h-full object-cover z-0 animate-quote-zoom"
      style={{ animation: "quote-zoom 20s ease-in-out infinite alternate" }}
    />
    {/* Enhanced glassmorphism card with full-width blockquote */}
    <div className="relative z-10 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto py-16 px-6 md:px-16 rounded-2xl bg-white/20 backdrop-blur-xl shadow-2xl border border-white/30 flex flex-col items-center justify-center">
      <blockquote className="w-full text-2xl md:text-4xl font-bold text-center text-white mb-8 drop-shadow-lg p-0 md:p-4">
        "AN EXPLOSIVE FORCE…Tao possesses startling technical elan and an
        ability to communicate clearly, no matter how thorny a score may become.
        He also has a hefty dash of charm."
      </blockquote>
      <div className="w-full text-lg md:text-xl italic text-white text-center drop-shadow">
        – Tim Smith, The Baltimore Sun
      </div>
    </div>
    {/* Overlay for darkening background if needed */}
    <div className="absolute inset-0 bg-black/30 z-0" />
    <style jsx>{`
      @keyframes quote-zoom {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.08);
        }
      }
      @keyframes quote-fadein {
        0% {
          opacity: 0;
          transform: translateY(40px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-quote-zoom {
        animation: quote-zoom 20s ease-in-out infinite alternate;
      }
      .animate-quote-fadein {
        animation: quote-fadein 1.2s cubic-bezier(0.4, 0, 0.2, 1) both;
      }
    `}</style>
  </section>
);

export default Quote;
