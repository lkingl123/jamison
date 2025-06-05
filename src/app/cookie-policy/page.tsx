import Link from 'next/link';

const CookiePolicy = () => {
  return (
    <>
      <header>
        {/* Include your Navbar component here */}
      </header>

      <main className="px-6 py-10 bg-gray-100">
        <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-8">Cookie Policy</h1>

          <p className="mb-6">
            TalkEdge uses cookies to improve your experience while using our website and services. This Cookie Policy explains how we use cookies, the types of cookies we use, and how you can manage them.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What are Cookies?</h2>
          <p className="mb-6">
            Cookies are small text files stored on your device when you visit a website. They are used to remember your preferences, actions, and activities over time, which helps improve your browsing experience.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
          <div className="mb-6">
            <ul className="list-disc pl-8">
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and allow you to use basic features like account login and navigation. Without these cookies, certain parts of the website may not work.</li>
              <li><strong>Performance Cookies:</strong> These cookies help us analyze how visitors use our website, including which pages are viewed the most, to improve the overall user experience.</li>
              <li><strong>Functionality Cookies:</strong> These cookies allow us to remember your preferences, such as language or region, and offer more personalized features.</li>
              <li><strong>Advertising Cookies:</strong> These cookies are used to provide more relevant advertisements to you based on your browsing behavior.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
          <p className="mb-6">
            We use cookies to:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>Improve website performance and usability.</li>
            <li>Provide a more personalized experience by remembering your preferences and settings.</li>
            <li>Track user behavior and analyze website usage to improve functionality.</li>
            <li>Serve targeted advertisements based on your browsing history.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How to Manage Cookies</h2>
          <p className="mb-6">
            Most web browsers automatically accept cookies, but you can change your browser settings to manage or disable cookies if you prefer. Please note that disabling certain cookies may affect the functionality of the website.
          </p>
          <p className="mb-6">
            You can also manage cookies through your browser settings. To learn how to do so, check the "Help" section of your browser or visit the official website of the browser you use.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Cookies</h2>
          <p className="mb-6">
            We may allow third-party service providers to set cookies on your device to assist with various services, such as analytics, advertisements, or social media integration. These third parties may collect data about your online activities over time and across different websites.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Cookie Policy</h2>
          <p className="mb-6">
            We may update this Cookie Policy from time to time. Any changes will be posted on this page, and the updated policy will be effective as soon as it is published.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about our Cookie Policy, please contact us at:
            <br />
            <strong>Email: hello@talkedge.com</strong>
          </p>
        </div>
      </main>

      <footer>
        {/* Include your Footer component here */}
      </footer>
    </>
  );
};

export default CookiePolicy;
