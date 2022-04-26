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
              {links.map((list) => {
                return (
                  <motion.li whileTap={{ scale: 0.91 }} key={list.id}>
                    <a href={list.linked}>{list.linkName}</a>
                  </motion.li>
                );
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

const links = [
  { id: 1, linkName: "Project", linked: "#project" },
  {
    id: 2,
    linkName: "About",
    linked: "#about",
  },
  {
    id: 3,
    linkName: "Contact",
    linked: "#contact",
  },
];

export default Navbar;
