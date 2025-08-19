import React from "react";
import ServicesCard from "./ServicesCard";
import CTA from "@/app/Components/HomeComponents/CTA";

const ServiceList = () => {
  const services = [
    {
      title: "Meta Ads Campaigns",
      description:
        "Strategically designed paid ad campaigns on Facebook & Instagram to reach your target audience and maximize ROI.",
    },
    {
      title: "Ad Creative & Design",
      description:
        "High-converting ad visuals and videos tailored for Meta platforms to capture attention and drive clicks.",
    },
    {
      title: "Audience Targeting & Analytics",
      description:
        "Precise audience targeting, A/B testing, and analytics to optimize ad performance and reduce wasted spend.",
    },
    {
      title: "Video Editing",
      description:
        "Professional editing to make your promotional videos stand out on social media.",
    },
    {
      title: "Social Media Posts",
      description:
        "Custom designed visuals and posts that engage your followers and boost brand awareness.",
    },
    {
      title: "SEO & Website Services",
      description:
        "Improve your website visibility, attract organic traffic, and maintain a strong online presence.",
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 my-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <CTA></CTA>
    </section>
  );
};

export default ServiceList;
