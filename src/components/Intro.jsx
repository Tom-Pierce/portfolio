import styles from "../css/Intro.module.css";
import Socials from "./Socials";

const Intro = () => {
  return (
    <section className={styles.introSection}>
      <h1 className={styles.introIntro}>
        Hi, I&apos;m Tom | Software Developer
      </h1>
      <p className={styles.introMeText}>
        I love developing and designing web application, both front and back
        end. I&apos;m an eager learner who is excited to learn new skills.
      </p>
      <nav>
        <Socials />
        <a className={styles.cvLink} href="/CV.pdf">
          Curriculum Vitae
        </a>
      </nav>
    </section>
  );
};
export default Intro;
