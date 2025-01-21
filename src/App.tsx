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
import AnimatedCursor from "react-animated-cursor";
import { useTheme } from "./components/ThemeProvider";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Only show cursor on non-touch devices */}
      {typeof window !== "undefined" && !("ontouchstart" in window) && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          color={theme === "dark" ? "255, 255, 255" : "0, 0, 0"}
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={2.5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
          outerStyle={{
            border: "2px solid currentColor",
            mixBlendMode: "exclusion",
          }}
          innerStyle={{
            backgroundColor: "currentColor",
            mixBlendMode: "exclusion",
          }}
        />
      )}
      <CursorEffect />
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
