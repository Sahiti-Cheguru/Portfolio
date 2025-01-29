import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { ExperienceSection } from "./components/experience/ExperienceSection";
import { Footer } from "./components/footer/Footer";
import { Preview } from "./components/Preview";
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeProvider } from "./components/ThemeProvider";
import { useTheme } from "./components/ThemeProvider";

function AppContent() {
  useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <ExperienceSection />
      <Projects />
      <Preview />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
