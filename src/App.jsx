import "./css/reset.css";
import "./css/index.css";
import "./css/fonts.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  // set dark/light theme
  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={{ height: "100vh" }}>
        <Header />
        <About />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
