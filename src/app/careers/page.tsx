import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — TrairX Technology",
  description: "Join TrairX Technology and help build the AI ecosystem for a safer world.",
};

const openings = [
  {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote / Tallinn",
    type: "Full-time",
    description: "Build and scale our AI-powered platforms using Next.js, Node.js, and PostgreSQL.",
  },
  {
    title: "AI / ML Engineer",
    department: "AI Research",
    location: "Remote / Tallinn",
    type: "Full-time",
    description: "Design and implement machine learning models for our product ecosystem.",
  },
  {
    title: "Product Designer (UI/UX)",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create beautiful, intuitive interfaces for our AI products.",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Tallinn",
    type: "Full-time",
    description: "Manage cloud infrastructure, CI/CD pipelines, and ensure 99.9% uptime.",
  },
];

const perks = [
  "Remote-first culture",
  "Competitive salary",
  "Flexible working hours",
  "Learning & development budget",
  "Latest hardware provided",
  "Team retreats in Estonia",
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="mx-auto max-w-5xl">
          {/* Hero */}
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">Careers</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Build the future of AI <span className="gradient-text">with us</span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-400">
              We are looking for passionate people who want to make a real impact.
              Join our team and help build AI infrastructure that serves humanity.
            </p>
          </div>

          {/* Perks */}
          <div className="mt-16 rounded-2xl border border-white/5 bg-white/[0.02] p-10">
            <h2 className="text-2xl font-bold">Why TrairX?</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-400" />
                  <span className="text-gray-300">{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold">Open Positions</h2>
            <p className="mt-3 text-gray-400">
              Don&apos;t see a role that fits? Send us your CV at{" "}
              <a href="mailto:careers@trairx.com" className="text-blue-400 hover:underline">
                careers@trairx.com
              </a>
            </p>

            <div className="mt-10 space-y-4">
              {openings.map((job) => (
                <a
                  key={job.title}
                  href={`mailto:careers@trairx.com?subject=Application: ${job.title}`}
                  className="group block rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold transition-colors group-hover:text-blue-400">
                        {job.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-400">{job.description}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={14} />
                          {job.department} &middot; {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors group-hover:text-white shrink-0">
                      Apply
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
