import About from "./Components/About";
import CTA from "./Components/CTA";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import WhyChooseUs from "./Components/WhyChooseUs";

export default function FrameHouseCreative() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <main className="relative z-10">

        {/* HERO */}
        <section className="min-h-screen flex items-center py-20">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <Hero />
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 md:py-28">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <Services />
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="py-20 md:py-28">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <Portfolio />
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 md:py-28">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <WhyChooseUs />
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-20 md:py-28">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <About />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <CTA />
          </div>
        </section>

      </main>
    </div>
  );
}