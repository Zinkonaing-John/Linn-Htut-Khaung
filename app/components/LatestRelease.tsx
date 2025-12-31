"use client";
import React from "react";
import Link from "next/link";

export default function LatestRelease() {
  return (
    <section
      className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-24 bg-surface-dark"
      id="music"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-5/12">
            <div className="aspect-square relative shadow-2xl">
              <div
                className="w-full h-full bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: 'url("/album.png")' }}
              />
            </div>
            <div className="flex gap-4 mt-6 sm:mt-8">
              <Link
                href="/audio"
                className="flex flex-1 items-center justify-center gap-2 rounded-none h-11 sm:h-12 bg-white text-black text-xs sm:text-sm uppercase tracking-widest font-bold hover:bg-gray-200 transition"
              >
                More
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full pt-4">
            <span className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4 block">
              Latest Release
            </span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light mb-4 sm:mb-6">
              Golden Hour
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-xl font-light">
              Experience the new collection of 12 original compositions. An
              exploration of time, memory, and the spaces between notes.
            </p>
            <div className="flex flex-col w-full border-t border-white/10">
              <div className="flex items-center justify-between py-4 sm:py-5 border-b border-white/10 group cursor-pointer hover:bg-white/5 px-3 sm:px-4 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0 flex-1">
                  <span className="text-white/30 font-mono text-xs sm:text-sm flex-shrink-0">01</span>
                  <span className="text-white text-base sm:text-lg font-light group-hover:pl-2 transition-all duration-300 truncate">
                    Midnight Waltz
                  </span>
                </div>
                <span className="text-white/50 text-xs sm:text-sm flex-shrink-0 ml-2">3:42</span>
              </div>
              <div className="flex items-center justify-between py-4 sm:py-5 border-b border-white/10 group cursor-pointer hover:bg-white/5 px-3 sm:px-4 transition-colors bg-white/5">
                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0 flex-1">
                  <span className="text-primary font-mono text-xs sm:text-sm flex-shrink-0">
                    <span className="material-symbols-outlined text-xs sm:text-sm animate-pulse">
                      play_arrow
                    </span>
                  </span>
                  <span className="text-primary text-base sm:text-lg font-medium group-hover:pl-2 transition-all duration-300 truncate">
                    Silence (Single)
                  </span>
                </div>
                <span className="text-primary text-xs sm:text-sm flex-shrink-0 ml-2">4:15</span>
              </div>
              <div className="flex items-center justify-between py-4 sm:py-5 border-b border-white/10 group cursor-pointer hover:bg-white/5 px-3 sm:px-4 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0 flex-1">
                  <span className="text-white/30 font-mono text-xs sm:text-sm flex-shrink-0">03</span>
                  <span className="text-white text-base sm:text-lg font-light group-hover:pl-2 transition-all duration-300 truncate">
                    Reflection
                  </span>
                </div>
                <span className="text-white/50 text-xs sm:text-sm flex-shrink-0 ml-2">2:58</span>
              </div>
              <div className="flex items-center justify-between py-4 sm:py-5 border-b border-white/10 group cursor-pointer hover:bg-white/5 px-3 sm:px-4 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0 flex-1">
                  <span className="text-white/30 font-mono text-xs sm:text-sm flex-shrink-0">04</span>
                  <span className="text-white text-base sm:text-lg font-light group-hover:pl-2 transition-all duration-300 truncate">
                    Winter Garden
                  </span>
                </div>
                <span className="text-white/50 text-xs sm:text-sm flex-shrink-0 ml-2">5:12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
