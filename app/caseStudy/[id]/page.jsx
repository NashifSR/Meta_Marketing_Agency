"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

// Sample Meta marketing case studies (same as in your main page)
const metaProjects = [
  {
    id: "lead-generation",
    title: "Lead Generation Campaign",
    client: "Tech Startup",
    logo: "/images/techstartup-logo.png",
    description:
      "Ran a targeted Meta Ads campaign to generate high-quality leads, achieving a 30% lower CPL than industry average.",
    img: "/images/meta1.jpg",
    fullContent:
      "Here you can write the full details of the Lead Generation Campaign, including strategy, results, and learnings.",
  },
  {
    id: "brand-awareness",
    title: "Brand Awareness Drive",
    client: "E-commerce Brand",
    logo: "/images/ecommerce-logo.png",
    description:
      "Increased brand visibility on Facebook & Instagram by 60% through creative ad placements and optimized targeting.",
    img: "/images/meta2.jpg",
    fullContent:
      "Full content for the Brand Awareness Drive campaign. Explain the creative process, targeting strategy, and outcomes.",
  },
  {
    id: "product-launch",
    title: "Product Launch Ads",
    client: "New SaaS Tool",
    logo: "/images/saas-logo.png",
    description:
      "Launched a Meta Ads campaign for a new product, resulting in 2,000+ signups in the first week.",
    img: "/images/meta3.jpg",
    fullContent:
      "Detailed case study of the Product Launch Ads campaign with campaign objectives, ad creatives, and results.",
  },
];

const CaseStudyPage = () => {
  const params = useParams();
  const project = metaProjects.find((p) => p.id === params.id);

  if (!project) {
    return <p className="text-center mt-24 text-xl">Case study not found.</p>;
  }

  return (
    <section className="bg-gray-50 min-h-screen py-5">
      <div className="max-w-6xl mx-auto px-4 bg-white rounded-xl shadow-lg p-20">
        <Image
          src={project.img}
          alt={project.title}
          width={800}
          height={400}
          className="rounded-xl mb-6 object-cover"
        />
        {project.logo && (
          <Image
            src={project.logo}
            alt={project.client}
            width={80}
            height={80}
            className="mb-4 object-contain"
          />
        )}
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-indigo-600 font-bold mb-6">{project.client}</p>
        <p className="text-gray-700">{project.fullContent}</p>
      </div>
    </section>
  );
};

export default CaseStudyPage;
