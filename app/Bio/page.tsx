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
        <blockquote className="text-3xl md:text-5xl font-bold mb-4">
          "Tao’s ability to get around a keyboard — with either nimble agility
          or pounding intensity as required — is something to marvel over."
        </blockquote>
        <div className="text-xl font-semibold text-yellow-700 mb-10">
          – Joshua Kosman, San Francisco Chronicle
        </div>
        <div className="text-left space-y-6 text-lg leading-relaxed">
          <p>
            Linn Htut Khaung is a pianist and composer whose work has been
            described as bold, imaginative, and deeply expressive. Praised for
            his emotionally rich performances and genre-defying artistry, he is
            quickly emerging as a defining voice of a new generation of
            classical musicians.
          </p>
          <p>
            Linn’s 2024/25 season features a wide array of solo, orchestral, and
            collaborative appearances, showcasing both traditional repertoire
            and original works. He returns to major concert stages performing
            landmark compositions such as Rachmaninov’s Piano Concerto No. 3 and
            Beethoven’s Sonata cycle, while also premiering his latest
            compositions, which blend classical, electronic, and Southeast Asian
            folk traditions. Linn also embarks on an international tour with
            contemporary dancers, continuing his ongoing exploration of music
            and movement in live performance.
          </p>
          <p>
            Recent highlights include his debut with the [insert orchestra
            name], a multimedia recital series in Seoul and Singapore, and the
            world premiere of his orchestral suite Echoes from the Irrawaddy,
            commissioned by the [insert festival or orchestra name]. He also led
            educational workshops and masterclasses as part of a cultural
            exchange initiative between Southeast Asia and Europe, aimed at
            nurturing young talent through composition and improvisation.
          </p>
          <p>
            As a composer, Linn Htut Khaung’s works have been performed by
            ensembles and soloists across Asia, Europe, and North America. His
            music often reflects themes of identity, memory, and migration,
            fusing traditional Burmese elements with contemporary harmonic
            language. His acclaimed piano suite Refractions was recently
            recorded for [insert label], earning praise for its "haunting
            lyricism and technical daring."
          </p>
          <p>
            Linn has collaborated with artists across disciplines—from dancers
            and filmmakers to poets and jazz musicians—continually expanding the
            boundaries of classical performance. He is also deeply committed to
            arts education, founding outreach programs that bring music to
            underserved communities in Myanmar and beyond.
          </p>
          <p>
            A recipient of the [insert award, e.g. “ASEAN Young Artist Prize” or
            other], Linn Htut Khaung has studied piano with [insert teachers]
            and composition with [insert mentors]. He continues to challenge
            conventional forms and inspire audiences worldwide through his
            dynamic, genre-spanning musical voice.
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
      <section className="max-w-3xl mx-auto px-4 py-16 text-left space-y-6 text-lg leading-relaxed">
        <p>
          In the 2019–2020 season, Linn Htut Khaung was presented in recital at
          major venues across Asia and North America, performing an eclectic
          program featuring works by Frédéric Chopin, Toru Takemitsu, Claude
          Debussy, Julia Wolfe, and his own original compositions. He also made
          his recital debut at the Esplanade in Singapore, with a program
          exploring themes of cultural identity and improvisation, including
          music by Bartók, John Adams, and Burmese folk arrangements. Following
          a standout performance at the Seoul Arts Center, Linn was invited to
          collaborate with the Seoul Philharmonic in a special program
          celebrating cross-cultural dialogue, featuring music by Tan Dun,
          Ravel, and live improvisation alongside a traditional saung-gauk
          (Burmese harp) player.
        </p>
        <p>
          Additional highlights of recent seasons include his debut with the
          Myanmar National Symphony, performing his orchestral work Between
          Rivers, and his role as soloist and composer in Resonant Bodies, a
          multimedia performance premiered at the Asian Composers League
          Festival. In Europe, he was featured by the Swedish Chamber Orchestra
          performing his chamber piece Fragments of Silence, and he also
          returned to Italy for a collaboration with the Orchestra della Toscana
          under conductor Daniele Rustioni. His compositions The Floating City
          and Ashes to Light were recently performed by ensembles in Tokyo and
          Toronto, respectively.
        </p>
        <p>
          As a recording artist, Linn Htut Khaung’s debut album Echoes of the
          East was praised for its “sensitive lyricism and bold experimentation”
          (Classical Voice Asia). His second album, Refractions, a mix of solo
          piano works and ambient soundscapes, was hailed by international
          critics for its “evocative textures and visionary programming.” In
          2023, he released Voices Unbound, featuring works by Southeast Asian
          composers alongside his own pieces, further cementing his reputation
          as an advocate for underrepresented musical voices.
        </p>
        <p>
          Linn was born in Yangon, Myanmar in 1994. He studied piano with
          [insert teacher name] and composition with [insert mentor name], and
          continues to develop a multifaceted career that bridges continents,
          genres, and artistic disciplines.
        </p>
      </section>
      <Footer />
    </>
  );
}
