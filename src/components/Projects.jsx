import styles from "../css/Projects.module.css";
import ProjectCard from "./ProjectCard";
import ZipLinkImg from "../assets/ziplinkImg.png";

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className="title">- Projects</h2>
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
              "MongoDb",
              "CSS",
              "HTML",
              "Javascript",
              "CSS Modules",
              "MongooseJS",
            ]}
            github={"https://github.com/Tom-Pierce/ziplink-client"}
            liveSite={"https://ziplink.xyz"}
            projectImg={ZipLinkImg}
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
              "CSS",
              "HTML",
              "MongoDb",
            ]}
            github={"https://github.com/Tom-Pierce/ziplink-client"}
            liveSite={"https://ziplink.xyz"}
            projectImg={ZipLinkImg}
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
              "Express",
              "MongoDb",
              "NodeJS",
              "HTML",
              "CSS",
              "Javascript",
            ]}
            github={"https://github.com/Tom-Pierce/ziplink-client"}
            liveSite={"https://ziplink.xyz"}
            projectImg={ZipLinkImg}
          />
        </li>
      </ul>
    </section>
  );
};
export default Projects;
