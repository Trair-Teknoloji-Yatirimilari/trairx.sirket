const productLinks = [
  { label: "Zeha Academy", href: "https://zehaacademy.com" },
  { label: "Safely", href: "https://safely-global.com" },
  { label: "Checkly", href: "https://checkly.tech" },
  { label: "LingoChat", href: "https://lingo-chat.com" },
  { label: "Content Queen", href: "https://contentqueen.com.tr" },
  { label: "Scoorpe", href: "https://scoorpe.com" },
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Investors", href: "#investors" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030303] px-6 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                <span className="text-sm font-bold text-white">TX</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Trair<span className="text-blue-400">X</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Estonia-based AI technology company building human-centered
              artificial intelligence infrastructure.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-500 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-500 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} TrairX Technology O&Uuml;. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy-policy"
              className="text-sm text-gray-600 transition-colors hover:text-gray-400"
            >
              Privacy
            </a>
            <a
              href="/terms-of-service"
              className="text-sm text-gray-600 transition-colors hover:text-gray-400"
            >
              Terms
            </a>
            <a
              href="mailto:info@trairx.com"
              className="text-sm text-gray-600 transition-colors hover:text-gray-400"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
