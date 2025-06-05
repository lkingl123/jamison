"use client";

import { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

// Define the Message type
type Message = {
  text: string;
  type: "ai" | "user";
};

const Hero = () => {
  const [messages, setMessages] = useState<Message[]>([]); // Displayed messages
  const [currentTypingMessage, setCurrentTypingMessage] = useState<string>(""); // Message being typed
  const [isThinking, setIsThinking] = useState(false); // Typing indicator
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the current message being processed

  const chatMessages: Message[] = [
    { text: "Hi! How can I help you?", type: "ai" },
    { text: "What can you do?", type: "user" },
    {
      text: "I was trained with the content available on this website so I can answer any questions or provide you information about TalkEdge.",
      type: "ai",
    },
  ];

  useEffect(() => {
    if (currentIndex < chatMessages.length) {
      const message = chatMessages[currentIndex];
      setIsThinking(true); // Show the `...` indicator
      setCurrentTypingMessage("..."); // Show dots initially

      const dotsTimeout = setTimeout(() => {
        setIsThinking(false); // Hide the `...` indicator
        setCurrentTypingMessage(""); // Clear dots before typing begins

        // Start typing simulation
        const typeCharacter = (charIndex: number) => {
          if (charIndex < message.text.length) {
            setCurrentTypingMessage((prev) => prev + message.text[charIndex]);
            setTimeout(() => typeCharacter(charIndex + 1), 50); // Recursive typing
          } else {
            // Typing is complete
            setMessages((prev) => [...prev, message]); // Add the completed message
            setCurrentTypingMessage(""); // Clear the typing message
            setCurrentIndex((prev) => prev + 1); // Move to the next message
          }
        };

        typeCharacter(0); // Start typing from the first character
      }, 1000); // Delay to show `...` for 1 second

      return () => clearTimeout(dotsTimeout);
    }
  }, [currentIndex]);

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-5 md:px-10 lg:px-20 py-16 mb-32">

      {/* Left Content */}
      <div
        className="text-center lg:text-left flex-1 space-y-6 mx-auto lg:ml-48"
        style={{ maxWidth: "480px" }}
      >
        <h1 className="text-[40px] md:text-[60px] lg:text-[90px] font-bold leading-[1.1] text-black tracking-tight">
          Your own <br />
          <span className="text-customOrange">ChatGPT</span> <br />
          chatbot
        </h1>
        <p className="text-lg md:text-[22px] text-gray-500 leading-relaxed tracking-tight">
          Train your chatbots with your data from any file or website. Chat to
          ask questions and find information, or embed it as a widget on your
          website to assist your users.
        </p>
        <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4">
          <a
            href="/create-chatbot"
            className="bg-customOrange text-white text-lg font-medium px-6 py-3 rounded-md hover:bg-black transition"
          >
            Create a Chatbot
          </a>
          <a
            href="/how-it-works"
            className="bg-gray-200 text-black px-6 py-3 rounded-md hover:bg-gray-300 text-lg font-medium"
          >
            See how it works
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative flex-1 flex justify-center lg:justify-start items-center mt-10 lg:mt-0">
        {/* Embedded Styles for Animations */}
        <style>
          {`
            @keyframes outer-counterclockwise {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(-360deg);
              }
            }

            @keyframes inner-clockwise {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }

            .animate-outer-counterclockwise {
              animation: outer-counterclockwise 50s linear infinite;
              transform-origin: 540px 540px;
            }

            .animate-inner-clockwise {
              animation: inner-clockwise 50s linear infinite;
              transform-origin: 540px 540px;
            }
          `}
        </style>

        {/* Spinning Ellipse Background */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1080 1080"
            className="w-[450px] md:w-[600px] h-[450px] md:h-[600px]"
          >
            {/* Outer Ellipses (Counterclockwise) */}
            <g className="animate-outer-counterclockwise">
              {[0, 72, 144, 216, 288].map((angle) => (
                <ellipse
                  key={angle}
                  cx="540"
                  cy="540"
                  rx="525"
                  ry="160"
                  style={{
                    stroke: "#0057E4",
                    fill: "none",
                    strokeWidth: 3,
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: "540px 540px",
                  }}
                />
              ))}
            </g>

            {/* Inner Ellipses (Clockwise) */}
            <g className="animate-inner-clockwise">
              {[0, 72, 144, 216, 288].map((angle) => (
                <ellipse
                  key={angle}
                  cx="540"
                  cy="540"
                  rx="490"
                  ry="170"
                  style={{
                    stroke: "#0057E4",
                    fill: "none",
                    strokeWidth: 4,
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: "540px 540px",
                  }}
                />
              ))}
            </g>
          </svg>
        </div>

        {/* AI Chat Widget */}
        <div className="bg-white p-6 shadow-lg rounded-lg relative z-20 w-[340px] md:w-[340px] mx-auto">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-2">
              <span>AI</span>
            </div>
            <h3 className="text-blue-600 font-bold">AI Assistant</h3>
          </div>
          <hr className="border-gray-300 my-2" />
          <div className="h-[280px] overflow-y-auto space-y-1">
            {/* Render all completed messages */}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "ai" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg ${
                    message.type === "ai"
                      ? "bg-gray-200 text-black"
                      : "bg-customOrange text-white"
                  }`}
                  style={{
                    display: "inline-block",
                    maxWidth: "80%",
                    wordWrap: "break-word",
                    margin: "0.5rem 0",
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Render the currently typing message */}
            {currentTypingMessage && (
              <div
                className={`flex ${
                  chatMessages[currentIndex]?.type === "ai"
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg ${
                    chatMessages[currentIndex]?.type === "ai"
                      ? "bg-gray-100 text-black"
                      : "bg-customOrange text-white"
                  }`}
                  style={{
                    display: "inline-block",
                    maxWidth: "80%",
                    wordWrap: "break-word",
                    margin: "0.5rem 0",
                  }}
                >
                  {isThinking ? (
                    <div className="flex items-center space-x-1 mt-2">
                      <span
                        className="h-2 w-2 rounded-full bg-white animate-bounce"
                        style={{ animationDelay: "0s" }}
                      ></span>
                      <span
                        className="h-2 w-2 rounded-full bg-white animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></span>
                      <span
                        className="h-2 w-2 rounded-full bg-white animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></span>
                    </div>
                  ) : (
                    currentTypingMessage
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center mt-4 border rounded-md px-4 py-2">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="flex-grow focus:outline-none"
            />
            <button>
              <FaPaperPlane className="h-6 w-6 text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
