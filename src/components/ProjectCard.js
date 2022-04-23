const ProjectCard = ({ title, image, link }) => {
  return (
    <div className="card">
      <div className="card-img">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} alt={title} />
        </a>
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
