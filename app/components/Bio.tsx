import React from "react";

const Bio = () => (
  <section id="bio" className="bio-section text-center py-16">
    <blockquote className="bio-quote text-4xl md:text-5xl font-bold mb-4">
      “The kind of musician who is shaping the future of classical music”
    </blockquote>
    <div className="bio-quote-author text-xl font-semibold text-yellow-800 mb-8">
      – New York Magazine
    </div>
    <div className="bio-divider mx-auto my-6 w-12 border-t-2 border-yellow-800"></div>
    <p className="bio-description max-w-2xl mx-auto text-lg mb-8">
      Linn Htut Khaung is a leader of the new generation of classical music. The
      pianist and composer has amassed a steady stream of awards and critical
      acclaim for his performances, compositions and recordings. A former
      prodigy, Conrad has emerged as a mature, thoughtful and thought-provoking
      artist with both a singular vision and the talent to realize it.
    </p>
    <a
      href="#bio"
      className="bio-button bg-yellow-800 text-white font-bold py-3 px-8 rounded hover:bg-yellow-700 transition inline-block"
    >
      READ FULL BIO
    </a>
  </section>
);

export default Bio;
