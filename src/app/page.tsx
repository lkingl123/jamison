import Hero from './components/Hero';
import FeatureSteps from './components/FeatureSteps';  // Import the FeatureSteps component
import Navbar from './components/Navbar';
import Footer from './components/Footer';  // Import the Footer component

export default function Home() {
  return (
    <div>
      <Navbar />  {/* Render the Navbar component */}
      <Hero />  {/* Render the Hero component */}
      <FeatureSteps /> 
      <Footer /> {/* Render the FeatureSteps component */}
    </div>
  );
}
