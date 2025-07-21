// app/tests/[category]/page.jsx
'use client';

import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';

const TestOptionsPage = ({ params }) => {
  const router = useRouter();
  const { category } = params;

  const categoryName = useMemo(() => {
    if (!category) return '';
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, [category]);

  const handleTestTypeSelect = (testType) => {
    router.push(`/tests/${category}/${testType}`);
  };

  const Button = ({ label, color, value }) => (
    <button
      onClick={() => handleTestTypeSelect(value)}
      className={`bg-${color}-500 hover:bg-${color}-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105`}
    >
      {label}
    </button>
  );

  return (
    <main className="min-h-screen py-6 px-12 bg-white text-black flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Choose a Test Type for{' '}
        <span className="capitalize text-blue-700">
          {categoryName || category}
        </span>
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-lg">
        <Button label="MCQ" value="mcq" color="blue" />
        <Button label="Written" value="written" color="green" />
        <Button label="Custom by Teacher" value="custom" color="purple" />
      </section>

      <button
        onClick={() => router.back()}
        className="mt-12 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
      >
        Back to Categories
      </button>
    </main>
  );
};

export default TestOptionsPage;
