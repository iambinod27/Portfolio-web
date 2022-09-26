import ImageContent from "../assets/ImageContent.jpeg";
import { motion } from "framer-motion";
import { MdConstruction } from "react-icons/md";

const Landing = () => {
  return (
    <>
      <main className="container">
        <div className="mobile">
          <MdConstruction className="icons" fill="#eed202 " />
          Responsive Work In Progress
        </div>

        <section className="home">
          <motion.div
            whileInView={{ x: 0 }}
            initial={{ x: -100 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="textContent"
            viewport={{ once: true }}
          >
            <h2>Hey There!!! I'm Binod Frontend Developer.</h2>
            <p>I code beautifully simple things, and I love what I do.</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn"
            >
              <a href="./CV.pdf" className="download" download>
                Resume
              </a>
            </motion.button>
          </motion.div>
          <div className="ImageContent">
            <motion.img
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              initial={{ scale: 0.5, opacity: 0.4 }}
              transition={{ type: "spring", stiffness: 125 }}
              src={ImageContent}
              alt=""
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Landing;
