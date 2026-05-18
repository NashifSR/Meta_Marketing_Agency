"use client";

import React, { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Portfolio = () => {
  // Added "All" to give an immediate overview of your agency capacity
  const categories = [
    "All",
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
      link: "https://www.behance.net", // Swap with real Behance layout link
    },
    {
      title: "Company Profile",
      category: "Graphic Design",
      description:
        "Clean promotional Company Profile for Industry.",
      image:
        "https://i.ibb.co.com/QjHxZ0Ss/Company-Profile-BDKD.png",
      link: "https://heyzine.com/flip-book/40203dbb80.html", 
    },
    {
      title: "Mirzapur Times",
      category: "Web Development",
      description:
        "Responsive Newsportal website focused on performance and conversion.",
      image:
        "https://i.ibb.co.com/23RC3kSC/Mirzapur-Times-p1.png",
      link: "https://www.mirzapurtimes.com", // Fixed URL protocol format
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
      link: "https://www.youtube.com", // Swap with video asset link
    },
    {
      title: "Social Media Reel Edit",
      category: "Video Editing",
      description:
        "Fast-paced engaging short-form content optimized for reach.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
      link: "https://www.youtube.com",
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

  // Supports filtering for both individual items or rendering everything altogether
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="w-full scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32 px-6 max-w-7xl mx-auto py-12"
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
            key={`cat-${index}`}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-3 rounded-2xl border transition duration-300 text-sm md:text-base font-medium ${
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
            key={`proj-${index}-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
            href={project.link}
            target="_blank"             // Force secure window execution layer
            rel="noopener noreferrer"   // Performance optimization safety attribute
            className="group block rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/[0.07] transition duration-300"
          >
            {/* Image Wrap Layout */}
            <div className="aspect-video overflow-hidden relative bg-neutral-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-103 transition duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition duration-500" />
            </div>

            {/* Card Information context Content block */}
            <div className="p-6 relative">
              <div className="flex items-center justify-between gap-2 mb-2">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">
                  {project.category}
                </p>
                {/* Arrow indicator signals that link leaves site environment */}
                {project.link !== "#" && (
                  <FaArrowUpRightFromSquare size={13} className="text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-300" />
                )}
              </div>
              <h4 className="text-xl md:text-2xl font-medium text-white/90 group-hover:text-white transition">
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