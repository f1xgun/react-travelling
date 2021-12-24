import React from 'react';
import styles from './Information.module.scss';
import Button from '../Button';
import { NavLink } from 'react-router-dom';

function Information() {
  return (
    <section className={styles.information}>
      <h1 className={styles.title}>
        Your <span>Dream Holiday</span> is Waiting for you{' '}
      </h1>
      <p className={styles.text}>
        Find your favorite vacation for your story arround the glob and make your trip meaning full.
      </p>
      <ul className={styles.offer}>
        <li>
          <h4>Location</h4>
          <p>Indonesia</p>
        </li>
        <li>
          <h4>Date</h4>
          <p>Wed, 3 Nov 2021</p>
        </li>
        <li>
          <h4>Range Price</h4>
          <p>$200 - $600</p>
        </li>
        <li>
          <NavLink to="/place">
            <Button title="Search" className={styles.searchBtn} />
          </NavLink>
        </li>
      </ul>
      <img className={styles.bg} src="img/info__bg.png" alt="Beach" />
    </section>
  );
}

export default Information;
