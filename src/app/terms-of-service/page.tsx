import Link from 'next/link';

const TermsOfService = () => {
  return (
    <>
      <main className="px-6 py-10 bg-gray-100">
        <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-8">Terms of Service</h1>

          <p className="mb-6">
            These Terms govern the use of Jamison, and any other related Agreement or legal relationship with the Owner in a legally binding way. Capitalized words are defined in the relevant dedicated section of this document.
          </p>

          <p className="mb-6">
            Please read this document carefully. By using Jamison, Users confirm their agreement to these terms. If you do not agree to these terms, please do not use the service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Important Information</h2>
          <p className="mb-6">
            Users acknowledge that Jamison may be provided via third parties (e.g., the Apple App Store) and those parties may enforce these terms as third-party beneficiaries.
          </p>

          <p className="mb-6">
            Nothing in these Terms creates any relationship of employment, agency, or partnership between the involved parties.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">User Rights & Responsibilities</h2>
          <p className="mb-6">
            Users are responsible for ensuring they meet the following requirements:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>Users must be over 14 years old. Minors may only use Jamison under adult supervision.</li>
            <li>Users must not be located in a country under U.S. embargo or listed as "terrorist-supporting" by the U.S. Government.</li>
            <li>Users must not be on any restricted U.S. Government list.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Account Registration</h2>
          <p className="mb-6">
            Users may need to create an account to use certain features of the service. They must provide truthful and accurate information and keep login credentials confidential. For security reasons, Users should choose strong passwords.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Termination and Suspension</h2>
          <p className="mb-6">
            Users may terminate their account at any time through the provided tools or by contacting the Owner. The Owner may suspend or delete User accounts if the Terms are violated.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Content Ownership</h2>
          <p className="mb-6">
            All content available on Jamison is owned by the Owner or its licensors. Users may not use such content beyond the intended scope of the Service. Users may be granted permission to share or download specific content for personal use.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Liability and Indemnification</h2>
          <p className="mb-6">
            Users agree to indemnify the Owner against any claims arising from their use of Jamison or violations of the Terms. The Owner’s liability is limited, and Users agree to hold the Owner harmless from any damages resulting from misuse.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Refund and Cancellation Policy</h2>
          <p className="mb-6">
            Users can cancel their subscription at any time. Refunds are available for customers who are not satisfied with the service, subject to certain conditions. Details are available in the refund policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
          <p className="mb-6">
            These Terms are governed by the laws of the country where the Owner is based. Users in certain regions may have additional rights under their local laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to These Terms</h2>
          <p className="mb-6">
            The Owner reserves the right to amend these Terms. Users will be notified of changes, and continued use of the Service will constitute acceptance of the updated Terms.
          </p>

          <p className="mb-6">
            For any questions or concerns regarding these Terms, please contact us at:
            <br />
            <strong>Owner contact email: hello@Jamison.com</strong>
          </p>
        </div>
      </main>
    </>
  );
};

export default TermsOfService;
