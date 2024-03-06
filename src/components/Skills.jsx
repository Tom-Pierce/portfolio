import styles from "../css/Skills.module.css";
import javascriptImg from "../assets/javascriptImg.png";
import htmlImg from "../assets/htmlImg.png";
import cssImg from "../assets/cssImg.png";
import reactImg from "../assets/reactImg.png";
import viteImg from "../assets/viteImg.png";
import expressImg from "../assets/expressImg.png";
import expressImgDark from "../assets/expressImgDark.png";
import nodeImg from "../assets/nodeImg.png";
import mongoDBImg from "../assets/mongoDBImg.png";
import mongooseImg from "../assets/mongooseImg.png";
import gitImg from "../assets/gitImg.png";
import githubImg from "../assets/githubImg.png";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="skills">
      <h2 className="title">- Skills</h2>
      <ul className={styles.skillList}>
        <li className={styles.skill}>
          <img src={javascriptImg} alt="javascript logo" />
          JavaScript
        </li>
        <li className={styles.skill}>
          <img src={htmlImg} alt="html logo" />
          HTML
        </li>
        <li className={styles.skill}>
          <img src={cssImg} alt="css logo" />
          CSS
        </li>
        <li className={styles.skill}>
          <img src={reactImg} alt="react logo" />
          React
        </li>
        <li className={styles.skill}>
          <img src={viteImg} alt="vite logo" />
          Vite
        </li>
        <li className={styles.skill}>
          {theme === "light" ? (
            <img src={expressImg} alt="express logo" />
          ) : (
            <img src={expressImgDark} alt="express logo" />
          )}
          ExpressJS
        </li>
        <li className={styles.skill}>
          <img src={nodeImg} alt="node logo" />
          Node
        </li>
        <li className={styles.skill}>
          <img src={mongoDBImg} alt="mongodb logo" />
          MongoDB
        </li>
        <li className={styles.skill}>
          <img src={mongooseImg} alt="mongooseJS logo" />
          MongooseJS
        </li>
        <li className={styles.skill}>
          <img src={gitImg} alt="git logo" />
          Git
        </li>
        <li className={styles.skill}>
          <img src={githubImg} alt="github logo" />
          GitHub
        </li>
      </ul>
    </section>
  );
};

export default Skills;
