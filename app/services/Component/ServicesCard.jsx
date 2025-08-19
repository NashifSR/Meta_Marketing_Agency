import React from "react";

const ServicesCard = ({ title, description, image }) => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center
                    border-4 border-gray-200 hover:border-indigo-500 
                    transition-transform transform hover:-translate-y-3 hover:scale-105 duration-300
                    h-[450px] w-full">
      {image && (
        <div className="mb-6 w-full h-40 overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServicesCard;
