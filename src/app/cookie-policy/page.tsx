import Link from 'next/link';

const CookiePolicy = () => {
  return (
    <>
      <main className="px-6 py-10 bg-gray-100">
        <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-8">Cookie Policy</h1>

          <p className="mb-6">
            Clairo uses cookies to improve the functionality, performance, and security of our platform. This Cookie Policy outlines the types of cookies we use and how you can manage your preferences.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies?</h2>
          <p className="mb-6">
            Cookies are small data files stored on your device when you access our platform. They help us remember user preferences, ensure secure sessions, and enhance usability for healthcare intake workflows.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
          <ul className="list-disc pl-8 mb-6">
            <li>
              <strong>Essential Cookies:</strong> Required for secure login, user authentication, and basic platform functionality.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help us understand how the platform is used to improve reliability and user experience.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> Remember user preferences (e.g., last viewed records, session filters) to streamline workflow continuity.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
          <p className="mb-6">
            Clairo uses cookies to:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>Ensure users remain securely logged in.</li>
            <li>Remember user navigation between patient records.</li>
            <li>Analyze performance and identify potential issues.</li>
            <li>Improve form pre-filling and session continuity.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Cookies</h2>
          <p className="mb-6">
            You may choose to disable cookies via your browser settings. However, this may limit your access to secure or personalized features in Clairo.
          </p>
          <p className="mb-6">
            For guidance on cookie management, refer to your browser’s support documentation or privacy settings page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Cookies</h2>
          <p className="mb-6">
            We may use third-party tools, such as analytics providers, to monitor system performance and improve usability. These tools may set their own cookies for service delivery. We do not allow third-party cookies for advertising purposes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
          <p className="mb-6">
            This Cookie Policy may be updated periodically. Any material changes will be posted here. Continued use of the platform constitutes acceptance of any updates.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have questions about our cookie practices or privacy safeguards, contact us at:
            <br />
            <strong>Email: hello@Clairo.com</strong>
          </p>
        </div>
      </main>
    </>
  );
};

export default CookiePolicy;
