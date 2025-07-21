'use client';
import React from 'react';
import theme from '../../../theme.js'; // Adjust to correct path

export default function CoursesPage() {
  return (
    <div
      className="min-h-screen p-8"
      style={{ backgroundColor: theme.colors.background, color: theme.colors.primaryText }}
    >
      <h1 className="text-3xl font-semibold mb-4">My Courses</h1>
      <p className="text-lg">Your enrolled courses will appear here.</p>

      {/* Future course cards can be placed here */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example placeholder card */}
        <div
          className="p-6 rounded shadow"
          style={{ backgroundColor: theme.colors.cardBackground, boxShadow: `0 2px 10px ${theme.colors.shadow}` }}
        >
          <h2 className="text-xl font-bold mb-2">Course Name</h2>
          <p className="mb-1">Batch: Batch Name</p>
          <p className="mb-1">Start Date: 2025-01-10</p>
          <button
            className="mt-3 px-4 py-2 rounded text-white"
            style={{ backgroundColor: theme.colors.button }}
          >
            View Course
          </button>
        </div>
      </div>
    </div>
  );
}
