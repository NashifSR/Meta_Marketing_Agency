import React from 'react';
import theme from "./../../theme"

export default function DashboardPage() {
  // These props/data will be passed or fetched from backend later
  const studentName = "Student Name";
  const joiningDate = "YYYY-MM-DD";
  const batchName = "Batch Name";
  const testsTaken = 0;
  const coursesEnrolled = 0;

  return (
    <div
      className="p-8 min-h-screen"
      style={{ backgroundColor: theme.colors.background, color: theme.colors.primaryText }}
    >
      <h1 className="text-3xl font-semibold mb-8">Welcome, {studentName}!</h1>

      {/* Student Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <InfoCard title="Joining Date" content={joiningDate} />
        <InfoCard title="Batch Name" content={batchName} />
        <InfoCard title="Tests Taken" content={testsTaken} />
        <InfoCard title="Courses Enrolled" content={coursesEnrolled} />
      </div>

      {/* Placeholder for future components */}
      <div
        className="rounded p-6 text-center"
        style={{
          backgroundColor: theme.colors.cardBackground,
          boxShadow: `0 2px 8px ${theme.colors.shadow}`,
          color: theme.colors.secondaryText,
        }}
      >
        More dashboard components will load here when data is available.
      </div>
    </div>
  );
}

function InfoCard({ title, content }) {
  return (
    <div
      className="rounded p-6"
      style={{
        backgroundColor: theme.colors.cardBackground,
        boxShadow: `0 2px 8px ${theme.colors.shadow}`,
        color: theme.colors.primaryText,
      }}
    >
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
}
