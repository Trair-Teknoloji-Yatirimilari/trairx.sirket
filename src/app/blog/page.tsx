import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts, formatDate } from "@/lib/blog";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — TrairX Technology",
  description: "Insights, updates, and stories from the TrairX Technology team.",
};

const categoryColors: Record<string, string> = {
  Company: "text-blue-400 border-blue-500/20 bg-blue-500/10",
  Technology: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
  Product: "text-green-400 border-green-500/20 bg-green-500/10",
  Security: "text-purple-400 border-purple-500/20 bg-purple-500/10",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">Blog</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Insights &amp; Updates</h1>
            <p className="mt-4 text-lg text-gray-400">
              Stories, technical deep-dives, and updates from the TrairX team.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className={`rounded-full border px-3 py-0.5 text-xs font-medium ${categoryColors[post.category] || "text-gray-400 border-white/10 bg-white/5"}`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500">{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1 text-gray-500">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-bold transition-colors group-hover:text-blue-400">
                  {post.title}
                </h2>
                <p className="mt-3 text-gray-400 leading-relaxed">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors group-hover:text-white">
                  Read article
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
