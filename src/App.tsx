import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { ExperienceSection } from "./components/experience/ExperienceSection";
import { CursorEffect } from "./components/CursorEffect";
import { Footer } from "./components/footer/Footer";
import { Preview } from "./components/Preview";
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeProvider } from "./components/ThemeProvider";
import { Chatbot } from "./components/Chatbot";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <CursorEffect />
        <Navigation />
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Preview />
        <Footer />
        <ScrollToTop />
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}

export default App;
