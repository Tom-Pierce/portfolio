import { useState } from "react";
import styles from "../css/ProjectCard.module.css";
import PropTypes from "prop-types";

const ProjectCard = ({
  name,
  description,
  techStack,
  github,
  liveSite,
  projectImg,
}) => {
  const [clicked, setClicked] = useState(false);

  const imgClickHandler = (e) => {
    e.preventDefault();
    setClicked(!clicked);
  };

  return (
    <div className={styles.project}>
      <div className={styles.info}>
        <h2 className={styles.projectName}>{name}</h2>
        <ul className={styles.techStack}>
          {techStack.map((tech, index) => {
            return (
              <li key={`${tech}-${index}`} className={styles.tech}>
                {tech}
              </li>
            );
          })}
        </ul>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.links}>
          <a href={github} className={styles.link}>
            source code
          </a>
          <a href={liveSite} className={styles.link}>
            live site
          </a>
        </div>
      </div>
      <img
        src={projectImg}
        alt="project image"
        className={`${styles.previewImage} ${clicked ? styles.clicked : null}`}
        onClick={imgClickHandler}
      />
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
  github: PropTypes.string,
  liveSite: PropTypes.string,
  projectImg: PropTypes.string,
};

export default ProjectCard;
