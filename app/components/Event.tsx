import React from "react";

const events = [
  {
    date: "August 30, 2025",
    title: "Stresa Festival | In Recital",
    location: "Stresa, Italy",
    link: "#",
  },
  {
    date: "September 10, 2025",
    title: "Nova Linea Musica: Echoes and Algorithms",
    location: "Chicago, IL",
    link: "#",
  },
  {
    date: "September 26-27, 2025",
    title: "Konzerthausorchester Berlin",
    location: "Berlin, Germany",
    link: "#",
  },
];

const Event = () => (
  <section
    id="events"
    className="event-schedule-section max-w-5xl mx-auto my-16"
  >
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl md:text-4xl font-bold">Upcoming Schedule</h2>
      <a
        href="#events"
        className="see-all-btn bg-black text-white font-semibold px-6 py-2 inline-block"
      >
        SEE ALL
      </a>
    </div>
    <div className="divide-y divide-yellow-900/30 border-t border-b border-yellow-900/30">
      {events.map((event, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center justify-between py-6"
        >
          <div className="w-full md:w-1/4 text-xl font-semibold mb-2 md:mb-0 text-center md:text-left">
            {event.date}
          </div>
          <div className="w-full md:w-1/2 text-lg font-semibold text-center md:text-left">
            {event.title}
            <div className="text-base font-normal text-gray-600">
              {event.location}
            </div>
          </div>
          <div className="w-full md:w-1/4 flex justify-center md:justify-end mt-2 md:mt-0">
            <a
              href={event.link}
              className="read-more-link font-bold flex items-center gap-2"
            >
              READ MORE <span className="text-2xl">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Event;
