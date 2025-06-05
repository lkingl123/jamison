"use client";

import { useEffect, useState } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("jamison_cookie_consent");
    if (!consent) setIsVisible(true);
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem("jamison_cookie_consent", accepted ? "accepted" : "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-800">
        {/* Message */}
        <p className="mb-3 sm:mb-0 sm:mr-4 text-center sm:text-left max-w-3xl">
          🍪 We use cookies to enhance site performance and improve your experience. By clicking “Accept”, you agree to our{" "}
          <a href="/cookie-policy" className="underline text-blue-600 hover:text-blue-800">
            Cookie Policy
          </a>.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => handleConsent(false)}
            className="px-4 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition"
          >
            Decline
          </button>
          <button
            onClick={() => handleConsent(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
