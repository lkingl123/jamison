"use client";

import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is TalkEdge?",
      answer:
        "TalkEdge is an AI-powered chatbot platform that allows businesses to integrate conversational AI into their websites, improving user engagement and support.",
    },
    {
      question: "How can TalkEdge help my business?",
      answer:
        "TalkEdge helps businesses automate customer interactions, provide instant support, and enhance user experience on websites with customizable AI chatbots. This helps save time and increase customer satisfaction.",
    },
    {
      question: "Can TalkEdge be customized for different industries?",
      answer:
        "Yes! TalkEdge can be tailored to meet the specific needs of various industries, from e-commerce to service-based businesses, providing personalized and relevant chatbot interactions.",
    },
    {
      question: "How do I set up TalkEdge on my website?",
      answer:
        "Setting up TalkEdge on your website is easy. Simply integrate the provided code snippet into your site’s codebase, and you’re ready to go. Our team can guide you through the setup process.",
    },
    {
      question: "Does TalkEdge work on mobile devices?",
      answer:
        "Yes, TalkEdge chatbots are fully responsive and work seamlessly across all devices, including desktops, tablets, and smartphones.",
    },
    {
      question: "Can I track chatbot performance and analytics?",
      answer:
        "Absolutely! TalkEdge provides detailed analytics and insights, including user interactions, response times, and overall performance, so you can continuously optimize your chatbot’s efficiency.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <section className="faq-section bg-gray-100 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-8">
          Learn more about how TalkEdge can enhance your website with AI-powered chatbots.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-md"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 bg-white text-left text-lg font-medium hover:bg-gray-50 transition duration-300"
              >
                <span>{faq.question}</span>
                <span>
                  {openIndex === index ? (
                    <span>&times;</span> // Close icon
                  ) : (
                    <span>+</span> // Open icon
                  )}
                </span>
              </button>
              {/* Answer */}
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
