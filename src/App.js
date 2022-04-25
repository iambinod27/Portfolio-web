import "./app.scss";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import About from "./components/About";
import Project from "./components/Project";

const App = () => {
  return (
    <>
      <Navbar />

      <Landing />

      <Project />

      <About />

      <Contact />
    </>
  );
};

export default App;
