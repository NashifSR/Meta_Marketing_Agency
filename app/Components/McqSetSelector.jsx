'use client';
import React from 'react';

const McqSetSelector = ({ sets, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
      {sets.map((setId) => (
        <button
          key={setId}
          onClick={() => onSelect(setId)}
          className="bg-yellow-100 border border-yellow-300 hover:bg-yellow-200 text-black font-semibold py-4 px-6 rounded-lg shadow hover:shadow-lg transition"
        >
          MCQ Set {setId}
        </button>
      ))}
    </div>
  );
};

export default McqSetSelector;
