import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BioPage() {
  return (
    <>
      <Header />
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        <img
          src="/hero.png"
          alt="Pianist"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center drop-shadow-lg">
            About Linn Htut Khaung
          </h1>
          <a
            href="#"
            className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-4 px-8 rounded transition text-lg shadow-lg"
          >
            DOWNLOAD PRESS MATERIALS
          </a>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="text-left space-y-6 text-lg leading-relaxed">
          <p>
            I am a pianist whose musical focus spans Contemporary, Worship, Pop,
            and Jazz music. I approach music not only as a technical discipline,
            but as a meaningful language that connects emotion, faith,
            education, and human experience.
          </p>
          <p>
            I am a graduate of Kosin University (고신대학교), where I earned a
            degree in Popular Music. Through my academic training, I developed a
            strong foundation in contemporary performance, ensemble
            collaboration, and live performance, while also gaining practical
            experience in jazz harmony, pop accompaniment, and worship music.
          </p>
          <p>
            Beyond performance, I actively seek to apply music in educational
            contexts, using it as a practical tool for learning, communication,
            and personal development. I am particularly committed to
            contributing, in my own way, to Myanmar society, believing that
            music can play a meaningful role in supporting community growth,
            education, and social well-being.
          </p>
          <p>
            My performances aim to bring peace, encouragement, and reflection to
            listeners. In worship settings, I value music as a form of prayer
            and praise, using the piano to help create a spiritually supportive
            atmosphere. I am experienced in solo performances, ensemble work,
            and church worship services, and I adapt my musical expression to
            suit each context.
          </p>
          <p>
            Currently, I continue to engage in performances, worship sessions,
            musical collaborations, and educational initiatives, with a vision
            to create music that carries artistic depth while making a positive
            impact on both individuals and society.
          </p>
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row h-[350px]">
        <div className="bg-yellow-700 flex-1 flex items-center justify-center">
          <div className="text-center px-6">
            <blockquote className="text-2xl md:text-4xl font-bold text-white mb-4">
              "Ferociously talented"
            </blockquote>
            <div className="text-lg md:text-2xl font-semibold text-white italic">
              – Steve Smith,
              <br />
              TimeOut New York
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/pianist1.png"
            alt="Linn Htut Khaung at the piano"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-16 text-left space-y-6 text-lg leading-relaxed"></section>
      <Footer />
    </>
  );
}
