import Coding from "../assets/undraw_programming_re_kg9v.svg";
import { SiJavascript, SiRedux, SiWebpack } from "react-icons/si";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about" id="about">
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
          <article className="right-content">
            <div className="upperText">
              <p>
                Currently a student pursuing Bachelors in Computer Application.
                I'm passionate about web development and programming in general.
                I like to learn new emerging technologies and showcase my
                skills.
              </p>
              <p>
                I am proficient with HTML, CSS, Bootstrap, SASS, Javascript and
                framework like React JS, and more. I like to deliver high
                quality code as much as I can and make your Business Successful.
              </p>
            </div>
            <div className="downText">
              <h3>Skills:</h3>
              <div className="skillIcons">
                <AiFillHtml5 className="icons" title="HTML5" />
                <FaCss3Alt className="icons" title="CSS3" />
                <FaBootstrap className="icons" title="Bootstrap5" />
                <FaSass className="icons" title="Sass" />
                <SiJavascript className="icons" title="Javascript" />
                <FaReact className="icons" title="REACT" />
                <SiRedux className="icons" title="Redux" />
                <FaGithub className="icons" title="GITHUB" />
                <FaGitAlt className="icons" title="Git" />
                <SiWebpack className="icons" title="Webpack5" />
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
