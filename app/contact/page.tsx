import React from "react";
import Header from "../components/Header";

export default function ContactPage() {
  return (
    <>
      <Header />
      <section className="relative h-[60vh] w-full flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-10 bg-black/60" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
            Contact
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-4 text-black bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Email:</strong> info@example.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
              <p>
                <strong>Address:</strong> 123 Music Lane, Harmony City, MC 98765
              </p>
              <p>
                <strong>Business Hours:</strong> Mon-Fri: 9 AM - 5 PM
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Social Media Icons - Placeholder */}
                <a href="#" className="text-gray-700 hover:text-black">
                  Facebook
                </a>
                <a href="#" className="text-gray-700 hover:text-black">
                  Instagram
                </a>
                <a href="#" className="text-gray-700 hover:text-black">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
