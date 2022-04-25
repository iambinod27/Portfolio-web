import { motion } from "framer-motion";

const ProjectCard = ({ title, image, link }) => {
  return (
    <motion.div
      whileInView={{ scale: 1 }}
      initial={{ scale: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.04 }}
      className="card"
    >
      <div className="card-img">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} alt={title} />
        </a>
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
