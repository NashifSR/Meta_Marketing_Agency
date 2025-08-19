import React from 'react';
import PackageCard from './PackageCard';

const PackagesList = () => {
  const packages = [
  {
    title: "Starter",
    price: "199",
    duration: "1 Month",
    features: [
      "1 Meta Ads Campaign",
      "Basic Ad Creative",
      "Audience Analytics",
      "Email Support",
    ],
  },
  {
    title: "Professional",
    price: "499",
    duration: "3 Months",
    features: [
      "3 Meta Ads Campaigns",
      "Advanced Ad Creative & Design",
      "Detailed Audience Targeting",
      "Weekly Analytics Reports",
      "Priority Support",
    ],
  },
  {
    title: "Premium",
    price: "999",
    duration: "6 Months",
    features: [
      "Unlimited Meta Ads Campaigns",
      "Full Creative Suite (Video, Social Posts)",
      "SEO & Website Optimization",
      "Dedicated Account Manager",
      "24/7 Support",
    ],
  },
];


  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Packages
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.title}
              title={pkg.title}
              price={pkg.price}
              features={pkg.features}
              duration={pkg.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesList;
