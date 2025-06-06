"use client";

import { useState, useRef, useEffect } from "react";
import { FaCommentMedical, FaTimes } from "react-icons/fa";

const ChatBot = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    {
      role: "bot",
      content:
        "👋 Hi, I'm Clairo. I'm here to help you review and complete medical intake information. How would you like to start?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setInput("");
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const delay = Math.min(Math.max(data.reply.length * 30, 1000), 3000);

      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
        setIsTyping(false);
      }, delay);
    } catch (error) {
      console.error("Error:", error);
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
      {/* Tooltip */}
      {!isOpen && showTooltip && (
        <button
          onClick={() => {
            setShowTooltip(false);
            setIsOpen(true);
          }}
          className="mb-2 px-4 py-2 bg-customBlue text-white rounded-full text-sm flex items-center space-x-2 shadow-md animate-bounce"
        >
          <FaCommentMedical className="w-4 h-4" />
          <span>Need help?</span>
        </button>
      )}

      {/* Chat Toggle */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className="w-14 h-14 rounded-full bg-customBlue hover:bg-black text-white shadow-lg flex items-center justify-center"
        title={isOpen ? "Close Assistant" : "Open Assistant"}
      >
        💬
      </button>

      {/* Chat Window */}
      <div
        className={`bg-white w-[320px] h-[440px] sm:w-[360px] sm:h-[500px] shadow-xl rounded-lg mt-4 flex flex-col border border-gray-300 overflow-hidden transform duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{
          transformOrigin: "bottom right",
          position: "absolute",
          bottom: "72px",
          right: "16px",
        }}
      >
        {/* Header */}
        <div className="bg-customBlue text-white p-3 font-bold flex justify-between items-center">
          <span>Assistant</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200"
          >
            <FaTimes />
          </button>
        </div>

        {/* Message Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50 text-sm">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-customBlue text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start text-gray-500 italic px-3">
              <span className="animate-pulse">Typing...</span>
            </div>
          )}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Input Field */}
        <div className="p-3 bg-gray-100 flex items-center space-x-2 border-t">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a question..."
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            onClick={handleSendMessage}
            className="bg-customBlue text-white p-2 rounded-lg hover:bg-black"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
