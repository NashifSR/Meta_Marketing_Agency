import React from "react";

const About = () => {
  const stats = [
    {
      value: "15+",
      label: "Projects Delivered",
    },
    {
      value: "4",
      label: "Core Services",
    },
    {
      value: "24/7",
      label: "Client Support",
    },
  ];

  return (
    <section
      id="about"
      className="w-full scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-36"
    >
      <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-12">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            {/* Label */}
            <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-4">
              About
            </p>

            {/* Heading */}
            <h3 className="text-3xl md:text-4xl font-semibold leading-snug text-white/90 max-w-xl">
              We build modern creative experiences for businesses that want to stand out online
            </h3>

            {/* Description */}
            <p className="mt-6 text-white/50 leading-relaxed text-base md:text-lg max-w-xl">
              Frame House Creative is a multidisciplinary creative studio
              specializing in graphic design, photo editing, video editing,
              digital marketing, and web development.
            </p>

            <p className="mt-4 text-white/40 leading-relaxed text-sm md:text-base max-w-xl">
              Our goal is simple — help brands look more professional,
              communicate clearly, and create a stronger digital presence
              through clean visuals and modern execution.
            </p>

          </div>

          {/* RIGHT */}
          <div className="space-y-5">

            {/* Main Card */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">

              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.25em]">
                    Frame House Creative
                  </p>

                  <h4 className="text-2xl font-semibold text-white/90 mt-2">
                    Creative Studio
                  </h4>
                </div>

                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5" />
              </div>

              <p className="text-white/50 leading-relaxed text-sm md:text-base">
                Focused on delivering premium-quality visuals and modern digital
                experiences for businesses, startups, and creators.
              </p>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">

              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center"
                >
                  <h5 className="text-2xl font-semibold text-white/90">
                    {stat.value}
                  </h5>

                  <p className="text-white/40 text-xs md:text-sm mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;