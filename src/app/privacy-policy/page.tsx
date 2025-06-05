import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <>
      <main className="px-6 py-10 bg-gray-100">
        <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>

          <p className="mb-6">
            At TalkEdge, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our services. Please read this policy carefully before using TalkEdge.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p className="mb-6">
            We collect information to provide better services to our users. The information we collect includes:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>
              <strong>Personal Identification Information:</strong> Name, email address, phone number, etc., that you provide when creating an account or interacting with our platform.
            </li>
            <li>
              <strong>Usage Data:</strong> Data about how you use TalkEdge, including your interaction with our platform, browsing behavior, and other usage statistics.
            </li>
            <li>
              <strong>Device Information:</strong> Information about the device you use to access TalkEdge, including the type of device, operating system, and IP address.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-6">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>Provide, maintain, and improve our services.</li>
            <li>Personalize your experience on TalkEdge.</li>
            <li>Respond to customer service requests and provide support.</li>
            <li>Analyze usage trends to optimize our platform.</li>
            <li>
              Send you notifications about updates, promotions, or other information related to TalkEdge (you can opt-out of marketing communications at any time).
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Share Your Information</h2>
          <p className="mb-6">
            We do not share your personal data with third parties except in the following circumstances:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>
              <strong>With service providers:</strong> We may share information with trusted third-party service providers who assist us in operating TalkEdge and providing services.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose information to comply with legal obligations, protect our rights, or defend against legal claims.
            </li>
            <li>
              <strong>Business Transfers:</strong> If TalkEdge is involved in a merger, acquisition, or sale, your data may be transferred to the new owner as part of the transaction.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p className="mb-6">
            We implement a variety of security measures to protect your personal information. However, please note that no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking Technologies</h2>
          <p className="mb-6">
            TalkEdge uses cookies and similar tracking technologies to enhance your experience and collect information about your usage of our platform. You can control the use of cookies through your browser settings, but disabling cookies may limit your ability to use some features of TalkEdge.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Data Rights</h2>
          <p className="mb-6">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>Access the personal data we hold about you.</li>
            <li>Request corrections to any inaccurate data.</li>
            <li>Request the deletion of your personal data, subject to legal limitations.</li>
            <li>Withdraw your consent for processing of personal data at any time (where applicable).</li>
            <li>Object to or restrict the processing of your personal data in certain circumstances.</li>
          </ul>
          <p>
            To exercise these rights, please contact us at{" "}
            <strong>hello@talkedge.com</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention</h2>
          <p className="mb-6">
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. Once your data is no longer needed, we will securely delete or anonymize it.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
          <p className="mb-6">
            TalkEdge does not knowingly collect personal information from children under the age of 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete the information as soon as possible.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. When we do, we will notify you by updating the "Last Updated" date at the top of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
            <br />
            <strong>Owner contact email: hello@talkedge.com</strong>
          </p>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
