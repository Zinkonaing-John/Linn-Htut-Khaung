import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LatestRelease from "./components/LatestRelease";
import Biography from "./components/Biography";
import Video from "./components/Video";
import TourDates from "./components/TourDates";
import VideoQuote from "./components/VideoQuote";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-14 sm:pt-16">
        <Hero />
        <LatestRelease />
        <Biography />
        <Video />
        <TourDates />
        <VideoQuote />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
}
