export default function Stats() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent p-12 sm:p-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              { value: "6+", label: "Live Products", sub: "AI-powered platforms" },
              { value: "30+", label: "Clients", sub: "Across industries" },
              { value: "5M+", label: "API Calls", sub: "Processed monthly" },
              { value: "99.9%", label: "Uptime", sub: "Guaranteed SLA" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-5xl font-bold tracking-tight gradient-text">
                  {s.value}
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  {s.label}
                </div>
                <div className="mt-1 text-sm text-gray-500">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
