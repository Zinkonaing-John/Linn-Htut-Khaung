import React from "react";

const photos = ["/pianist1.png", "/pianist2.png", "/pianist3.png"];

const Photo = () => (
  <section className="photo-section max-w-6xl mx-auto my-16 px-4">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl md:text-4xl font-bold">Photos</h2>
      <a
        href="#media"
        className="bg-black text-white font-semibold px-6 py-2 rounded-sm text-lg"
      >
        SEE ALL
      </a>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {photos.map((src, idx) => (
        <div
          key={idx}
          className="w-full aspect-square overflow-hidden rounded-lg bg-gray-100"
        >
          <img
            src={src}
            alt={`Photo ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Photo;
