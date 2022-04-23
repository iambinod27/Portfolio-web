import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="wrapper-project">
      <div className="container">
        <section className="project">
          <h1>Some Project</h1>
          <div className="project-card">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
          <div className="button">
            <button className="btn">Load More</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
