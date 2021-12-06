import Button from '../Button';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../../consts';

const Header = observer(() => {
  const { user } = useContext(Context);
  const loginClick = () => user.setIsAuth(true);
  const history = useHistory();
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
      {user.isAuth ? (
        <div>
          <Button
            className={styles.login}
            onClick={() => history.push(ADMIN_ROUTE)}
            title="Admin"
          />
          <Button
            className={styles.login}
            onClick={() => history.push(LOGIN_ROUTE)}
            title="Logout"
          />
        </div>
      ) : (
        <Button className={styles.login} onClick={loginClick} title="Login" />
      )}
    </header>
  );
});

export default Header;
