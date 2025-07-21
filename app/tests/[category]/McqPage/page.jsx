'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
import McqSetSelector from '@/app/Components/McqSetSelector';
import McqQuestionList from '@/app/Components/McqQuestionList';

const McqPage = () => {
  const searchParams = useSearchParams();
  const { category } = useParams();
  const mode = searchParams.get('mode');

  const [sets, setSets] = useState([]);
  const [selectedSet, setSelectedSet] = useState(null);

  useEffect(() => {
    // Ideally fetch only sets list here (or inside McqSetSelector in future)
    // Using mock data here for demo, ideally from an API:
    const fetchSets = async () => {
      // Example mock sets (extracted from questions data)
      const mockSets = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
      setSets(mockSets);
    };
    if (mode === 'set') fetchSets();
  }, [mode]);

  return (
    <div className="min-h-screen p-8 bg-white text-black flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {category?.replace(/-/g, ' ')} – {mode?.toUpperCase()} Mode
      </h1>

      {mode === 'set' && !selectedSet && (
        <McqSetSelector sets={sets} onSelect={setSelectedSet} />
      )}

      {(mode === 'set' && selectedSet) || mode === 'random' ? (
        <McqQuestionList mode={mode} selectedSet={selectedSet} category={category} />
      ) : (
        <p className="text-center mt-6 text-gray-600">Please select a test mode and set.</p>
      )}

      {mode === 'set' && selectedSet && (
        <button
          onClick={() => setSelectedSet(null)}
          className="mt-6 bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back to Sets
        </button>
      )}
    </div>
  );
};

export default McqPage;
