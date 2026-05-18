import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Modern Creative Direction",
      description:
        "Clean, premium visuals designed to help brands stand out in crowded digital spaces.",
    },
    {
      title: "Multi-Service Workflow",
      description:
        "Design, editing, development, and marketing handled in one streamlined creative process.",
    },
    {
      title: "Fast Communication",
      description:
        "Clear updates, responsive collaboration, and smooth project management from start to finish.",
    },
    {
      title: "Business-Focused Execution",
      description:
        "Every project is created with clarity, engagement, and conversion in mind.",
    },
  ];

  return (
    <section
      id="why-us"
      className="w-full scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
    >

      {/* Header */}
      <div className="text-center">
        <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-3">
          Why Choose Us
        </p>

        <h3 className="text-3xl md:text-4xl font-semibold text-white/90">
          Built for modern brands
        </h3>

        <p className="mt-5 max-w-2xl mx-auto text-white/50 text-sm md:text-base leading-relaxed">
          Frame House Creative combines strategy, design, and execution
          to help businesses create stronger digital experiences.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {reasons.map((reason, index) => (
          <div
            key={`reason-${index}-${reason.title.replace(/\s+/g, "-").toLowerCase()}`}
            className="group rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-7 hover:bg-white/[0.07] transition duration-300"
          >
            {/* Top Row Layout */}
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04]" />
              <span className="text-white/20 text-4xl font-semibold">
                {`0${index + 1}`}
              </span>
            </div>

            {/* Title */}
            <h4 className="text-xl md:text-2xl font-medium text-white/90">
              {reason.title}
            </h4>

            {/* Description */}
            <p className="mt-3 text-white/50 text-sm md:text-base leading-relaxed">
              {reason.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WhyChooseUs;