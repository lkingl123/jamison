import './globals.css';
import NotificationBar from './components/NotificationBar';
import Navbar from './components/Navbar';
import SpinnerWrapper from "./components/SpinnerWrapper";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import FAQ from "./components/FAQ";
import CookieBanner from "./components/CookieBanner";

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
      <body className="vsc-initialized flex flex-col min-h-screen">
        <NotificationBar />
        <Navbar />
        
        {/* Main Content */}
        <div className="flex-grow">
          <SpinnerWrapper>{children}</SpinnerWrapper>
        </div>
        <FAQ />
        {/* ChatBot */}
        <div className="relative z-30">
          <ChatBot />
        </div>

      <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
