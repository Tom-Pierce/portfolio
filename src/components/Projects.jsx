import styles from "../css/Projects.module.css";
import ProjectCard from "./ProjectCard";
import zipLinkImg from "../assets/ziplinkImg.png";
import stockTrackerImg from "../assets/stockTrackerImg.png";
import greedSolverImg from "../assets/greedSolverImg.png";

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
            projectImg={zipLinkImg}
          />
        </li>
        <li>
          <ProjectCard
            name={"StockTracker"}
            description={
              "StockTracker is a tool to keep track of your trading positions with real time share values and data. User friendly portfolio management allows anybody to pick up this tool and start using it immediately"
            }
            techStack={[
              "NodeJS",
              "Express",
              "React",
              "CSS",
              "Javascript",
              "HTML",
              "MongooseJS",
              "MongoDb",
              "FinnHub API",
              "CSS Modules",
            ]}
            github={"https://github.com/Tom-Pierce/ziplink-client"}
            liveSite={"https://ziplink.xyz"}
            projectImg={stockTrackerImg}
          />
        </li>

        <li>
          <ProjectCard
            name={"Greed Solver"}
            description={
              "Greed solver is a python program that runs through every possible path for an input board and prints out the longest and highest scoring path possible. It uses a recursive method to traverse all paths similar to traversing a binary tree"
            }
            techStack={["Python"]}
            github={"https://github.com/Tom-Pierce/greed-solver"}
            projectImg={greedSolverImg}
          />
        </li>
      </ul>
    </section>
  );
};
export default Projects;
