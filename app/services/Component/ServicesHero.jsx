import React from "react";

const ServicesHero = () => {
  return (
    <section className="bg-blue-600 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We provide top-notch marketing solutions to help your business grow.
        </p>
        <a
          href="#services"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
};

export default ServicesHero;
