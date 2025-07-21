'use client';
import React from 'react';
import theme from '../../../theme.js'; // Adjust the path to your theme.js

const Tests = () => {
  // Placeholder data, will come from backend/API later
  const testHistory = [
    { id: 1, testName: 'Math Test 1', date: '2025-07-01', score: 85, placement: 'Top 10%' },
    { id: 2, testName: 'English Test 1', date: '2025-06-25', score: 78, placement: 'Top 20%' },
    { id: 3, testName: 'Science Test 1', date: '2025-06-20', score: 90, placement: 'Top 5%' },
    // Add up to 10 test entries
  ];

  return (
    <div
      className="p-8 min-h-screen"
      style={{ backgroundColor: theme.colors.background, color: theme.colors.primaryText }}
    >
      <h1 className="text-3xl font-semibold mb-6">Test History</h1>

      <div
        className="overflow-x-auto rounded shadow"
        style={{
          backgroundColor: theme.colors.cardBackground,
          boxShadow: `0 2px 10px ${theme.colors.shadow}`,
        }}
      >
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead style={{ backgroundColor: theme.colors.button, color: 'white' }}>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Test Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Score</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Placement</th>
            </tr>
          </thead>
          <tbody>
            {testHistory.map(({ id, testName, date, score, placement }) => (
              <tr key={id} className="even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{testName}</td>
                <td className="border border-gray-300 px-4 py-2">{date}</td>
                <td className="border border-gray-300 px-4 py-2">{score}</td>
                <td className="border border-gray-300 px-4 py-2">{placement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tests;
