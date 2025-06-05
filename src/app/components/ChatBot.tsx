"use client";

import { useState, useRef, useEffect } from "react";
import { FaCommentAlt, FaTimes } from "react-icons/fa";

const ChatBot = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [
      {
        role: "bot",
        content:
          "Hi, welcome to TalkEdge! How can I help?",
      },
    ]
  );
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true); // Show tooltip initially
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setInput(""); // Clear input field immediately after sending
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot typing
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const replyLength = data.reply.length;

      const typingDelay = Math.min(Math.max(replyLength / 10, 1000), 3000);

      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
        setIsTyping(false);
      }, typingDelay);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsTyping(false);
    }
  };

  const handleTooltipClick = () => {
    setShowTooltip(false); // Hide tooltip when clicked
    setIsOpen(true); // Open the chat window
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {/* Tooltip */}
      {!isOpen && showTooltip && (
        <button
          onClick={handleTooltipClick}
          className="relative mb-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg text-sm flex items-center space-x-2 animate-bounce hover:bg-blue-600 transition duration-300"
        >
          <FaCommentAlt className="w-4 h-4" />
          <span>Try me!</span>
        </button>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false); // Hide tooltip when chat opens
        }}
        className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
        title={isOpen ? "Close Chat" : "Open Chat"}
      >
        💬
      </button>

      {/* Chat Window */}
      <div
        className={`bg-white w-[300px] h-[400px] sm:w-[350px] sm:h-[500px] shadow-xl rounded-lg mt-4 flex flex-col border border-gray-300 overflow-hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{
          transformOrigin: "bottom right",
          position: "absolute",
          bottom: "72px",
          right: "16px", // Adjusted for smaller width
        }}
      >
        {/* Header */}
        <div className="bg-blue-500 text-white p-3 font-bold flex items-center justify-between rounded-t-lg shadow-md">
          <span> 💬 AI Assistant</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200"
          >
            <FaTimes />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-xs px-4 py-2 rounded-lg bg-gray-200 text-gray-700 italic flex items-center">

                <span
                        className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "0s" }}
                      ></span>
                      <span
                        className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></span>
                      <span
                        className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></span>
              </div>
            </div>
          )}

          {/* Reference div to ensure scrolling to the latest message */}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Input */}
        <div className="p-3 bg-gray-100 flex items-center space-x-2 border-t">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
