import React from "react";

const galleryImages = [
  {
    src: "/pianist1.png",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/pianist2.png",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/pianist1.png",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/pianist2.png",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/pianist1.png",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/pianist2.png",
    span: "col-span-2 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section
      className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-24 bg-background-dark"
      id="gallery"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-white text-2xl sm:text-3xl font-light mb-8 sm:mb-12 border-l-4 border-primary pl-3 sm:pl-4">
          Visual Diary
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className={`${image.span} relative group overflow-hidden`}
            >
              <div
                className="w-full h-full bg-cover bg-center transition duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url("${image.src}")` }}
              />
            </div>
          ))}
        </div>
        <div className="pt-8">
          <a
            className="inline-flex items-center gap-3 text-white border-b border-primary/50 pb-1 text-sm uppercase tracking-widest hover:text-primary hover:border-primary transition-all group"
            href="/photos"
          >
            GO TO GALLERY
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
