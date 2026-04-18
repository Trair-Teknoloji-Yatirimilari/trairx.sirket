"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute left-0 top-1/2 h-[300px] w-[300px] -translate-x-1/4 rounded-full bg-cyan-500/5 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-blue-400" />
          Estonia-based AI Technology Company
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Building the AI Ecosystem
          <br />
          <span className="gradient-text">for a Safer World</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl"
        >
          We develop human-centered artificial intelligence infrastructure
          for safety, community, and smart city applications.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="https://zehaacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-gray-200 hover:shadow-lg hover:shadow-white/10"
          >
            Experience Zeha AI
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#products"
            className="flex items-center gap-2 rounded-full border border-white/10 px-8 py-3.5 text-sm font-medium text-gray-300 transition-all hover:border-white/20 hover:bg-white/5"
          >
            Explore Ecosystem
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {[
            { value: "6+", label: "AI Products" },
            { value: "30+", label: "Clients Served" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "AI Systems" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/40" />
        </div>
      </motion.div>
    </section>
  );
}
