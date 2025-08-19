import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">MetaAgency</h3>
          <p className="text-gray-400">
            We help brands grow with high-performing Meta ad campaigns and creative marketing strategies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Services", "Case Studies", "About", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-white transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
          <p>Email: <a href="mailto:hello@metaagency.com" className="hover:text-white transition">hello@metaagency.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:text-white transition">+1 234 567 890</a></p>
          <p>Address: 123 Marketing St, Meta City</p>
        </div>

      </div>

      <div className="mt-10 text-center border-t border-gray-700 pt-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} MetaAgency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
