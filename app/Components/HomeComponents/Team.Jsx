import React from "react";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Founder & CEO",
    photo: "/team/alice.jpg",
    linkedin: "#",
  },
  {
    name: "Mark Thompson",
    role: "Head of Marketing",
    photo: "/team/mark.jpg",
    linkedin: "#",
  },
  {
    name: "Sara Williams",
    role: "Creative Director",
    photo: "/team/sara.jpg",
    linkedin: "#",
  },
  {
    name: "James Lee",
    role: "Meta Ads Specialist",
    photo: "/team/james.jpg",
    linkedin: "#",
  },
];

const Team = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Meet Our Team
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our team of experts is dedicated to delivering the best Meta marketing results for your business.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="mt-1 text-gray-500">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
