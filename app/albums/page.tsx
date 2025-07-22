import React from "react";
import Header from "../components/Header";
import Album from "../components/Album";
import Footer from "../components/Footer";

export default function AlbumPage() {
  const albums = [
    {
      title: "Bricolage (w/ The Westerlies)",
      date: "May 21, 2021",
      image: "/album.png",
      link: "#",
    },
    {
      title: "Trapani/Ives/Dvořák (w/ Junction Trio)",
      date: "June 5, 2020",
      image: "/album.png",
      link: "#",
    },
    {
      title: "Echoes of the East",
      date: "March 10, 2019",
      image: "/album.png",
      link: "#",
    },
    {
      title: "Refractions",
      date: "September 15, 2018",
      image: "/album.png",
      link: "#",
    },
    {
      title: "Voices Unbound",
      date: "July 2, 2017",
      image: "/album.png",
      link: "#",
    },
    {
      title: "Fragments",
      date: "January 20, 2016",
      image: "/album.png",
      link: "#",
    },
  ];
  return (
    <>
      <Header />
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <img
          src="/album.png"
          alt="Album background"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
            Albums
          </h1>
        </div>
      </section>
      <Album />
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">All Albums</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {albums.map((album, idx) => (
            <div
              key={idx}
              className="relative rounded-lg overflow-hidden shadow-lg group"
            >
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-[540px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <div className="text-sm mb-2">{album.date}</div>
                <div className="text-xl font-semibold mb-4">{album.title}</div>
                <a
                  href={album.link}
                  className="inline-flex items-center font-bold tracking-wide hover:text-yellow-400 transition"
                >
                  READ MORE
                  <span className="ml-2 text-yellow-400 text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
