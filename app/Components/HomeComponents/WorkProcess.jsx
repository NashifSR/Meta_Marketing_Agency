import React from "react";

const steps = [
  {
    title: "Strategy & Research",
    description:
      "We analyze your brand, competitors, and audience to craft a data-driven marketing strategy.",
    icon: "📊",
  },
  {
    title: "Campaign Planning",
    description:
      "We design targeted Meta ad campaigns that align with your goals and budget.",
    icon: "📝",
  },
  {
    title: "Creative Development",
    description:
      "Our team creates compelling visuals and copy to capture attention and drive engagement.",
    icon: "🎨",
  },
  {
    title: "Execution & Monitoring",
    description:
      "We launch campaigns and continuously optimize for maximum ROI and results.",
    icon: "🚀",
  },
  {
    title: "Reporting & Growth",
    description:
      "You receive detailed performance reports and insights for informed decision-making.",
    icon: "📈",
  },
];

const WorkProcess = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Work Process
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We follow a clear and effective workflow to ensure your Meta campaigns deliver measurable results.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl">{step.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
