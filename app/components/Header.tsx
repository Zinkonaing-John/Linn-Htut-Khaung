"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-background-dark/80 backdrop-blur-xl transition-all duration-300 border-b border-white/5">
      <div className="px-4 sm:px-5 md:px-10 lg:px-20 flex justify-center">
        <div className="flex w-full max-w-[1200px] items-center justify-between py-4 sm:py-5">
          <Link
            href="/"
            className="flex items-center gap-3 text-white hover:text-primary transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-base sm:text-lg md:text-xl font-bold tracking-widest uppercase">
              Linn Htut Khaung
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <nav className="flex items-center gap-4 lg:gap-8">
              <a
                className="text-xs uppercase tracking-widest font-medium text-text-muted hover:text-white transition-colors"
                href="#bio"
              >
                Bio
              </a>
              <a
                className="text-xs uppercase tracking-widest font-medium text-text-muted hover:text-white transition-colors"
                href="#music"
              >
                Music
              </a>
              <a
                className="text-xs uppercase tracking-widest font-medium text-text-muted hover:text-white transition-colors"
                href="#tour"
              >
                Tour
              </a>
              <a
                className="text-xs uppercase tracking-widest font-medium text-text-muted hover:text-white transition-colors"
                href="#gallery"
              >
                Gallery
              </a>
              <a
                className="text-xs uppercase tracking-widest font-medium text-text-muted hover:text-white transition-colors"
                href="/videos"
              >
                Videos
              </a>
            </nav>
            <a
              className="hidden lg:inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-2 text-xs uppercase tracking-widest font-bold text-white transition hover:bg-white hover:text-black hover:border-white"
              href="#contact"
            >
              Contact
            </a>
          </div>
          <button
            className="md:hidden text-white hover:text-primary transition p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-background-dark/95 backdrop-blur-xl z-40 border-t border-white/5">
          <nav className="flex flex-col px-6 py-8 gap-6">
            <a
              className="text-sm uppercase tracking-widest font-medium text-text-muted hover:text-white transition-colors py-2"
              href="#bio"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bio
            </a>
            <a
              className="text-sm uppercase tracking-widest font-medium text-text-muted hover:text-white transition-colors py-2"
              href="#music"
              onClick={() => setMobileMenuOpen(false)}
            >
              Music
            </a>
            <a
              className="text-sm uppercase tracking-widest font-medium text-text-muted hover:text-white transition-colors py-2"
              href="#tour"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tour
            </a>
            <a
              className="text-sm uppercase tracking-widest font-medium text-text-muted hover:text-white transition-colors py-2"
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              className="text-sm uppercase tracking-widest font-medium text-text-muted hover:text-white transition-colors py-2"
              href="/videos"
              onClick={() => setMobileMenuOpen(false)}
            >
              Videos
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-xs uppercase tracking-widest font-bold text-white transition hover:bg-white hover:text-black hover:border-white mt-4"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
