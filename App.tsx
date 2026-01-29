import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HexagonFeature from './components/HexagonFeature';
import FeatureSplit from './components/FeatureSplit';
import UseCases from './components/UseCases';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black">
      <div className="noise-overlay"></div>
      <Header />
      <main>
        <Hero />
        <UseCases />
        <FeatureSplit />
        <HexagonFeature />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;