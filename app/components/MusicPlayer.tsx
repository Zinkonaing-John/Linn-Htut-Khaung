"use client";
import React, { useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-md border-t border-white/10 px-4 py-3 z-50 transform translate-y-full md:translate-y-0 transition-transform duration-500 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div
            className="size-12 bg-white/10 rounded flex-shrink-0 bg-cover bg-center shadow-lg"
            style={{ backgroundImage: 'url("/album.png")' }}
          />
          <div className="hidden sm:block">
            <p className="text-white text-sm font-medium">Midnight Waltz</p>
            <p className="text-gray-500 text-xs uppercase tracking-wider">
              Now Playing
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-gray-400 hover:text-white transition">
            <span className="material-symbols-outlined text-2xl">
              skip_previous
            </span>
          </button>
          <button
            className="size-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition hover:scale-105 shadow-md"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <span className="material-symbols-outlined text-2xl">
              {isPlaying ? "pause" : "play_arrow"}
            </span>
          </button>
          <button className="text-gray-400 hover:text-white transition">
            <span className="material-symbols-outlined text-2xl">skip_next</span>
          </button>
        </div>
        <div className="hidden md:flex items-center gap-3 w-40">
          <span className="material-symbols-outlined text-gray-500 text-xs">
            volume_up
          </span>
          <div className="h-1 bg-white/10 rounded-full flex-grow cursor-pointer group">
            <div className="h-full w-2/3 bg-white group-hover:bg-primary rounded-full transition-colors relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 size-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
