import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const events = [
  {
    date: "August 30, 2025",
    title: "Stresa Festival | In Recital",
    location: "Stresa, Italy",
    tickets: "#",
  },
  {
    date: "September 10, 2025",
    title: "Nova Linea Musica: Echoes and Algorithms",
    location: "Chicago, IL",
    tickets: "#",
  },
  {
    date: "September 26-27, 2025",
    title: "Konzerthausorchester Berlin",
    location: "Berlin, Germany",
    tickets: "#",
  },
  {
    date: "October 17, 2025",
    title: "San Francisco Performances | In Recital",
    location: "San Francisco, CA",
    tickets: "#",
  },
  {
    date: "October 24, 2025",
    title: "Duke University | In Recital",
    location: "Durham, NC",
    tickets: "#",
  },
];

export default function SchedulePage() {
  return (
    <>
      <Header />
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        <img
          src="/pianist2.png"
          alt="Concert stage"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
            Schedule
          </h1>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Upcoming Performances
        </h2>
        <div className="divide-y divide-yellow-900/30 border-t border-b border-yellow-900/30">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row items-center justify-between py-6 md:py-8 gap-4 md:gap-0 transition-colors duration-200 hover:bg-black hover:text-white"
            >
              <div className="md:w-1/4 text-xl md:text-2xl font-semibold text-center md:text-left group-hover:text-white px-4 md:px-8">
                {event.date}
              </div>
              <div className="md:w-2/4 text-lg md:text-xl font-medium text-center group-hover:text-white px-4 md:px-8">
                {event.title}
                <div className="text-base text-gray-500 mt-1 group-hover:text-white">
                  {event.location}
                </div>
              </div>
              <div className="md:w-1/4 flex justify-center md:justify-end px-4 md:px-8">
                <a
                  href={event.tickets}
                  className="flex items-center font-bold text-yellow-900 group-hover:text-white hover:text-yellow-700 transition text-lg group"
                >
                  TICKETS
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
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
