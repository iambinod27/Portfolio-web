import ProjectCard from "./ProjectCard";
import Button from "./Button";

const Project = () => {
  return (
    <div className="wrapper-project">
      <div className="container">
        <section className="project">
          <h1>Some Project</h1>
          <div className="project-card">
            {project.map((item) => {
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
            <Button text="Load More" />
          </div>
        </section>
      </div>
    </div>
  );
};

const project = [
  {
    id: 2,
    title: "Jonathan Specter(Landing Page)",
    image: "./images/JonathanSpecter.png",
    link: "https://johnathan-specter-porfolio.netlify.app",
  },
  {
    id: 1,
    title: "Simple Weather App",
    image: "./images/WeatherApp.png",
    link: "https://iambinod27.github.io/simple-weather-app-react/",
  },
  {
    id: 3,
    title: "Blog App",
    image: "./images/BlogApp.png",
    link: "https://unifeed-grid.netlify.app/",
  },
];

export default Project;
