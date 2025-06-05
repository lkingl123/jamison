"use client";

import React from "react";

const GetChat = () => {
  return (
    <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
      {/* Title Section */}
      <h3 className="text-2xl font-semibold mb-4">Get a Chat</h3>
      <p className="mb-6 text-gray-600">Retrieve a single chat.</p>

      {/* GET Method Section */}
      <h4 className="text-2xl font-semibold mb-4">Method</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <span className="inline-block text-white bg-green-500 px-3 py-1 rounded-md text-sm">
          GET
        </span>{" "}
        <span>/chatbots/{`{chatbot_id}`}/chats/{`{chat_id}`}</span>
      </div>

      {/* Request Section */}
      <h4 className="text-2xl font-semibold mb-4">Request</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "chatbot_id": "The chatbot's ID",
  "chat_id": "The chat's ID"
}`}</pre>
      </div>

      {/* Response Section */}
      <h4 className="text-2xl font-semibold mb-4">Response</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "result": "success",
  "data": {
    "id": "6475c498c27f69ee88869393",
    "client": "internal",
    "title": "What are the pricing plans available and their features?",
    "created_at": "2023-05-30T09:40:40.544Z",
    "modified_at": "2023-05-30T09:40:40.544Z",
    "messages": [
      {
        "id": "6475c498c27f69ee88869394",
        "message": "Hi! How can I help?",
        "speaker": "bot",
        "created_at": "2023-05-30T09:40:40.549Z"
      },
      {
        "id": "6475c498c27f69ee88869396",
        "message": "What are the pricing plans available and their features?",
        "speaker": "human"
      }
    ]
  }
}`}</pre>
      </div>

      {/* Name Section */}
      <h4 className="text-2xl font-semibold mb-4">Name</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  chatbot_id: "The chatbot's ID",
  id: "The chat's ID",
  client: "The chat's client filter",
  title: "The chat's title (the first user's prompt)",
  messages: "The chat's list of messages"
}`}</pre>
      </div>
    </div>
  );
};

export default GetChat;
