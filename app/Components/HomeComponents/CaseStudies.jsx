import React from "react";

const caseStudiesList = [
  {
    title: "E-commerce Growth",
    description:
      "Scaled a fashion e-commerce brand by 3x in 6 months using targeted Meta ads.",
    image: "/images/case1.jpg", // replace with your image path
  },
  {
    title: "Lead Generation Campaign",
    description:
      "Generated 500+ qualified leads for a B2B client in just 4 weeks.",
    image: "/images/case2.jpg",
  },
  {
    title: "App Install Boost",
    description:
      "Increased mobile app installs by 200% with optimized ad creatives.",
    image: "/images/case3.jpg",
  },
  {
    title: "Brand Awareness",
    description:
      "Built brand awareness for a startup, reaching 1M+ users in the first month.",
    image: "/images/case4.jpg",
  },
];

const CaseStudies = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Case Studies
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          See how we’ve helped businesses grow with our Meta marketing strategies.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudiesList.map((caseStudy) => (
            <div
              key={caseStudy.title}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {caseStudy.title}
              </h3>
              <p className="mt-2 text-gray-600">{caseStudy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
