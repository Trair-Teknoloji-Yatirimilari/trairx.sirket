import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Lightbulb, Users, Award, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — TrairX Technology",
  description: "Learn about TrairX Technology OÜ, an Estonia-based AI company building human-centered technology.",
};

const values = [
  { icon: Target, title: "Innovation First", text: "We push boundaries in AI research and development, constantly exploring new ways to solve real-world problems." },
  { icon: Users, title: "Human-Centered", text: "Every product we build starts with people. Technology should empower, not complicate." },
  { icon: Award, title: "Excellence", text: "We hold ourselves to the highest standards in code quality, security, and user experience." },
  { icon: Globe, title: "Global Impact", text: "From Estonia to the world — our solutions serve communities across borders and cultures." },
];

const timeline = [
  { year: "2024", title: "Founded in Estonia", text: "TrairX Technology OÜ established in Tallinn as an EU-based AI company." },
  { year: "2024", title: "First Products Launch", text: "Safely and Checkly launched as our first AI-powered platforms." },
  { year: "2025", title: "Ecosystem Expansion", text: "LingoChat, Content Queen, and Scoorpe joined the product ecosystem." },
  { year: "2025", title: "Zeha Academy", text: "Our flagship AI assistant platform launched, serving thousands of users." },
  { year: "2026", title: "Scaling Up", text: "30+ clients served, 6+ live products, expanding into new markets." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">About Us</p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              We build AI that <span className="gradient-text">serves humanity</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-400">
              TrairX Technology OÜ is an Estonia-based technology company focused on developing
              artificial intelligence systems that prioritize human safety, connection, and well-being.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="mt-24 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                <Eye size={22} className="text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-gray-400">
                A world where AI-powered systems seamlessly protect communities, enhance education,
                and enable businesses to thrive in the digital economy. We envision technology as a
                bridge between people, not a barrier.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                <Lightbulb size={22} className="text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-gray-400">
                To build AI infrastructure that makes the world safer, more connected, and more
                intelligent. We take an ecosystem approach, ensuring each product contributes to a
                larger vision of interconnected infrastructure serving communities worldwide.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/10">
                      <Icon size={20} className="text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">{v.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold">Our Journey</h2>
            <div className="mt-10 space-y-0">
              {timeline.map((t, i) => (
                <div key={i} className="relative flex gap-8 pb-12 last:pb-0">
                  {/* Line */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10">
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                    </div>
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-white/10" />}
                  </div>
                  {/* Content */}
                  <div className="pb-4">
                    <span className="text-sm font-medium text-blue-400">{t.year}</span>
                    <h3 className="mt-1 text-lg font-semibold">{t.title}</h3>
                    <p className="mt-2 text-sm text-gray-400">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Info */}
          <div className="mt-24 rounded-2xl border border-white/5 bg-white/[0.02] p-10">
            <h2 className="text-2xl font-bold">Company Information</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "Legal Name", value: "TrairX Technology OÜ" },
                { label: "Founded", value: "2024" },
                { label: "Headquarters", value: "Tallinn, Estonia" },
                { label: "Entity Type", value: "OÜ (EU Limited)" },
                { label: "Compliance", value: "GDPR Compliant" },
                { label: "Products", value: "6+ Live Platforms" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-sm text-gray-500">{item.label}</div>
                  <div className="mt-1 text-lg font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-sm text-gray-500">Registered Address</p>
              <p className="mt-1 text-gray-300">Harju maakond, Tallinn, Kesklinna linnaosa, Viru v&auml;ljak 2, 10111, Estonia</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
