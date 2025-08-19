import React from 'react';

const AboutStory = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 mb-6">
            Founded with a passion for digital innovation, we help businesses grow by providing creative marketing solutions that drive real results. Our team combines expertise, creativity, and strategy to ensure your brand stands out.
          </p>
          <p className="text-gray-700">
            We believe in transparency, collaboration, and continuous learning to deliver the best experience for our clients. Your success is our mission.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/about-illustration.png"
            alt="Our Story"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
