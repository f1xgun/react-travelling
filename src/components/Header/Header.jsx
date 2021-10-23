import Button from "../Button";
import styles from "./Header.module.scss";
import { Switch, Route, NavLink } from "react-router-dom";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="img/logo.svg" alt="Logo" />
        <h2>
          Way<span>farer</span>
        </h2>
      </div>
      <ul className={styles.links}>
        <NavLink to="/home" activeClassName={styles.active}>
          <li>Home</li>
        </NavLink>

        <NavLink to="/place" activeClassName={styles.active}>
          <li>Place</li>
        </NavLink>

        <NavLink to="/news" activeClassName={styles.active}>
          <li>News</li>
        </NavLink>

        <NavLink to="/feedback" activeClassName={styles.active}>
          <li>Feedback</li>
        </NavLink>
      </ul>
      <Button className={styles.login} title="Login" />
    </header>
  );
}

export default Header;
