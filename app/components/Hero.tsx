import React from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="/hero.png"
        alt="Pianist"
        className="w-full h-full object-cover"
      />
    </section>
  );
}
