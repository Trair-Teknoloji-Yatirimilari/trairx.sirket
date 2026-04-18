import { Target, Eye, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            About Us
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Pioneering AI Infrastructure
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            TrairX Technology O&Uuml; is an Estonia-based technology company
            focused on developing artificial intelligence systems that
            prioritize human safety, connection, and well-being.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To build AI infrastructure that makes the world safer, more connected, and more intelligent. We believe technology should serve humanity, not the other way around.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "A world where AI-powered systems seamlessly protect communities, enhance education, and enable businesses to thrive in the digital economy.",
            },
            {
              icon: Lightbulb,
              title: "Our Approach",
              text: "We take an ecosystem approach, ensuring each product contributes to a larger vision of intelligent, interconnected infrastructure serving communities worldwide.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-8"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/10">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Company info */}
        <div className="mt-16 rounded-2xl border border-white/5 bg-white/[0.02] p-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">TrairX Technology O&Uuml;</h3>
              <p className="mt-4 leading-relaxed text-gray-400">
                Headquartered in Tallinn, Estonia, we operate at the
                intersection of artificial intelligence and real-world
                applications. Our team of engineers, researchers, and product
                designers work together to create technology that makes a
                meaningful difference in people&apos;s lives.
              </p>
              <p className="mt-4 leading-relaxed text-gray-400">
                As an EU-based company, we are fully GDPR compliant and
                committed to the highest standards of data privacy and security.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Founded", value: "2024" },
                { label: "Headquarters", value: "Tallinn, Estonia" },
                { label: "Team Size", value: "Growing" },
                { label: "Products", value: "6+ Live" },
                { label: "Compliance", value: "GDPR" },
                { label: "Infrastructure", value: "EU Cloud" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-sm text-gray-500">{item.label}</div>
                  <div className="mt-1 font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
