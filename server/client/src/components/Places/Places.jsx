import React from 'react';
import styles from './Places.module.scss';
import CardPlaces from '../CardPlaces/CardPlaces';
import Button from '../Button';

const places = [
  { title: 'Candi Borobuddur, Magelang', tag: 'Temple', imageUrl: 'img/Places/1.jpg' },
  { title: 'Malioboro, Yogyakarta', tag: 'City Tour', imageUrl: 'img/Places/2.jpg' },
  { title: 'Balekambang, Malang', tag: 'Beach', imageUrl: 'img/Places/3.jpg' },
];

const countries = ['Indonesia', 'Swiss', 'Malaysia', 'Japan', 'Maldives'];

function Places() {
  return (
    <section className={styles.places}>
      <h5 className={styles.subtitle}>PLACES</h5>
      <div className={styles.navigation}>
        <h3 className={styles.title}>Explore new places with us </h3>
        <Button title="More" className={styles.moreBtn} />
      </div>
      <ul className={styles.selector}>
        {countries.map((obj, index) => (
          <li key={obj}>{obj}</li>
        ))}
      </ul>
      <div className={styles.cards}>
        {places.map((obj) => (
          <CardPlaces key={obj.title} title={obj.title} tag={obj.tag} imageUrl={obj.imageUrl} />
        ))}
      </div>
    </section>
  );
}

export default Places;
