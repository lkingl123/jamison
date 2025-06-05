import Hero from './components/Hero';
import FeatureSteps from './components/FeatureSteps';  // Import the FeatureSteps component

export default function Home() {
  return (
    <div>
      <Hero />  {/* Render the Hero component */}
      <FeatureSteps />  {/* Render the FeatureSteps component */}
    </div>
  );
}
