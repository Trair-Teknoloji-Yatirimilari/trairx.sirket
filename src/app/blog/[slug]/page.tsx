import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts, getPost, formatDate } from "@/lib/blog";
import { ArrowLeft, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — TrairX Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="mx-auto max-w-3xl">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white mb-10"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-0.5 text-xs font-medium text-blue-400">
              {post.category}
            </span>
            <span className="text-gray-500">{formatDate(post.date)}</span>
            <span className="flex items-center gap-1 text-gray-500">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-lg text-gray-400">{post.excerpt}</p>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-bold">
              TX
            </div>
            <div>
              <div className="text-sm font-medium">{post.author}</div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-12 space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-gray-300">{paragraph}</p>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-16 border-t border-white/5 pt-12">
            <h3 className="text-xl font-bold">More from the blog</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <span className="text-xs text-gray-500">{formatDate(p.date)}</span>
                  <h4 className="mt-2 font-semibold transition-colors group-hover:text-blue-400">{p.title}</h4>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
