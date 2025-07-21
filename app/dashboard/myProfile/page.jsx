'use client';
import React from 'react';
import theme from '../../../theme.js'; // Adjust path if needed

const myProfile = () => {
  const student = {
    name: "Student Name",
    email: "student@example.com",
    phone: "+1 234 567 890",
    address: "123 Main St, City, Country",
    enrollmentDate: "2025-01-15",
    batchName: "Batch 2025 - Graphic Design",
    course: "Graphic Design Level 3",
    lastLogin: "2025-07-15 14:30",
    bio: "This is a short bio or description about the student. Passionate about design and creativity.",
    profilePicture: "",
    social: {
      linkedin: "https://linkedin.com/in/student",
      twitter: "https://twitter.com/student",
      facebook: "",
    },
  };

  return (
    <div
      className="p-8 min-h-screen max-w-4xl mx-auto"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.primaryText,
      }}
    >
      <h1 className="text-3xl font-semibold mb-8">Profile</h1>

      <div
        className="p-8 rounded shadow-md flex flex-col md:flex-row gap-8"
        style={{
          backgroundColor: theme.colors.cardBackground,
          boxShadow: `0 2px 10px ${theme.colors.shadow}`,
        }}
      >
        {/* Left Column */}
        <div className="flex flex-col items-center space-y-4 md:w-1/3">
          <div
            className="w-32 h-32 rounded-full overflow-hidden"
            style={{ backgroundColor: theme.colors.imageBg || '#E5E7EB' }}
          >
            {student.profilePicture ? (
              <img
                src={student.profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-gray-600">
                {student.name.charAt(0)}
              </div>
            )}
          </div>
          <h2 className="text-xl font-semibold">{student.name}</h2>
          <button
            type="button"
            className="px-4 py-2 text-white rounded transition"
            style={{
              backgroundColor: theme.colors.button,
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = theme.colors.buttonHover)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = theme.colors.button)
            }
          >
            Edit Profile
          </button>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-6">
          <Section title="Contact Information">
            <Info label="Email" value={student.email} />
            <Info label="Phone" value={student.phone} />
            <Info label="Address" value={student.address} />
          </Section>

          <Section title="Enrollment Details">
            <Info label="Enrollment Date" value={student.enrollmentDate} />
            <Info label="Batch" value={student.batchName} />
            <Info label="Course" value={student.course} />
            <Info label="Last Login" value={student.lastLogin} />
          </Section>

          <Section title="Bio">
            <p>{student.bio}</p>
          </Section>

          <Section title="Social Media">
            <div className="flex space-x-6">
              {student.social.linkedin && (
                <a
                  href={student.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.colors.link || '#2563EB' }}
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              )}
              {student.social.twitter && (
                <a
                  href={student.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.colors.link || '#1DA1F2' }}
                  className="hover:underline"
                >
                  Twitter
                </a>
              )}
              {student.social.facebook && (
                <a
                  href={student.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.colors.link || '#1877F2' }}
                  className="hover:underline"
                >
                  Facebook
                </a>
              )}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

// Reusable Info Line
const Info = ({ label, value }) => (
  <div className="flex space-x-4">
    <div className="font-semibold w-36">{label}:</div>
    <div>{value || 'N/A'}</div>
  </div>
);

// Reusable Section Container
const Section = ({ title, children }) => (
  <section>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div>{children}</div>
  </section>
);

export default myProfile;
