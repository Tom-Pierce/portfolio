import styles from "../css/Footer.module.css";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.description}>
        <h2 className={styles.name}>Tom Pierce</h2>
        <p>Built and designed by Tom Pierce</p>
        <a href="mailto:tompierce4@gmail.com">tompierce4@gmail.com</a>
      </div>
      <div className={styles.socialsWrapper}>
        <Socials />
      </div>
    </footer>
  );
};
export default Footer;
