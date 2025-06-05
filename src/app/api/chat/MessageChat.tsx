"use client";

const MessageWithChat = () => {
  return (
    <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Request</h3>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "chatbot_id": "Your chatbot's ID",
  "chat_id": "The chat's ID",
  "prompt": "What are the pricing plans available?"
}`}</pre>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Response</h3>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "result": "success",
  "data": {
    "response": "Our pricing plans include Basic ($9.99/mo), Standard ($19.99/mo), and Premium ($29.99/mo).",
    "sources": [
      {
        "id": "6478a2s1c5f53c3df1151f4",
        "name": "pricing_info.pdf",
        "text": "Our pricing plans are designed to suit different needs.",
        "score": 0.757823263,
        "page": 1
      }
    ]
  }
}`}</pre>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Errors</h3>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "CODE": "MESSAGE",
  "MESSAGES_LIMIT_ERROR": "You have reached the messages limit for your current plan."
}`}</pre>
      </div>
    </div>
  );
};

export default MessageWithChat;
