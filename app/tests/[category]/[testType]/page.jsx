'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';

const TestTypePage = () => {
  const router = useRouter();
  const { category, testType } = useParams();

  const categoryName = useMemo(() => {
    if (!category) return '';
    return category
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, [category]);

 const testTypeOptionsMap = {
  mcq: [
    { label: 'MCQ by Set', path: `/tests/${category}/McqPage?mode=set` },
    { label: 'MCQ Random', path: `/tests/${category}/McqPage?mode=random` },
    { label: 'MCQ by Teacher', path: `/tests/${category}/McqPage?mode=teacher` },
  ],
  written: [
    { label: 'Written by Set', path: `/tests/${category}/WrittenPage?mode=set` },
    { label: 'Written Random', path: `/tests/${category}/WrittenPage?mode=random` },
    { label: 'Teacher Assigned Written', path: `/tests/${category}/WrittenPage?mode=teacher` },
  ],
};

  const options = testTypeOptionsMap[testType] || [];

  return (
    <div className="min-h-screen py-6 px-12 bg-white text-black flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Choose {testType.toUpperCase()} Test Mode for{' '}
        <span className="capitalize text-blue-700">{categoryName}</span>
      </h1>

      {options.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-2xl">
          {options.map((option, index) => (
            <Link key={index} href={option.path} passHref>
              <div className="p-6 rounded-lg shadow hover:shadow-xl transition cursor-pointer text-center bg-gradient-to-br from-yellow-100 to-white border border-yellow-300 hover:scale-105 flex items-center justify-center min-h-[100px]">
                <p className="text-lg font-semibold">{option.label}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-red-600 font-medium mt-6">
          No test options found for "{testType}". Please go back and try again.
        </p>
      )}

      <button
        onClick={() => router.back()}
        className="mt-12 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
      >
        Back to Test Types
      </button>
    </div>
  );
};

export default TestTypePage;
