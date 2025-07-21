"use client";
import React, { useState } from "react";

const YOUTUBE_URL = "https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=1"; // Sample video

const Video = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="video-section relative flex items-center min-h-[24rem] md:min-h-[32rem] w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/video.png"
        alt="Video background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-start justify-center w-full max-w-4xl px-8 md:px-16 mx-auto">
        <button
          className="flex items-center gap-4 mb-6 group focus:outline-none"
          onClick={() => setOpen(true)}
        >
          <span className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-white/80 bg-white/20 group-hover:bg-yellow-800 transition">
            <svg
              className="w-8 h-8 text-white group-hover:text-yellow-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <polygon points="9,7 9,17 17,12" />
            </svg>
          </span>
          <span className="text-2xl md:text-3xl font-bold text-yellow-300 tracking-widest group-hover:text-yellow-400 transition">
            PLAY VIDEO
          </span>
        </button>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow">
          Goldberg Variations + Tap Dancer
        </h2>
        <p className="text-lg md:text-xl text-white/90 drop-shadow">
          Conrad performs J.S. Bach’s{" "}
          <em>Goldberg Variations Aria and Variation I</em> at the Steinway
          Factory, accompanied by tap dancer Caleb Teicher
        </p>
      </div>
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-2xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <button
              className="absolute top-2 right-2 z-10 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 focus:outline-none"
              onClick={() => setOpen(false)}
              aria-label="Close video"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              src={YOUTUBE_URL}
              title="Goldberg Variations + Tap Dancer"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Video;
