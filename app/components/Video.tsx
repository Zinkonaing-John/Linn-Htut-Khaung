"use client";
import React, { useEffect, useRef, useState } from "react";

const VIDEO_ID = "yHZlIamMm-o"; // YouTube video ID

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const Video = () => {
  const [isInView, setIsInView] = useState(false);
  const [player, setPlayer] = useState<any>(null);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load YouTube IFrame API and create player
  useEffect(() => {
    if (typeof window === "undefined") return;

    const createPlayer = () => {
      if (playerRef.current && !player && window.YT && window.YT.Player) {
        const ytPlayer = new window.YT.Player(playerRef.current, {
          videoId: VIDEO_ID,
          playerVars: {
            autoplay: 0,
            mute: 1,
            controls: 0, // Hide YouTube controls for custom design
            modestbranding: 1,
            rel: 0,
            loop: 1,
            playlist: VIDEO_ID,
            iv_load_policy: 3,
            fs: 0,
            disablekb: 1,
          },
          events: {
            onReady: () => {
              setPlayer(ytPlayer);
            },
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                // Update progress when playing
                progressIntervalRef.current = setInterval(() => {
                  if (
                    ytPlayer &&
                    ytPlayer.getCurrentTime &&
                    ytPlayer.getDuration
                  ) {
                    const current = ytPlayer.getCurrentTime();
                    const duration = ytPlayer.getDuration();
                    if (duration > 0) {
                      setProgress((current / duration) * 100);
                    }
                  }
                }, 100);
              } else {
                if (progressIntervalRef.current) {
                  clearInterval(progressIntervalRef.current);
                  progressIntervalRef.current = null;
                }
              }
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      // API already loaded
      createPlayer();
    } else {
      // Load the API
      if (
        !document.querySelector(
          'script[src="https://www.youtube.com/iframe_api"]'
        )
      ) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }

      window.onYouTubeIframeAPIReady = () => {
        createPlayer();
      };

      // In case API was already loaded but callback wasn't called
      const checkInterval = setInterval(() => {
        if (window.YT && window.YT.Player) {
          createPlayer();
          clearInterval(checkInterval);
        }
      }, 100);

      return () => clearInterval(checkInterval);
    }
  }, [player]);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  // Control video playback based on visibility
  useEffect(() => {
    if (!player) return;

    if (isInView) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  }, [isInView, player]);

  const handlePlayClick = () => {
    if (player) {
      if (isInView) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="video-section relative w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-24 lg:py-32"
    >
      <div className="relative w-full max-w-[1440px] mx-auto">
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-lg md:rounded-xl overflow-hidden group shadow-2xl shadow-black/50">
          {/* Background image placeholder - can be replaced with actual thumbnail */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: "url('/video.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent" />
          </div>

          {/* YouTube Player */}
          <div className="absolute inset-0 z-0">
            <div ref={playerRef} className="w-full h-full" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-12 z-10">
            <div className="flex flex-col sm:flex-row items-start justify-between w-full gap-4 sm:gap-6">
              <div className="w-full sm:max-w-2xl">
                <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 border border-white/10">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white mr-1.5 sm:mr-2 animate-pulse" />
                  Now Playing
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 sm:mb-2 tracking-tight leading-tight">
                  Goldberg Variations + Tap Dancer
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium mb-4 sm:mb-6">
                  Latest Release • Official Music Video • 4:32
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                  <button
                    onClick={handlePlayClick}
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg text-sm sm:text-base font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/30 group/btn"
                  >
                    <span className="material-symbols-outlined fill-1 text-lg sm:text-xl md:text-2xl">
                      {isInView ? "pause" : "play_arrow"}
                    </span>
                    <span className="whitespace-nowrap">Watch Now</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg text-sm sm:text-base font-bold transition-all border border-white/10">
                    <span className="material-symbols-outlined text-lg sm:text-xl">
                      add
                    </span>
                    <span className="hidden sm:inline">Add to List</span>
                    <span className="sm:hidden">Add</span>
                  </button>
                </div>
              </div>
              <div className="hidden md:flex flex-col gap-4 items-center">
                <button className="w-12 h-12 rounded-full bg-black/40 hover:bg-white/20 backdrop-blur text-white flex items-center justify-center transition-all border border-white/10">
                  <span className="material-symbols-outlined">volume_up</span>
                </button>
                <button className="w-12 h-12 rounded-full bg-black/40 hover:bg-white/20 backdrop-blur text-white flex items-center justify-center transition-all border border-white/10">
                  <span className="material-symbols-outlined">settings</span>
                </button>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-white/10 group-hover:h-1 sm:group-hover:h-2 transition-all">
            <div
              className="h-full bg-primary relative transition-all"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
