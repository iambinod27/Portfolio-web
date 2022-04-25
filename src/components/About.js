import Coding from "../assets/undraw_programming_re_kg9v.svg";
import { SiJavascript, SiRedux } from "react-icons/si";
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h1>About Me</h1>
        <motion.div
          className="aboutSection"
          whileInView={{ x: 0 }}
          initial={{ x: 100 }}
          viewport={{ once: true }}
        >
          <div className="left-img">
            <motion.img
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.5 }}
              viewport={{ once: true }}
              src={Coding}
              alt="Coder"
            />
          </div>
          <div className="right-content">
            <div className="upperText">
              <p>
                Currently a student pursuing bachelors in Computer Application.
                I'm passionate about web development and programming in general.
                I like to learn new emerging technologies and showcase my
                skills.
              </p>
              <p>
                I am proficient with html, css, javascript react js, node js and
                more. I like to deliver high quality code as much as i can.
              </p>
            </div>
            <div className="downText">
              <h3>Skills:</h3>
              <div className="skillIcons">
                <SiJavascript className="icons" />
                <FaReact className="icons" />
                <SiRedux className="icons" />
                <FaGithub className="icons" />
                <FaGitAlt className="icons" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
