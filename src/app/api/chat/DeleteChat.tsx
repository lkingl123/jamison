"use client";

import React from "react";

const DeleteChat = () => {
  return (
    <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
      {/* Title Section */}
      <h3 className="text-2xl font-semibold mb-4">Delete a Chat</h3>
      <p className="mb-6 text-gray-600">Delete a chat. This action is permanent.</p>

      {/* DELETE Method Section */}
      <h4 className="text-2xl font-semibold mb-4">Method</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <span className="inline-block text-white bg-red-500 px-3 py-1 rounded-md text-sm">
          DELETE
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
  "data": "Chat deleted successfully."
}`}</pre>
      </div>

      {/* Name Section */}
      <h4 className="text-2xl font-semibold mb-4">Name</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  chatbot_id: "The chatbot's ID",
  chat_id: "The chat's ID"
}`}</pre>
      </div>
    </div>
  );
};

export default DeleteChat;
