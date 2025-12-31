"use client";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-24 bg-surface-dark"
      id="contact"
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="flex flex-col md:flex-row gap-12 sm:gap-16 lg:gap-24">
          <div className="w-full md:w-5/12 flex flex-col gap-8 sm:gap-10">
            <div>
              <h2 className="text-white text-2xl sm:text-3xl font-light mb-4 sm:mb-6">
                Get in Touch
              </h2>
              <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed">
                For booking inquiries, press features, or collaborations, please
                fill out the form or reach out directly.
              </p>
            </div>
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="group">
                <h4 className="text-white text-sm sm:text-base font-medium mb-1">Management</h4>
                <a
                  className="text-text-muted text-sm sm:text-base group-hover:text-primary transition break-all"
                  href="mailto:mgmt@linnhtutkhaung.com"
                >
                  mgmt@linnhtutkhaung.com
                </a>
              </div>
              <div className="group">
                <h4 className="text-white text-sm sm:text-base font-medium mb-1">Press Relations</h4>
                <a
                  className="text-text-muted text-sm sm:text-base group-hover:text-primary transition break-all"
                  href="mailto:press@linnhtutkhaung.com"
                >
                  press@linnhtutkhaung.com
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <form className="flex flex-col gap-6 sm:gap-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="flex flex-col gap-2 relative">
                  <input
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white focus:ring-0 focus:border-primary placeholder-transparent peer transition-colors"
                    placeholder="Name"
                    type="text"
                  />
                  <label
                    className="absolute left-0 -top-3.5 text-xs text-text-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs"
                    htmlFor="name"
                  >
                    Name
                  </label>
                </div>
                <div className="flex flex-col gap-2 relative">
                  <input
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white focus:ring-0 focus:border-primary placeholder-transparent peer transition-colors"
                    placeholder="Email"
                    type="email"
                  />
                  <label
                    className="absolute left-0 -top-3.5 text-xs text-text-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs"
                    htmlFor="email"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2 relative">
                <input
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white focus:ring-0 focus:border-primary placeholder-transparent peer transition-colors"
                  placeholder="Subject"
                  type="text"
                />
                <label
                  className="absolute left-0 -top-3.5 text-xs text-text-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs"
                  htmlFor="subject"
                >
                  Subject
                </label>
              </div>
              <div className="flex flex-col gap-2 relative">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white focus:ring-0 focus:border-primary placeholder-transparent peer resize-none transition-colors"
                  placeholder="Message"
                  rows={3}
                />
                <label
                  className="absolute left-0 -top-3.5 text-xs text-text-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs"
                  htmlFor="message"
                >
                  Message
                </label>
              </div>
              <div className="mt-2 sm:mt-4">
                <button
                  className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-8 sm:px-10 bg-white text-black text-xs sm:text-sm uppercase tracking-widest font-bold hover:bg-primary hover:text-white transition-colors w-full sm:w-auto"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
