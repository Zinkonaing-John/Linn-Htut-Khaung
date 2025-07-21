import React from "react";

const Album = () => (
  <section
    id="album"
    className="album-section flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#f8f6f2] to-[#d2a97e] p-12 rounded-lg my-12"
  >
    <div className="album-info max-w-xl md:mr-12 text-left">
      <div className="album-latest text-sm font-semibold tracking-widest mb-2">
        LATEST ALBUM
      </div>
      <h2 className="album-title text-3xl md:text-4xl font-bold mb-2">
        Bricolage (w/ The Westerlies)
      </h2>
      <div className="album-date text-base mb-4">May 21, 2021</div>
      <p className="album-description text-lg mb-6">
        A series of collective improvisations combining pianist/composer Tao’s
        multifaceted musical sensibility with the ensemble cohesion of brass
        quartet The Westerlies
      </p>
      <a
        href="#album"
        className="album-button bg-yellow-800 text-white font-bold py-3 px-8 rounded hover:bg-yellow-700 transition inline-block"
      >
        SEE ALBUM DETAILS
      </a>
    </div>
    <div className="album-image-container mt-8 md:mt-0">
      <img
        src="/album.png"
        alt="Bricolage Album Cover"
        className="album-image w-80 h-80 object-cover rounded shadow-lg"
      />
    </div>
  </section>
);

export default Album;
