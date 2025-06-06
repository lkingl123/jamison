import Link from 'next/link';

const TermsOfService = () => {
  return (
    <main className="px-6 py-10 bg-gray-100">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8">Terms of Service</h1>

        <p className="mb-6">
          These Terms of Service govern access to and use of <strong>Clairo</strong>, a web-based assistant for reviewing and validating patient intake data. By accessing or using the platform, Users agree to comply with these Terms.
        </p>

        <p className="mb-6">
          Please review these Terms carefully. Continued use of Clairo indicates acceptance. If you do not agree, you must not use the platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Purpose of Service</h2>
        <p className="mb-6">
          Clairo is intended to assist healthcare staff by parsing hospital face sheet documents, identifying missing or invalid information, and generating data summaries for medical billing, intake, and insurance workflows.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">User Responsibilities</h2>
        <ul className="list-disc pl-8 mb-6">
          <li>Users must handle patient data in accordance with applicable laws and organizational policies.</li>
          <li>Clairo should only be used by trained or authorized healthcare or administrative personnel.</li>
          <li>Users must maintain confidentiality and security of login credentials and protected health information (PHI).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">HIPAA Compliance</h2>
        <p className="mb-6">
          Clairo is designed with privacy and security in mind. However, final responsibility for HIPAA compliance remains with the covered entity or provider organization. Users must ensure that any uploaded documents do not violate patient confidentiality without proper authorization.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Account Usage</h2>
        <p className="mb-6">
          Access to Clairo may require account registration. Users agree to provide accurate information and are responsible for safeguarding their account and all activity under it.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Service Availability</h2>
        <p className="mb-6">
          While we strive for 24/7 uptime, Clairo may occasionally be unavailable due to maintenance, system updates, or technical issues. We are not liable for any disruptions that may impact workflow.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitations of Use</h2>
        <p className="mb-6">
          Users may not use Clairo for unlawful purposes, to process non-authorized PHI, or to upload files containing harmful or malicious content.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Ownership</h2>
        <p className="mb-6">
          All uploaded content remains the property of the User or their organization. Clairo does not claim ownership but may temporarily process data for the purpose of summary generation. Only explicitly approved summaries are stored.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Liability</h2>
        <p className="mb-6">
          The use of Clairo is provided “as-is.” We are not liable for damages resulting from incorrect data processing, user error, or regulatory non-compliance. Final review and approval of data remain the User’s responsibility.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
        <p className="mb-6">
          Users may request termination of their access at any time. We reserve the right to suspend or terminate accounts for violation of these Terms or for activities that compromise platform integrity or patient privacy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
        <p className="mb-6">
          We may update these Terms to reflect legal or operational changes. Users will be notified of material updates, and continued use of Clairo after changes constitutes acceptance.
        </p>

        <p className="mb-6">
          For any questions or compliance concerns, please contact:
          <br />
          <strong>Email: hello@Clairo.com</strong>
        </p>
      </div>
    </main>
  );
};

export default TermsOfService;
