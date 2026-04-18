import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — TrairX Technology",
  description: "TrairX Technology OÜ Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-gray-400">Last updated: April 18, 2026</p>

          <div className="mt-12 space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                TrairX Technology O&Uuml; (&quot;TrairX&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="mt-3">
                We are headquartered in Tallinn, Estonia, and operate in compliance with the European Union General Data Protection Regulation (GDPR) and other applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li><strong className="text-white">Personal Information:</strong> Name, email address, phone number, and other contact details you provide voluntarily.</li>
                <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our website and services, including IP address, browser type, pages visited, and time spent.</li>
                <li><strong className="text-white">Cookies and Tracking:</strong> We use cookies and similar technologies to enhance your experience and analyze website traffic.</li>
                <li><strong className="text-white">Communication Data:</strong> Records of correspondence when you contact us via email or other channels.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve our services</li>
                <li>To communicate with you about updates, offers, and support</li>
                <li>To analyze usage patterns and optimize user experience</li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To detect and prevent fraud or security incidents</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Data Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li><strong className="text-white">Service Providers:</strong> Third-party vendors who assist us in operating our services (hosting, analytics, email delivery).</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
                <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Data Security</h2>
              <p>
                We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Your Rights (GDPR)</h2>
              <p>Under the GDPR, you have the following rights:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li><strong className="text-white">Right of Access:</strong> Request a copy of your personal data.</li>
                <li><strong className="text-white">Right to Rectification:</strong> Request correction of inaccurate data.</li>
                <li><strong className="text-white">Right to Erasure:</strong> Request deletion of your personal data.</li>
                <li><strong className="text-white">Right to Restrict Processing:</strong> Request limitation of data processing.</li>
                <li><strong className="text-white">Right to Data Portability:</strong> Receive your data in a structured, machine-readable format.</li>
                <li><strong className="text-white">Right to Object:</strong> Object to processing based on legitimate interests.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:info@trairx.com" className="text-blue-400 hover:underline">info@trairx.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">8. International Transfers</h2>
              <p>
                Your data may be transferred to and processed in countries outside the European Economic Area (EEA). In such cases, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-6">
                <p><strong className="text-white">TrairX Technology O&Uuml;</strong></p>
                <p className="mt-2">Harju maakond, Tallinn, Kesklinna linnaosa</p>
                <p>Viru v&auml;ljak 2, 10111, Estonia</p>
                <p className="mt-2">
                  Email:{" "}
                  <a href="mailto:info@trairx.com" className="text-blue-400 hover:underline">info@trairx.com</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
