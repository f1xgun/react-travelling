import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Context } from '../../index';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../consts';
import { login, registration } from '../../http/userAPI';
import styles from './Auth.module.scss';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className={styles.container} style={{ height: window.innerHeight - 54 }}>
      <div className={styles.card}>
        <h2 className={styles.title}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <form className={styles.form}>
          <input
            className={styles.input}
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.input}
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <div className={styles.info}>
            {isLogin ? (
              <div className={styles.infoText}>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
              </div>
            ) : (
              <div className={styles.infoText}>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            )}
            <button className={styles.btn} onClick={click}>
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default Auth;
