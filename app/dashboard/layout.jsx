'use client';
import React from 'react';
import Link from 'next/link';
import theme from '../../theme'; // adjust path as necessary

export default function DashboardLayout({ children }) {
  return (
    <div
      className="min-h-screen flex"
      style={{ backgroundColor: theme.colors.background, color: theme.colors.primaryText }}
    >
      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 w-64 h-screen flex flex-col p-6"
        style={{
          backgroundColor: theme.colors.primaryHoverBg,
          color: theme.colors.primaryText
        }}
      >
        <h2 className="text-2xl font-bold mb-8">Student Portal</h2>

        <nav className="flex flex-col space-y-4">
          <SidebarLink href="/" label="Home" />
          <SidebarLink href="/dashboard" label="Dashboard" />
          <SidebarLink href="/dashboard/courses" label="My Courses" />
          <SidebarLink href="/dashboard/tests" label="Tests" />
          <SidebarLink href="/dashboard/myProfile" label="My Profile" />
          <SidebarLink href="/logout" label="Logout" red />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pl-8 ml-[260px] mt-[20px]">
        {children}
      </main>
    </div>
  );
}

const SidebarLink = ({ href, label, red }) => {
  const baseStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
  };

  return (
    <Link href={href}>
      <p
        style={{
          ...baseStyle,
          color: red ? theme.colors.logoutText : theme.colors.primaryText,
        }}
        className="hover:brightness-110 hover:-translate-y-[1px]"
        onMouseEnter={(e) =>
          (e.currentTarget.style.color = red
            ? theme.colors.logoutHoverText
            : theme.colors.primaryText)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = red
            ? theme.colors.logoutText
            : theme.colors.primaryText)
        }
      >
        {label}
      </p>
    </Link>
  );
};
