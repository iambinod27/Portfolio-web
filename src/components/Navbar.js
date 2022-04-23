import { FaGithub, FaLinkedin } from "react-icons/fa";

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
              <li>Project</li>
              <li>About</li>
              <li>Contact</li>
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
