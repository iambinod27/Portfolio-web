import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";
import project from "../utils/projectStore";

const Project = () => {
  const [visible, setVisible] = useState(3);

  const onLoadMore = () => {
    setVisible((prevItem) => prevItem + 1);
  };
  return (
    <div className="wrapper-project">
      <div className="container">
        <section className="project" id="project">
          <h1>Some Projects</h1>
          <div className="project-card">
            {project.slice(0, visible).map((item) => {
              return (
                <ProjectCard
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  link={item.link}
                />
              );
            })}
          </div>
          <div className="button">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onLoadMore}
              className={project.length === visible ? "hide" : "btn"}
            >
              Load More
            </motion.button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
