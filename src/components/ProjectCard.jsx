import styles from "../css/ProjectCard.module.css";
import PropTypes from "prop-types";

const ProjectCard = ({ name, description, techStack, github, liveSite }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.projectName}>{name}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <ul className={styles.techStack}>
        {techStack.map((tech) => {
          return <li key={tech}>{tech}</li>;
        })}
      </ul>
      <a href={github}>github</a>
      <a href={liveSite}>live site</a>
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
  github: PropTypes.string,
  liveSite: PropTypes.string,
};

export default ProjectCard;
