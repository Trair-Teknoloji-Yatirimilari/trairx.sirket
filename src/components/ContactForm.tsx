"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@trairx.com", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success === "true" || data.success === true || res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Form error:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/5 p-12 text-center">
        <CheckCircle size={48} className="text-green-400 mb-4" />
        <h3 className="text-xl font-semibold">Message Sent!</h3>
        <p className="mt-2 text-gray-400">
          Thank you for reaching out. We will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-gray-500 hover:text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/5 p-12 text-center">
        <AlertCircle size={48} className="text-red-400 mb-4" />
        <h3 className="text-xl font-semibold">Something went wrong</h3>
        <p className="mt-2 text-gray-400">
          Please try again or email us directly at{" "}
          <a href="mailto:info@trairx.com" className="text-blue-400 hover:underline">info@trairx.com</a>
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-gray-500 hover:text-white transition-colors"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* FormSubmit config */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_subject" value="New message from trairx.com" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.07]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.07]"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+90 5XX XXX XX XX"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.07]"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="How can we help?"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.07]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project or inquiry..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.07] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-gray-200 disabled:opacity-50"
      >
        <Send size={16} />
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
