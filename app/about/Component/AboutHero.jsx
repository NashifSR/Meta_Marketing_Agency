import React from 'react';

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We are dedicated to helping businesses grow through innovative marketing solutions. Our mission is to deliver measurable results with creativity and passion.
        </p>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutHero;
