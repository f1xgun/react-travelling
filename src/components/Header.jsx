import Button from "./Button";
import styles from "./Header.module.scss";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/img/logo.svg" alt="Logo" />
        <h2>
          Way<span>farer</span>
        </h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.active}>Home</li>
        <li>Place</li>
        <li>News</li>
        <li>Feedback</li>
      </ul>
      <Button className={styles.login} title="Login" />
    </header>
  );
}

export default Header;
