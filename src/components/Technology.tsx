import { Cpu, Cloud, Lock, Layers, Zap, Database } from "lucide-react";

const techs = [
  {
    icon: Cpu,
    title: "AI Architecture",
    description:
      "Advanced neural networks and large language models optimized for human-centered interactions and real-time processing.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Scalable, distributed systems built on enterprise-grade cloud platforms with 99.9% uptime guarantee.",
  },
  {
    icon: Lock,
    title: "Data Security & GDPR",
    description:
      "End-to-end encryption with full GDPR compliance, data sovereignty options, and enterprise-grade security protocols.",
  },
  {
    icon: Layers,
    title: "Microservices",
    description:
      "Modular architecture designed to scale from thousands to millions of users with independent deployment cycles.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description:
      "Sub-second response times powered by edge computing and optimized inference pipelines for instant AI interactions.",
  },
  {
    icon: Database,
    title: "Data Pipeline",
    description:
      "Robust data ingestion and processing pipelines that handle millions of events per second with guaranteed delivery.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            Technology
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Enterprise-grade Infrastructure
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Built for scale, security, and reliability. Our technology stack
            powers millions of AI interactions every day.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techs.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
                  <Icon
                    size={20}
                    className="text-gray-400 transition-colors group-hover:text-blue-400"
                  />
                </div>
                <h3 className="text-lg font-semibold">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {t.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
