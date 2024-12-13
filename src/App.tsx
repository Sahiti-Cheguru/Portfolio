import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { CursorEffect } from './components/CursorEffect';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <CursorEffect />
      <Navigation />
      <Hero />
      <About />
      <ExperienceSection />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;