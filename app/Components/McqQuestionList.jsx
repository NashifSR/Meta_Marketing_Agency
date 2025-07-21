'use client';

import React, { useEffect, useState } from 'react';

const McqQuestionList = ({ mode, selectedSet, category }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock fetch function simulating API call
  const fetchQuestions = async () => {
    setLoading(true);
    setError(null);

    try {
      // Replace this with your real API call, e.g.:
      // const response = await fetch(`/api/mcq?category=${category}`);
      // const data = await response.json();

      // Mock data sample:
      const data = [
        { id: 1, question: 'What is HTML?', set: '1' },
        { id: 2, question: 'What is CSS?', set: '1' },
        { id: 3, question: 'What is React?', set: '2' },
        { id: 4, question: 'What is JSX?', set: '2' },
        { id: 5, question: 'What is JS?', set: '3' },
        { id: 6, question: 'What is DOM?', set: '3' },
        { id: 7, question: 'What is Node.js?', set: '4' },
        { id: 8, question: 'What is Express?', set: '4' },
        { id: 9, question: 'What is MongoDB?', set: '5' },
        { id: 10, question: 'What is API?', set: '5' },
        { id: 11, question: 'What is JSON?', set: '6' },
        { id: 12, question: 'What is REST?', set: '6' },
        { id: 13, question: 'What is SQL?', set: '7' },
        { id: 14, question: 'What is DBMS?', set: '7' },
        { id: 15, question: 'What is PHP?', set: '8' },
        { id: 16, question: 'What is Laravel?', set: '8' },
        { id: 17, question: 'What is Git?', set: '9' },
        { id: 18, question: 'What is GitHub?', set: '9' },
        { id: 19, question: 'What is CLI?', set: '10' },
        { id: 20, question: 'What is Terminal?', set: '10' },
        { id: 21, question: 'What is Framework?', set: '11' },
        { id: 22, question: 'What is Library?', set: '11' },
      ];

      if (mode === 'set') {
        // Filter questions by selected set
        setQuestions(data.filter((q) => q.set === selectedSet));
      } else if (mode === 'random') {
        // Shuffle and pick max 20 questions
        const shuffled = data.sort(() => 0.5 - Math.random());
        setQuestions(shuffled.slice(0, 20));
      } else {
        setQuestions([]);
      }
    } catch (err) {
      setError('Failed to load questions.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if ((mode === 'set' && selectedSet) || mode === 'random') {
      fetchQuestions();
    }
  }, [mode, selectedSet]);

  if (loading) return <p className="text-center mt-6">Loading questions...</p>;
  if (error) return <p className="text-center mt-6 text-red-600">{error}</p>;
  if (!questions.length)
    return <p className="text-center mt-6 text-gray-600">No questions found.</p>;

  return (
    <div className="w-full max-w-2xl">
      <h2 className="text-xl font-bold mb-4 text-center text-yellow-700">
        {mode === 'set' ? `MCQ Set ${selectedSet}` : 'Random MCQ Test (Max 20 Questions)'}
      </h2>
      {questions.map((q, i) => (
        <div key={q.id} className="mb-4 p-4 border rounded-lg bg-yellow-50">
          <p className="font-medium">{i + 1}. {q.question}</p>
        </div>
      ))}
    </div>
  );
};

export default McqQuestionList;
