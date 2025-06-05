"use client";

import React from "react";

const CreateChat = () => {
  return (
    <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
      {/* Title Section */}
      <h3 className="text-2xl font-semibold mb-4">Create a Chat</h3>
      <p className="mb-6 text-gray-600">Start a new conversation with a chatbot.</p>

      {/* POST Method Section */}
      <h4 className="text-2xl font-semibold mb-4">Method</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <span className="inline-block text-white bg-green-500 px-3 py-1 rounded-md text-sm">
          POST
        </span>{" "}
        <span>/chatbots/{`{chatbot_id}`}/chats</span>
      </div>

      {/* Request Section */}
      <h4 className="text-2xl font-semibold mb-4">Request</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{}`}</pre>
      </div>

      {/* Response Section */}
      <h4 className="text-2xl font-semibold mb-4">Response</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "result": "success",
  "data": {
    "id": "6475c498c27f69ee88869393",
    "title": "New chat",
    "client": "api",
    "created_at": "2023-05-30T09:40:40.544Z",
    "modified_at": "2023-05-30T09:40:40.544Z",
    "messages": [
      {
        "id": "6475c498c27f69ee88869394",
        "message": "Hi! How can I help?",
        "links": [],
        "type": "message",
        "speaker": "bot",
        "created_at": "2023-05-30T09:40:40.549Z"
      }
    ]
  }
}`}</pre>
      </div>

      {/* Errors Section */}
      <h4 className="text-2xl font-semibold mb-4">Errors</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "result": "error",
  "message": "You have reached the messages limit for your current plan."
}`}</pre>
      </div>
    </div>
  );
};

export default CreateChat;
