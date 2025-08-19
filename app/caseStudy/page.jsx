"use client";
import React, { useState } from "react";
import Image from "next/image";
import CaseCard from "./Component/CaseCard";

// Sample Meta marketing case studies
const metaProjects = [
  {
    id: "lead-generation",
    title: "Lead Generation Campaign",
    client: "Tech Startup",
    logo: "/images/techstartup-logo.png",
    description:
      "Ran a targeted Meta Ads campaign to generate high-quality leads, achieving a 30% lower CPL than industry average.",
    img: "/images/meta1.jpg",
   },
  {
    id: "brand-awareness",
    title: "Brand Awareness Drive",
    client: "E-commerce Brand",
    logo: "/images/ecommerce-logo.png",
    description:
      "Increased brand visibility on Facebook & Instagram by 60% through creative ad placements and optimized targeting.",
    img: "/images/meta2.jpg",
  },
  {
    id: "product-launch",
    title: "Product Launch Ads",
    client: "New SaaS Tool",
    logo: "/images/saas-logo.png",
    description:
      "Launched a Meta Ads campaign for a new product, resulting in 2,000+ signups in the first week.",
    img: "/images/meta3.jpg",
  },
];

// Main Meta case study page
const CaseStudy = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Meta Marketing Projects</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metaProjects.map((project) => (
            <CaseCard key={project.id} project={project}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
