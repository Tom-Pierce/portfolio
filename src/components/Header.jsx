import styles from "../css/Header.module.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <a href="/" className={styles.title}>
          TP
        </a>
        <NavBar />
      </header>
    </>
  );
};
export default Header;
