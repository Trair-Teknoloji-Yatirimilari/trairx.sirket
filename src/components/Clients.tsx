"use client";

const clients = [
  "Basturk Holding",
  "Samsung",
  "Tuncer Holding",
  "Petrolyum",
  "Inkadent",
  "Binlerce Marka",
  "Prava",
  "Biletico",
  "Turkis Enerji",
  "Arvina Trade",
  "Tez Assistance",
  "Anne Ekspres",
  "Kargo 29",
  "Biarsa",
  "payApara",
  "Avm Bebek",
  "Misafir Ol",
  "Teknokent Balikesir",
];

export default function Clients() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            Trusted By
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Companies We Work With
          </h2>
        </div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#050505] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#050505] to-transparent" />

          <div className="flex animate-[scroll_40s_linear_infinite] gap-8">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-20 min-w-[180px] items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] px-6"
              >
                <span className="whitespace-nowrap text-sm font-medium text-gray-500">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
