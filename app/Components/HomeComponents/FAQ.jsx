"use client"
import React, { useState } from "react";

const faqs = [
  {
    question: "What services does MetaAgency provide?",
    answer:
      "We provide full Meta marketing solutions including ad campaigns, audience targeting, creative consultation, and analytics reporting.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most campaigns show measurable results within 2-4 weeks, depending on the budget and strategy.",
  },
  {
    question: "Can you manage multiple ad accounts?",
    answer:
      "Yes, we can manage multiple accounts and coordinate campaigns across different business pages.",
  },
  {
    question: "Do you offer custom plans?",
    answer:
      "Absolutely. We can create a tailored plan to fit your business goals and budget.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
              >
                <span className="text-gray-800 font-medium">{faq.question}</span>
                <span className="text-2xl text-blue-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
