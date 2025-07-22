import React from "react";
import Header from "../components/Header";

export default function PhotosPage() {
  const photos = [
    "/pianist1.png",
    "/pianist2.png",
    "/pianist3.png",
    "/pianist1.png",
    "/pianist2.png",
    "/pianist3.png",
    // Add more photos here
  ];

  return (
    <>
      <Header />
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <img
          src="/hero.png"
          alt="Photos background"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
            All Photos
          </h1>
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, idx) => (
            <img
              key={idx}
              src={photo}
              alt={`Photo ${idx + 1}`}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </section>
    </>
  );
}
