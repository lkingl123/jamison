import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <main className="px-6 py-10 bg-gray-100">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>

        <p className="mb-6">
          At <strong>Clairo</strong>, we are committed to protecting the privacy and security of your information, especially when dealing with sensitive patient data. This Privacy Policy explains how we collect, use, and protect information you provide when using the platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p className="mb-6">
          We collect only the information necessary to support medical intake, verification, and document processing workflows.
        </p>
        <ul className="list-disc pl-8 mb-6">
          <li>
            <strong>User Info:</strong> Name, email, and role when registering an account.
          </li>
          <li>
            <strong>Uploaded Documents:</strong> PDFs or intake documents you submit for processing.
          </li>
          <li>
            <strong>Audit Data:</strong> Timestamps, activity logs, and metadata for system accuracy and traceability.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Information</h2>
        <p className="mb-6">
          Information is used for the following purposes:
        </p>
        <ul className="list-disc pl-8 mb-6">
          <li>Processing face sheet documents and extracting structured data.</li>
          <li>Flagging errors, omissions, or inconsistencies in patient records.</li>
          <li>Allowing authorized users to validate, correct, or approve summaries.</li>
          <li>Improving platform safety, accuracy, and usability.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">PHI & HIPAA Considerations</h2>
        <p className="mb-6">
          Clairo is built with HIPAA best practices in mind, including restricted access, encryption, and audit trails. However, final compliance with HIPAA regulations lies with the provider organization and how the platform is integrated into their workflows.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
        <ul className="list-disc pl-8 mb-6">
          <li><strong>No commercial sharing or selling of data.</strong></li>
          <li><strong>Authorized Subprocessors:</strong> Used strictly for secure document processing and storage.</li>
          <li><strong>Legal Compliance:</strong> Disclosure may occur to comply with legal obligations or protect user rights.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention</h2>
        <p className="mb-6">
          Data is retained only as long as required for healthcare documentation workflows or legal compliance. You may request permanent deletion of your submitted data at any time.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Security Measures</h2>
        <p className="mb-6">
          We employ encryption, access controls, and session monitoring to protect your data. While no system is perfectly secure, we follow industry best practices to minimize risk.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
        <p className="mb-6">
          Clairo uses cookies to manage session state and improve functionality. You may block cookies in your browser, but it may limit your ability to use the platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
        <p className="mb-6">
          Depending on your region, you may have the right to:
        </p>
        <ul className="list-disc pl-8 mb-6">
          <li>Access data we’ve processed on your behalf.</li>
          <li>Request correction or deletion of your personal information.</li>
          <li>Limit how your data is processed in certain cases.</li>
        </ul>
        <p className="mb-6">
          To exercise any of these rights, please email <strong>hello@Clairo.com</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Children’s Privacy</h2>
        <p className="mb-6">
          Clairo is not intended for users under 13 years of age. We do not knowingly collect or process data from children without parental or organizational consent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Policy Updates</h2>
        <p className="mb-6">
          This Privacy Policy may be updated as features change or regulations evolve. We will notify users of significant changes. Last updated: June 2025.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="mb-6">
          For privacy-related inquiries or compliance support, contact us at:
          <br />
          <strong>Email: hello@Clairo.com</strong>
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
