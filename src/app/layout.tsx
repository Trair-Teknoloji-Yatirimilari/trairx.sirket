import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-XXXXXXXXXX"; // TODO: Replace with actual GA4 measurement ID

export const metadata: Metadata = {
  title: "TrairX Technology — Building the AI Ecosystem",
  description:
    "Estonia-based AI technology company developing human-centered artificial intelligence infrastructure for safety, community, and smart city applications.",
  keywords: ["TrairX", "AI", "Technology", "Estonia", "Safely", "Checkly", "Zeha", "LingoChat"],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "TrairX Technology — Building the AI Ecosystem",
    description:
      "Estonia-based AI technology company developing human-centered AI infrastructure.",
    url: "https://www.trairx.com",
    siteName: "TrairX Technology",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "TrairX Technology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrairX Technology",
    description: "Building the AI Ecosystem for a Safer World",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </head>
      <body className="bg-[#050505] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
