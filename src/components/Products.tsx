"use client";

import {
  Shield,
  MessageCircle,
  Brain,
  BarChart3,
  Crown,
  Globe,
  ExternalLink,
} from "lucide-react";

const products = [
  {
    name: "Zeha Academy",
    tagline: "AI Super Platform",
    description:
      "Next-generation conversational AI platform designed to understand, assist, and evolve with users. Turkey\u2019s national AI assistant for education and daily life.",
    icon: Brain,
    color: "from-red-500 to-orange-500",
    status: "Live",
    url: "https://zehaacademy.com",
  },
  {
    name: "Safely",
    tagline: "Safety Infrastructure",
    description:
      "AI-powered crisis coordination and safety management platform for institutions, universities, and smart cities. Real-time threat detection and response.",
    icon: Shield,
    color: "from-blue-500 to-cyan-500",
    status: "Live",
    url: "https://safely-global.com",
  },
  {
    name: "Checkly",
    tagline: "Social Intelligence Layer",
    description:
      "Smart social check-in network that connects people across languages and locations with AI-powered matching and community building.",
    icon: BarChart3,
    color: "from-green-500 to-emerald-500",
    status: "Live",
    url: "https://checkly.tech",
  },
  {
    name: "LingoChat",
    tagline: "AI Language Learning",
    description:
      "Conversational AI language learning platform that adapts to your level. Practice with AI tutors in real-time conversations across 30+ languages.",
    icon: MessageCircle,
    color: "from-yellow-500 to-amber-500",
    status: "Live",
    url: "https://lingo-chat.com",
  },
  {
    name: "Content Queen",
    tagline: "AI Content Management",
    description:
      "Intelligent content creation and management platform powered by AI. Automate your content workflow from ideation to publication.",
    icon: Crown,
    color: "from-pink-500 to-rose-500",
    status: "Live",
    url: "https://contentqueen.com.tr",
  },
  {
    name: "Scoorpe",
    tagline: "Smart Analytics",
    description:
      "AI-driven analytics and scoring platform that transforms raw data into actionable insights for businesses and organizations.",
    icon: Globe,
    color: "from-purple-500 to-violet-500",
    status: "Live",
    url: "https://scoorpe.com",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-32 px-6">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-20 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            Ecosystem
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A unified suite of AI-powered products designed to work together,
            creating intelligent infrastructure for modern challenges.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-20`}
                />

                <div className="relative z-10">
                  {/* Icon + Status */}
                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} shadow-lg`}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      {p.status}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-500">
                    {p.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-400">
                    {p.description}
                  </p>

                  {/* Link */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors group-hover:text-white">
                    Visit Product
                    <ExternalLink
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
