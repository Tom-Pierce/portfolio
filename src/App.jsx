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
      <div style={{ height: "100vh" }}>
        <Header />
        <About />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
