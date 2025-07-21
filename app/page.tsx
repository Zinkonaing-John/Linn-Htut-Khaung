import React from "react";
import Video from "./components/Video";
import Photo from "./components/Photo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Album from "./components/Album";
import Event from "./components/Event";
import Quote from "./components/Quote";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Bio />
      <Album />
      <Event />
      <Quote />
      <Video />
      <Photo />
      <Contact />
      <Footer />
    </>
  );
}
