import React from "react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$299/mo",
    features: [
      "Basic Meta Ads Setup",
      "Audience Targeting",
      "Monthly Report",
    ],
  },
  {
    name: "Pro",
    price: "$599/mo",
    features: [
      "Advanced Meta Ads Setup",
      "Custom Audience Strategies",
      "Bi-Weekly Reports",
      "Creative Consultation",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Full Meta Marketing Management",
      "Dedicated Account Manager",
      "Weekly Reports & Insights",
      "Custom Campaigns",
      "Performance Guarantee",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Pricing Plans
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan to boost your business on Meta platforms.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                {plan.price}
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="before:content-['✓'] before:text-blue-600 before:mr-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
