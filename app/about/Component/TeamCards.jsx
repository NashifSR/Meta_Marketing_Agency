import React from 'react';

const TeamCards = ({ member }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
      <img
        src={member.img}
        alt={member.name}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h4 className="text-xl font-bold">{member.name}</h4>
      <p className="text-indigo-600 font-semibold mb-1">{member.designation}</p>
      <p className="text-gray-500 text-sm mb-2">{member.category}</p>
      <p className="text-gray-600 italic">"{member.quote}"</p>
    </div>
  );
};

export default TeamCards;
