import styles from "../css/AboutMe.module.css";

const AboutMe = () => {
  return (
    <section id="about-me">
      <h2 className="title">- About Me</h2>
      <p className={styles.bold}>I am a self-taught developer</p>
      <p>
        I have followed The Odin Project curriculum to teach myself web
        development.
      </p>
      <p>
        I have spent the past few months learning all about web development and
        software engineering. I am an initiative and fast learner which has
        helped me in software development journey.
      </p>
    </section>
  );
};

export default AboutMe;
