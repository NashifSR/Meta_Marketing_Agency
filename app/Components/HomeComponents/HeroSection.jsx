import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side Text */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Scale Your Business with{" "}
            <span className="text-blue-600">Meta Ads That Convert</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We help brands and businesses grow through ROI-driven Facebook &
            Instagram ad campaigns. Our strategies are data-backed, creative,
            and results-focused.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:border-blue-600 hover:text-blue-600 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="mt-10 md:mt-0 md:ml-12">
          <img
            src="/marketing-illustration.png"
            alt="Meta Marketing Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
