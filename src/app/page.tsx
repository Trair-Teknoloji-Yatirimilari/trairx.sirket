import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Technology from "@/components/Technology";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Investors from "@/components/Investors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Technology />
      <Stats />
      <Clients />
      <Investors />
      <Contact />
      <Footer />
    </main>
  );
}
