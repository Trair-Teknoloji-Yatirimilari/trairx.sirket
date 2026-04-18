import { Mail, MapPin, Building } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            Contact
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
            Interested in our technology or partnership opportunities? We would
            love to hear from you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: Mail,
              title: "Email",
              value: "info@trairx.com",
              href: "mailto:info@trairx.com",
            },
            {
              icon: MapPin,
              title: "Headquarters",
              value: "Harju maakond, Tallinn, Kesklinna linnaosa, Viru v\u00E4ljak 2, 10111, Estonia",
              href: undefined,
            },
            {
              icon: Building,
              title: "Company",
              value: "TrairX Technology O\u00DC",
              href: undefined,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 block text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm text-gray-400">{item.value}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
