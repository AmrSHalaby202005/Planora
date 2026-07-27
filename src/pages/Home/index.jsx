import Hero from "../../components/features/Home/Hero";
import Features from "../../components/features/Home/Features";
import CTA from "../../components/features/Home/CTA";
import Footer from "../../components/features/Home/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
