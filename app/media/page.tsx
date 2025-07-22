"use client";
import React, { useState, useRef } from "react";
import Header from "../components/Header";

export default function MediaPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [playingAudioSrc, setPlayingAudioSrc] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = () => {
        setPlayingAudioSrc(null);
        setCurrentTime(0);
      };
      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
      };
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current?.duration || 0);
      };
    }
  }, []);

  const handlePlayPause = (audioSrc: string) => {
    if (!audioRef.current) return;

    if (playingAudioSrc === audioSrc) {
      audioRef.current.pause();
      setPlayingAudioSrc(null);
    } else {
      audioRef.current.src = audioSrc;
      audioRef.current.play();
      setPlayingAudioSrc(audioSrc);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      <audio ref={audioRef} onEnded={() => setPlayingAudioSrc(null)} preload="auto" />
      <Header />
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <img
          src="/hero.png"
          alt="Media background"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
            Media
          </h1>
        </div>
      </section>

      <nav className="sticky top-16 bg-white shadow-md z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            <button
              onClick={() => scrollToSection("photos")}
              className="text-lg font-semibold text-gray-700 hover:text-yellow-600 transition"
            >
              Photos
            </button>
            <button
              onClick={() => scrollToSection("videos")}
              className="text-lg font-semibold text-gray-700 hover:text-yellow-600 transition"
            >
              Videos
            </button>
            <button
              onClick={() => scrollToSection("audio")}
              className="text-lg font-semibold text-gray-700 hover:text-yellow-600 transition"
            >
              Audio/MP3
            </button>
          </div>
        </div>
      </nav>

      <section id="photos" className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <img
            src="/pianist1.png"
            alt="Photo 1"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <img
            src="/pianist2.png"
            alt="Photo 2"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <img
            src="/pianist3.png"
            alt="Photo 3"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <img
            src="/pianist1.png"
            alt="Photo 4"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <img
            src="/pianist2.png"
            alt="Photo 5"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <img
            src="/pianist3.png"
            alt="Photo 6"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="text-center">
          <a href="/photos">
            <button className="bg-yellow-800 text-white font-bold py-3 px-8 rounded hover:bg-yellow-700 transition">
              View All
            </button>
          </a>
        </div>
      </section>

      <section id="videos" className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {[
            {
              id: "dQw4w9WgXcQ",
              title: "Never Gonna Give You Up",
              description: "Rick Astley",
            },
            {
              id: "3tmd-ClafbY",
              title: "Canon in D",
              description: "Johann Pachelbel",
            },
          ].map((video, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="/videos">
            <button className="bg-yellow-800 text-white font-bold py-3 px-8 rounded hover:bg-yellow-700 transition">
              View All
            </button>
          </a>
        </div>
      </section>

      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <img
          src="/album.png"
          alt="Featured background"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-white">
          <h2 className="text-4xl md:text-5xl font-bold text-center drop-shadow-lg mb-4">
            Featured Title
          </h2>
          <p className="text-lg md:text-xl text-center max-w-2xl mb-8">
            This is a description for the featured section. You can add more
            details here.
          </p>
          <button className="bg-yellow-800 text-white font-bold py-3 px-8 rounded hover:bg-yellow-700 transition">
            Learn More
          </button>
        </div>
      </section>

      <section id="audio" className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Audio/MP3</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Piano Sonata No. 1",
              description: "Ludwig van Beethoven",
              audioSrc: "/music/piano_track_1.mp3",
              image: "/album.png", // Placeholder image
            },
            {
              title: "Nocturne in E-flat Major",
              description: "Frédéric Chopin",
              audioSrc: "/music/piano_track_2.mp3",
              image: "/album.png",
            },
            {
              title: "Clair de Lune",
              description: "Claude Debussy",
              audioSrc: "/music/piano_track_3.mp3",
              image: "/album.png",
            },
            {
              title: "Gymnopédie No. 1",
              description: "Erik Satie",
              audioSrc: "/music/piano_track_4.mp3",
              image: "/album.png",
            },
            {
              title: "Prelude in C Major",
              description: "Johann Sebastian Bach",
              audioSrc: "/music/piano_track_5.mp3",
              image: "/album.png",
            },
            {
              title: "Rhapsody in Blue",
              description: "George Gershwin",
              audioSrc: "/music/piano_track_6.mp3",
              image: "/album.png",
            },
          ].map((track, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={track.image}
                alt={track.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {track.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {track.description}
                </p>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handlePlayPause(track.audioSrc)}
                    className="bg-yellow-800 text-white p-3 rounded-full hover:bg-yellow-700 transition"
                  >
                    {playingAudioSrc === track.audioSrc ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197 2.132A1 1 0 0110 13.82V10.18a1 1 0 011.555-.832l3.197 2.132a1 1 0 010 1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                  </button>
                  <div className="text-gray-500 text-sm">
                    {playingAudioSrc === track.audioSrc && duration > 0
                      ? `${formatTime(currentTime)} / ${formatTime(duration)}`
                      : ""}
                  </div>
                </div>
                {playingAudioSrc === track.audioSrc && duration > 0 && (
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                    <div
                      className="bg-yellow-800 h-1.5 rounded-full"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="/audio">
            <button className="bg-yellow-800 text-white font-bold py-3 px-8 rounded hover:bg-yellow-700 transition">
              View All
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
