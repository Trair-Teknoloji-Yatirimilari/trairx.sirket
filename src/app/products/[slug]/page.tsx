import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, getProduct } from "@/lib/products";
import { ArrowRight, ExternalLink, Check } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — TrairX Technology`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const otherProducts = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </div>

          {/* Hero */}
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-10 sm:p-16">
            <div className={`absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br ${product.color} opacity-10 blur-[80px]`} />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Live
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">{product.name}</h1>
              <p className="mt-2 text-xl text-gray-400">{product.tagline}</p>
              <p className="mt-6 text-lg text-gray-300">{product.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gray-200"
                >
                  Visit {product.name}
                  <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:border-white/20 hover:bg-white/5"
                >
                  View Features
                </Link>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-16 space-y-6">
            {product.longDescription.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-gray-400">{p}</p>
            ))}
          </div>

          {/* Features */}
          <div id="features" className="mt-16">
            <h2 className="text-2xl font-bold">Key Features</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.features.map((f) => (
                <div key={f} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-5">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${product.color}`}>
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-white/5 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent p-10 text-center">
            <h2 className="text-2xl font-bold">Ready to get started?</h2>
            <p className="mt-3 text-gray-400">Experience {product.name} today and see the difference AI can make.</p>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-gray-200"
            >
              Try {product.name}
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Other Products */}
          <div className="mt-24">
            <h2 className="text-2xl font-bold">Other Products</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {otherProducts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <h3 className="font-semibold group-hover:text-blue-400 transition-colors">{p.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{p.tagline}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm text-gray-500 group-hover:text-white transition-colors">
                    Learn more <ArrowRight size={14} />
                  </div>
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
