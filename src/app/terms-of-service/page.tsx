import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — TrairX Technology",
  description: "TrairX Technology OÜ Terms of Service",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-gray-400">Last updated: April 18, 2026</p>

          <div className="mt-12 space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services provided by TrairX Technology O&Uuml; (&quot;TrairX&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Description of Services</h2>
              <p>
                TrairX provides AI-powered technology solutions including but not limited to:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Zeha Academy — AI conversational platform</li>
                <li>Safely — Safety infrastructure and crisis coordination</li>
                <li>Checkly — Social intelligence and check-in network</li>
                <li>LingoChat — AI language learning platform</li>
                <li>Content Queen — AI content management</li>
                <li>Scoorpe — Smart analytics platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. User Accounts</h2>
              <p>
                Some of our services may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Use our services for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the integrity of our services</li>
                <li>Upload malicious code or content</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the intellectual property rights of others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services — including but not limited to text, graphics, logos, icons, software, and AI models — are the exclusive property of TrairX Technology O&Uuml; and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, TrairX shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising out of or in connection with your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Disclaimer of Warranties</h2>
              <p>
                Our services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">8. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to our services at any time, with or without cause, and with or without notice. Upon termination, your right to use our services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Republic of Estonia, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Tallinn, Estonia.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of our services after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
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
