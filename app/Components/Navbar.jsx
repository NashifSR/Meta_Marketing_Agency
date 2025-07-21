'use client';
import React from 'react';
import Link from 'next/link';
import theme from '../../theme'; // update path as needed

const Navbar = () => {
  return (
    <nav
      className="shadow-md border-b"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.primaryText,
        borderColor: theme.colors.primaryHoverBg,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide select-none"
          style={{ color: theme.colors.primaryText }}
        >
          TVET Course Material
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-semibold">
          {NavItem("/resources", "Resources")}
          {NavItem("/tests", "Tests")}
          {NavItem("/dashboard", "Dashboard")}
          {NavItem("/dashboard/courses", "My Courses")}
          {NavItem("/dashboard/myProfile", "Profile")}
          {NavItem("/logout", "Logout", true)}
        </div>
      </div>
    </nav>
  );
};

// NavItem helper to apply theme colors
function NavItem(href, label, red = false) {
  const baseStyle =
    "px-4 py-2 rounded-md transition-colors duration-200 select-none cursor-pointer";

  if (red) {
    // logout red colors from theme
    return (
      <Link
        href={href}
        key={href}
        className={baseStyle}
        style={{ color: theme.colors.logoutText }}
        onMouseEnter={(e) => (e.target.style.color = theme.colors.logoutHoverText)}
        onMouseLeave={(e) => (e.target.style.color = theme.colors.logoutText)}
      >
        {label}
      </Link>
    );
  }

  // normal link: use primaryText and primaryHoverBg as background hover
  return (
    <Link
      href={href}
      key={href}
      className={baseStyle}
      style={{ color: theme.colors.primaryText }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = theme.colors.primaryHoverBg;
        e.target.style.color = theme.colors.primaryText;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = theme.colors.primaryText;
      }}
    >
      {label}
    </Link>
  );
}

export default Navbar;
