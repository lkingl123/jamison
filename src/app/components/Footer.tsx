import Link from 'next/link';  

const Footer = () => (
  <footer className="bg-black text-white py-6">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Copyright Section */}
        <p className="text-center lg:text-left mb-4 lg:mb-0 text-sm">
          &copy; {new Date().getFullYear()} Clairo. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
          <Link href="/terms-of-service" className="hover:text-customIndigo transition duration-300">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="hover:text-customIndigo transition duration-300">
            Privacy Policy
          </Link>
          <Link href="/cookie-policy" className="hover:text-customIndigo transition duration-300">
            Cookie Policy
          </Link>
          <Link href="/contact-us" className="hover:text-customIndigo transition duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
