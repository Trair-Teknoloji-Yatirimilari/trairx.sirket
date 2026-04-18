"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#products", label: "Ecosystem" },
  { href: "/about", label: "About" },
  { href: "#technology", label: "Technology" },
  { href: "#investors", label: "Investors" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
            <span className="text-sm font-bold text-white">TX</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Trair<span className="text-blue-400">X</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://zehaacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-all hover:bg-gray-200"
          >
            Try Zeha AI
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-400"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-[#050505]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://zehaacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black"
            >
              Try Zeha AI
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
