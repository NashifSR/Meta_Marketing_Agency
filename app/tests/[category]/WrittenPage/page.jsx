'use client';

import React, { useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const WrittenPage = () => {
  const { category } = useParams();
  const router = useRouter();

  const categoryName = useMemo(() => {
    if (!category) return '';
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, [category]);

  // Sample written test sets (replace with real data later)
  const [writtenSets] = useState([
    { id: 'intro', name: 'Set 1: Introduction to Writing' },
    { id: 'grammar', name: 'Set 2: Grammar Practice' },
    { id: 'essay', name: 'Set 3: Essay Writing' },
  ]);

  const handleSetSelect = (setId) => {
    router.push(`/tests/${category}/written/set/${setId}`);
  };

  return (
    <div className="min-h-screen py-6 px-8 bg-white text-black flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Written Test Sets for{' '}
        <span className="text-green-600">{categoryName}</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {writtenSets.map((set) => (
          <button
            key={set.id}
            onClick={() => handleSetSelect(set.id)}
            className="w-full bg-green-100 border border-green-300 hover:bg-green-200 text-black font-semibold py-4 px-6 rounded-lg shadow hover:shadow-lg transition"
          >
            {set.name}
          </button>
        ))}
      </div>

      <button
        onClick={() => router.back()}
        className="mt-12 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
      >
        Back
      </button>
    </div>
  );
};

export default WrittenPage;
