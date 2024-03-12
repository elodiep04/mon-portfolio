import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Expertise />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
