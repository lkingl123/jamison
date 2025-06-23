import './globals.css';
import NotificationBar from './components/NotificationBar';
import Navbar from './components/Navbar';
import SpinnerWrapper from './components/SpinnerWrapper';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import FAQ from './components/FAQ';
import CookieBanner from './components/CookieBanner';
import { FirebaseAuthProvider } from './context/FirebaseAuthContext'; 

export const metadata = {
  title: 'Clairo – AI-Powered Healthcare Intake Assistant',
  description:
    'Clairo helps healthcare professionals process face sheets, validate insurance, and streamline patient intake with AI-powered document review and smart summaries.',
  icons: {
    icon: '/talk-edge.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        suppressHydrationWarning // Suppresses hydration mismatch warning during development
      >
        {/* Wrap the application with AuthProvider */}
        <SpinnerWrapper><FirebaseAuthProvider>{children}</FirebaseAuthProvider></SpinnerWrapper>
      </body>
    </html>
  );
}
