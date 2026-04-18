import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Building } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — TrairX Technology",
  description: "Get in touch with TrairX Technology. We would love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">Contact</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
            <p className="mt-4 text-lg text-gray-400">
              Have a question, partnership inquiry, or just want to say hello? We would love to hear from you.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  lines: ["info@trairx.com"],
                  href: "mailto:info@trairx.com",
                },
                {
                  icon: MapPin,
                  title: "Headquarters",
                  lines: ["Harju maakond, Tallinn", "Kesklinna linnaosa", "Viru v\u00E4ljak 2, 10111", "Estonia"],
                  href: undefined,
                },
                {
                  icon: Building,
                  title: "Company",
                  lines: ["TrairX Technology O\u00DC", "EU Registered Entity"],
                  href: undefined,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                        <Icon size={18} className="text-blue-400" />
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                    {item.lines.map((line, i) =>
                      item.href ? (
                        <a key={i} href={item.href} className="block text-sm text-gray-400 hover:text-blue-400 transition-colors">
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="text-sm text-gray-400">{line}</p>
                      )
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
