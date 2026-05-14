"use client";

import React, { useState } from "react";

const Portfolio = () => {
  const categories = [
    "Graphic Design",
    "Web Development",
    "Video Editing",
    "Marketing",
  ];

  const projects = [
    {
      title: "Luxury Brand Identity",
      category: "Graphic Design",
      description:
        "Modern branding and social media visuals designed for premium businesses.",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
      link: "#",
    },

    {
      title: "Restaurant Campaign Design",
      category: "Graphic Design",
      description:
        "Clean promotional graphics and marketing assets for social platforms.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
      link: "#",
    },

    {
      title: "Modern Business Website",
      category: "Web Development",
      description:
        "Responsive website focused on performance and conversion.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1600&auto=format&fit=crop",
      link: "#",
    },

    {
      title: "Creative Portfolio Website",
      category: "Web Development",
      description:
        "Modern UI/UX experience crafted for creators and agencies.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
      link: "#",
    },

    {
      title: "Cinematic Promo Edit",
      category: "Video Editing",
      description:
        "Professional promotional editing for modern brands and campaigns.",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop",
      link: "#",
    },

    {
      title: "Social Media Reel Edit",
      category: "Video Editing",
      description:
        "Fast-paced engaging short-form content optimized for reach.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
      link: "#",
    },

    {
      title: "Digital Ad Campaign",
      category: "Marketing",
      description:
        "Social media campaign designed for growth and engagement.",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1600&auto=format&fit=crop",
      link: "#",
    },

    {
      title: "Business Growth Strategy",
      category: "Marketing",
      description:
        "Content and marketing visuals built to improve brand visibility.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
      link: "#",
    },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section
      id="portfolio"
      className="w-full scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
    >

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

        <div>
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-3">
            Portfolio
          </p>

          <h3 className="text-3xl md:text-4xl font-semibold text-white/90">
            Selected Work
          </h3>
        </div>

        <p className="text-white/50 max-w-lg text-sm md:text-base leading-relaxed">
          Explore projects across branding, development, editing, and marketing.
        </p>

      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mt-10">

        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-3 rounded-2xl border transition duration-300 text-sm md:text-base ${
              activeCategory === category
                ? "bg-white text-black border-white"
                : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}

      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {filteredProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="group rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/[0.07] transition duration-300"
          >

            {/* Image */}
            <div className="aspect-video overflow-hidden relative">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />

            </div>

            {/* Content */}
            <div className="p-6">

              <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-3">
                {project.category}
              </p>

              <h4 className="text-xl md:text-2xl font-medium text-white/90">
                {project.title}
              </h4>

              <p className="mt-3 text-white/50 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>

            </div>

          </a>
        ))}

      </div>

    </section>
  );
};

export default Portfolio;