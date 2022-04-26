import "./app.scss";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import About from "./components/About";
import Project from "./components/Project";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Navbar />

      <Landing />

      <Project />

      <About />

      <Contact />

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />

      <ScrollToTop />
    </>
  );
};

export default App;
