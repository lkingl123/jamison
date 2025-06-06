import Link from 'next/link';

const ContactUs = () => {
  return (
    <main className="px-6 py-12 bg-gray-50">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Support Section */}
          <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-white mb-2">SUPPORT</h3>
            <p className="text-lg font-bold text-white mb-4">support@Clairo.com</p>
            <p className="text-teal-100">
              Reach us here for any issues or requests. We're here to help.
            </p>
          </div>

          {/* Info Section */}
          <div className="bg-gradient-to-r from-teal-600 to-black p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-white mb-2">INFO</h3>
            <p className="text-lg font-bold text-white mb-4">hello@Clairo.com</p>
            <p className="text-cyan-100">
              Drop us a line if you have suggestions or general questions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
