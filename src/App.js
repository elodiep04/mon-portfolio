import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Expertise />
      <Projects />
    </div>
  );
}

export default App;
