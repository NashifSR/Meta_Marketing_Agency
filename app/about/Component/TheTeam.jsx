import React from "react";
import TeamCards from "./TeamCards"; // import the card component

const teamMembers = [
  {
    name: "Ahmed Nashif",
    designation: "Co-Founder & Ads Specialist",
    quote: "I turn ideas into campaigns that make an impact.",
    category: "Founder",
    img: "/images/ahmed.jpg"
  },
  {
    name: "Atiar Rahman Lipu",
    designation: "Co-Founder & Client Relations",
    quote: "Building relationships is the key to sustainable growth.",
    category: "Founder",
    img: "/images/lipu.jpg"
  },
  {
    name: "Ahasan Habibi",
    designation: "Graphic Designer",
    quote: "Design is thinking made visual.",
    category: "Creative",
    img: "/images/farjana.jpg"
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Meet Our Team</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCards key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
