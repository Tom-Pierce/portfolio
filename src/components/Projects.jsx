import styles from "../css/Projects.module.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section>
      <h2 className={styles.title}>Projects</h2>
      <ul className={styles.projectList}>
        <li>
          <ProjectCard
            name={"ZipLink"}
            description={
              "Ziplink is a powerful tool for managing and sharing links. Whether you're looking to shorten URLs for social media posts, track the performance of marketing campaigns, or simply organize your bookmarks, Ziplink has you covered."
            }
            techStack={[
              "React",
              "NodeJS",
              "Express",
              "Javascript",
              "HTML",
              "CSS",
              "CSS Modules",
            ]}
            github={"https://github.com/Tom-Pierce/ziplink-client"}
            liveSite={"https://ziplink.xyz"}
          />
        </li>
        <li>
          <ProjectCard
            name={"ZipLink"}
            description={
              "Ziplink is a powerful tool for managing and sharing links. Whether you're looking to shorten URLs for social media posts, track the performance of marketing campaigns, or simply organize your bookmarks, Ziplink has you covered."
            }
            techStack={[
              "React",
              "NodeJS",
              "Express",
              "Javascript",
              "HTML",
              "CSS",
              "CSS Modules",
            ]}
            github={"https://github.com/Tom-Pierce/ziplink-client"}
            liveSite={"https://ziplink.xyz"}
          />
        </li>

        <li>
          <ProjectCard
            name={"ZipLink"}
            description={
              "Ziplink is a powerful tool for managing and sharing links. Whether you're looking to shorten URLs for social media posts, track the performance of marketing campaigns, or simply organize your bookmarks, Ziplink has you covered."
            }
            techStack={[
              "React",
              "NodeJS",
              "Express",
              "Javascript",
              "HTML",
              "CSS",
              "CSS Modules",
            ]}
            github={"https://github.com/Tom-Pierce/ziplink-client"}
            liveSite={"https://ziplink.xyz"}
          />
        </li>
      </ul>
    </section>
  );
};
export default Projects;
