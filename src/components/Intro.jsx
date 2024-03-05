import styles from "../css/Intro.module.css";
import Socials from "./Socials";

const Intro = () => {
  return (
    <section className={styles.introSection}>
      <h1 className={styles.introIntro}>
        Hi, I&apos;m Tom | Software Developer
      </h1>
      <p className={styles.introMeText}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quidem
        est obcaecati culpa deleniti, reprehenderit ullam minima illum cumque
        aperiam facere. Perferendis rem facilis possimus atque consequuntur sunt
        ipsa sapiente.
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
