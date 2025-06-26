import Hero from './components/Hero';
import FeatureSteps from './components/FeatureSteps'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

export default function Home() {
  return (
    <div>
      <Navbar />  {/* Render the Navbar component */}
      <Hero />  {/* Render the Hero component */}
      <FeatureSteps /> 
      <FAQ />
      <Footer /> {/* Render the FeatureSteps component */}
    </div>
  );
}
