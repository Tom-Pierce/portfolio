import styles from "../css/About.module.css";
import Socials from "./Socials";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.aboutIntro}>
        Hi, I&apos;m Tom | Software Developer
      </h1>
      <p className={styles.aboutMeText}>
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
export default About;
