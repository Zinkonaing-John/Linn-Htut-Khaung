import React from "react";
import Header from "../components/Header";

export default function VideosPage() {
  const videos = [
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
    // Add more videos here
  ];

  return (
    <>
      <Header />
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <img
          src="/hero.png"
          alt="Videos background"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
            All Videos
          </h1>
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
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
      </section>
    </>
  );
}
