import React from "react";

export default function Biography() {
  return (
    <section
      className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-24 lg:py-32 bg-background-dark relative"
      id="bio"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8 leading-tight">
              A Modern Approach to <br className="hidden sm:block" />
              <span className="text-primary font-serif italic">
                Classical Tradition
              </span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Linn Htut Khaung is a classically trained pianist who blends
                modern minimalism with emotive cinematic soundscapes. His work
                transcends genre, inviting listeners into a world of
                introspection and calm.
              </p>
              <p>
                Born in Myanmar and currently based internationally, Linn draws
                inspiration from the architecture of cities and the silence of
                nature. His latest works explore the relationship between
                acoustic resonance and electronic texture, creating a dialogue
                between the instrument and the space it inhabits.
              </p>
              <p>
                His unique touch and sensitivity to tone have garnered critical
                acclaim, positioning him at the forefront of the neo-classical
                movement.
              </p>
            </div>
            <div className="pt-8">
              <a
                className="inline-flex items-center gap-3 text-white border-b border-primary/50 pb-1 text-sm uppercase tracking-widest hover:text-primary hover:border-primary transition-all group"
                href="/Bio"
              >
                Full Biography
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative overflow-hidden aspect-[4/5] bg-surface-dark">
              <div
                className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                style={{ backgroundImage: 'url("/pianist1.png")' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
