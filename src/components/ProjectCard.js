import BlogApp from "../assets/JonathanSpecter.png";

const ProjectCard = ({ title, image }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={BlogApp} alt="" />
      </div>
      <div className="card-title">
        <h3>Simple Weather App</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
