import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-3xl mx-auto text-center px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white">
          Ready to Boost Your Business on Meta?
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Let's create high-performing ad campaigns and grow your audience today.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CTA;
