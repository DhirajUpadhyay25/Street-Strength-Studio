import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import AboutStudio from './components/AboutStudio';
import TrainingPrograms from './components/TrainingPrograms';
import TrainingExperience from './components/TrainingExperience';
import Gallery from './components/Gallery';
import RegistrationForm from './components/RegistrationForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ConnectingLines from './components/ui/ConnectingLines';

function App() {
  return (
    <>
      <ConnectingLines />
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <AboutStudio />
        <TrainingPrograms />
        <TrainingExperience />
        <Gallery />
        <RegistrationForm />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

export default App;