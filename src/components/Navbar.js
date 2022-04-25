import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="left-nav">
            <h1>Binod</h1>
          </div>
          <div className="right-nav">
            <ul>
              {["Project", "About", "Contact"].map((list) => {
                return <motion.li whileTap={{ scale: 0.91 }}>{list}</motion.li>;
              })}
            </ul>

            <div className="social-links">
              <FaGithub className="icons" />
              <FaLinkedin className="icons" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
