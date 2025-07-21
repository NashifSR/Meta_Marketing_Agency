// app/tests/page.jsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const categories = [
  { name: 'Graphic Design', slug: 'graphic-design', emoji: '🎨' },
  { name: 'Computer Operation', slug: 'computer-operation', emoji: '💻' },
];

export default function TestHome() {
  const router = useRouter();

  const handleSelect = (slug) => {
    // Corrected path to navigate to the [categorySlug] dynamic page
    // This will lead to /tests/graphic-design or /tests/computer-operation
    router.push(`/tests/${slug}`);
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-white text-black flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-center">🧪 Choose a Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleSelect(cat.slug)}
            className="p-6 rounded-lg shadow hover:shadow-xl transition bg-gradient-to-br from-yellow-100 to-white border border-yellow-300 hover:scale-105 text-center flex flex-col items-center justify-center"
          >
            <p className="text-xl font-semibold">
              {cat.emoji} {cat.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}