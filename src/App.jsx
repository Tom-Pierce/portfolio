import "./css/reset.css";
import "./css/index.css";
import "./css/fonts.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
