import ImageContent from "../assets/ImageContent.jpeg";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <>
      <div className="container">
        <section className="home">
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: -100 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="textContent"
          >
            <h2>HELLO! I'm Binod. I am Frontend Developer.</h2>
            <p>I code beautifully simple things, and I love what I do.</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn"
            >
              <a href="./CV.pdf" className="download" download>
                Download Resume
              </a>
            </motion.button>
          </motion.div>
          <div className="ImageContent">
            <motion.img
              animate={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.5, opacity: 0.4 }}
              transition={{ type: "spring", stiffness: 125 }}
              src={ImageContent}
              alt=""
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
