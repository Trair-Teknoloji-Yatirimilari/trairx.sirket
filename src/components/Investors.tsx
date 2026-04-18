import { Building2, TrendingUp, Globe, Mail } from "lucide-react";

export default function Investors() {
  return (
    <section id="investors" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 bottom-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02]">
          <div className="grid md:grid-cols-2">
            {/* Left */}
            <div className="p-10 sm:p-14">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
                For Investors
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Join Our Journey
              </h2>
              <p className="mt-4 leading-relaxed text-gray-400">
                TrairX Technology O&Uuml; is building the next generation of AI
                infrastructure. We welcome strategic partnerships and investment
                inquiries from those who share our vision.
              </p>

              <a
                href="mailto:info@trairx.com?subject=Investment%20Inquiry"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gray-200"
              >
                <Mail size={16} />
                Contact for Investment
              </a>
            </div>

            {/* Right */}
            <div className="border-t border-white/5 p-10 sm:p-14 md:border-l md:border-t-0">
              <div className="grid grid-cols-1 gap-8">
                {[
                  {
                    icon: Building2,
                    label: "Entity",
                    value: "O\u00DC Estonia (EU)",
                  },
                  {
                    icon: TrendingUp,
                    label: "Target Round",
                    value: "Series A",
                  },
                  {
                    icon: Globe,
                    label: "Market Focus",
                    value: "Global — EU & Turkey",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                        <Icon size={18} className="text-gray-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">
                          {item.label}
                        </div>
                        <div className="font-semibold">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
