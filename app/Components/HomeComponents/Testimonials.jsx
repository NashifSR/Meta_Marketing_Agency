import React from "react";

const testimonials = [
  {
    name: "Sarah Williams",
    role: "CEO, FashionHub",
    feedback:
      "MetaAgency transformed our online sales! The ad campaigns were precise, creative, and highly effective.",
    image: "/images/client1.jpg", // replace with your client image
  },
  {
    name: "Mark Johnson",
    role: "Founder, TechNova",
    feedback:
      "We saw a 3x increase in leads thanks to MetaAgency’s targeted ad strategies.",
    image: "/images/client2.jpg",
  },
  {
    name: "Emily Davis",
    role: "Marketing Manager, GreenLife",
    feedback:
      "Professional, responsive, and results-driven. Highly recommended for any brand looking to grow online.",
    image: "/images/client3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Hear from our satisfied clients who achieved amazing results with our Meta marketing campaigns.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 object-cover rounded-full mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-blue-600 text-sm">{testimonial.role}</p>
              <p className="mt-2 text-gray-600 text-sm">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
