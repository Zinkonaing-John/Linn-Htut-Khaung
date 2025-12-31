import React from "react";

const tourDates = [
  {
    day: "12",
    month: "October",
    venue: "Royal Albert Hall",
    location: "London, United Kingdom",
  },
  {
    day: "18",
    month: "October",
    venue: "Elbphilharmonie",
    location: "Hamburg, Germany",
  },
  {
    day: "05",
    month: "November",
    venue: "Walt Disney Concert Hall",
    location: "Los Angeles, USA",
  },
];

export default function TourDates() {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-24 bg-[#0a0a0a]" id="tour">
      <div className="mx-auto max-w-[1000px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 sm:mb-16 border-b border-white/10 pb-4 sm:pb-6 gap-4">
          <h2 className="text-white text-2xl sm:text-3xl font-light">Upcoming Tour</h2>
          <a
            className="text-text-muted text-xs uppercase tracking-widest hover:text-white transition"
            href="/events"
          >
            View all dates
          </a>
        </div>
        <div className="flex flex-col">
          {tourDates.map((event, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row items-center justify-between py-6 sm:py-8 border-b border-white/10 hover:border-white/30 transition duration-300 gap-4 sm:gap-6"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 md:gap-16 w-full text-center md:text-left">
                <div className="flex flex-col items-center md:items-start min-w-[80px] sm:min-w-[100px]">
                  <span className="text-white font-light text-2xl sm:text-3xl">
                    {event.day}
                  </span>
                  <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-bold">
                    {event.month}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white font-medium text-lg sm:text-xl">
                    {event.venue}
                  </h3>
                  <p className="text-text-muted text-xs sm:text-sm font-light">
                    {event.location}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:mt-6 md:mt-0 w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-white/20 text-white text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition duration-300">
                  Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
