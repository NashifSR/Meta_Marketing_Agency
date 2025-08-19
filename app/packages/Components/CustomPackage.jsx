"use client"
import React, { useState } from "react";

const CustomPackage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can replace this with API call or email submission logic
    alert("Thank you! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Request Your Custom Package
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-indigo-600 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default CustomPackage;
