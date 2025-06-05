"use client";

import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Jamison?",
      answer:
        "Jamison is an AI-powered medical intake assistant that helps healthcare staff process face sheet PDFs, extract critical data, and ensure insurance and billing readiness.",
    },
    {
      question: "How does Jamison work?",
      answer:
        "Staff upload hospital face sheets to the Jamison platform. The system scans and extracts key fields like patient info, insurance numbers, and diagnosis codes. It then identifies missing or invalid information and helps resolve them through guided Q&A.",
    },
    {
      question: "Who is Jamison for?",
      answer:
        "Jamison is designed for medical intake coordinators, billing staff, and case workers who manage hospital or clinic documentation and insurance processing.",
    },
    {
      question: "What problems does Jamison solve?",
      answer:
        "Jamison reduces human errors in manual data entry, helps catch missing fields early, speeds up insurance processing, and improves compliance with funding workflows.",
    },
    {
      question: "Is Jamison HIPAA-compliant?",
      answer:
        "Yes, Jamison is designed with HIPAA best practices in mind. Data is processed securely and is only stored after user approval, with encryption and access controls in place.",
    },
    {
      question: "Do I need training to use Jamison?",
      answer:
        "No formal training is needed. Jamison is built with a simple, guided interface and includes a built-in AI assistant to help users through each intake record step-by-step.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section bg-gray-100 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-8">
          Everything you need to know about using Jamison to process face sheets and assist with intake.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 bg-white text-left text-lg font-medium hover:bg-gray-50 transition duration-300"
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? <span>&times;</span> : <span>+</span>}</span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 p-4" : "max-h-0"
                } overflow-hidden bg-gray-50 text-gray-700`}
              >
                {openIndex === index && <p>{faq.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
