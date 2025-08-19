import React from 'react';

const PackageCard = ({ title, price, duration, features, image }) => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center
                    border-4 border-gray-200 hover:border-indigo-500 
                    transition-transform transform hover:-translate-y-4 hover:scale-105 duration-300
                    w-full max-w-sm h-[500px]">
      
      {/* Top Image/Icon */}
      {image && (
        <div className="mb-4 w-24 h-24 overflow-hidden rounded-full shadow-inner">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Title and Price */}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-indigo-600 text-3xl font-extrabold mb-2">${price}</p>
      {duration && <p className="text-gray-500 mb-4">Duration: {duration}</p>}

      {/* Features */}
      <ul className="text-gray-700 mb-6 space-y-2 text-left w-full px-4 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="before:content-['•'] before:text-indigo-500 before:mr-2">
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="bg-indigo-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-indigo-600 transition">
        Get Started
      </button>
    </div>
  );
};

export default PackageCard;
