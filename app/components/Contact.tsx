import React from "react";

const Contact = () => (
  <section className="contact-section relative flex items-center min-h-[22rem] md:min-h-[28rem] w-full overflow-hidden">
    {/* Background image */}
    <img
      src="/contact.png"
      alt="Contact background"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
    {/* Sepia overlay */}
    <div className="absolute inset-0 bg-[#cbb89d]/80 mix-blend-multiply z-10" />
    {/* Content */}
    <div className="relative z-20 flex flex-col md:items-end items-center justify-center w-full max-w-6xl px-8 md:px-16 mx-auto">
      <form className="w-full max-w-lg md:text-right text-center">
        <div className="text-lg font-semibold text-white/90 mb-1 tracking-wide">
          FOR LATEST NEWS
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Join the Mailing List
        </h2>
        <label htmlFor="email" className="block text-lg text-white mb-2">
          Your Email Address
        </label>
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-stretch">
          <input
            id="email"
            type="email"
            required
            placeholder="Your Email Address"
            className="w-full md:w-96 px-4 py-3 rounded text-lg text-white border-2 border-white focus:ring-2 focus:ring-white-700 outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white font-semibold px-8 py-3 rounded text-lg hover:bg-yellow-900 transition"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default Contact;
