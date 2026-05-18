import React from "react";

const Services = () => {
  const services = [
    {
      title: "Photo Editing",
      description:
        "High-end retouching, color grading, and refined image enhancement for brands and creators.",
    },
    {
      title: "Graphic Design",
      description:
        "Brand identity, social media visuals, and clean marketing design systems.",
    },
    {
      title: "Video Editing",
      description:
        "Cinematic edits, reels, and motion content focused on storytelling and clarity.",
    },
    {
      title: "Web Design & Dev",
      description:
        "Modern responsive websites built for performance, clarity, and conversion.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
    >

      {/* Header */}
      <div className="text-center">
        <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-3">
          Services
        </p>
        <h3 className="text-3xl md:text-4xl font-semibold text-white/90">
          Creative solutions for modern brands
        </h3>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {services.map((service, index) => (
          <div
            key={`service-${index}`}
            className="group rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition duration-300"
          >
            {/* Icon Placement */}
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 mb-5 group-hover:bg-white/10 transition" />

            {/* Title */}
            <h4 className="text-lg md:text-xl font-medium text-white/90 mb-2">
              {service.title === "Web Design & Dev" ? "Web Design &amp; Dev" : service.title}
            </h4>

            {/* Description */}
            <p className="text-sm md:text-base text-white/50 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Services;