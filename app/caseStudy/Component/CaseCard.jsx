"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CaseCard = ({ project }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center">
      <Image
        src={project.img}
        alt={project.title}
        width={400}
        height={240}
        className="rounded-xl mb-4 object-cover"
      />
      {project.logo && (
        <Image
          src={project.logo}
          alt={project.client}
          width={64}
          height={64}
          className="mb-2 object-contain"
        />
      )}
      <h4 className="text-xl font-bold">{project.title}</h4>
      <p className="text-indigo-600 font-bold mb-2">{project.client}</p>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <Link href={`/caseStudy/${project.id}`}>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          View Case Study
        </button>
      </Link>
    </div>
  );
};

export default CaseCard;
