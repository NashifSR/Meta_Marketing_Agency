import React from "react";

const servicesList = [
  {
    title: "Ad Campaign Management",
    description:
      "We handle your Facebook & Instagram ad campaigns from setup to optimization, maximizing ROI.",
  },
  {
    title: "Creative Strategy",
    description:
      "High-performing creatives and copy that engage your audience and drive conversions.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Data-driven insights to track performance, optimize campaigns, and improve results.",
  },
  {
    title: "Consulting",
    description:
      "Expert guidance to scale your business with proven Meta marketing strategies.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Services
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We provide end-to-end Meta marketing solutions to help your business
          grow.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesList.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
