import React from 'react';
import Button from '../Button';
import styles from './FeedBack.module.scss';
import CardFeedback from '../CardFeedback/CardFeedback';

const cards = [
  {
    person: 'Jane Fooster',
    location: 'Oslo, Norwegia',
    grade: 5,
    text: 'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.',
    id: 1,
  },
  {
    person: 'Jane Fooster',
    location: 'Oslo, Norwegia',
    grade: 2,
    text: 'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described. ',
    id: 2,
  },
  {
    person: 'Jane Fooster',
    location: 'Oslo, Norwegia',
    grade: 5,
    text: 'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.',
    id: 3,
  },
  {
    person: 'Jane Fooster',
    location: 'Oslo, Norwegia',
    grade: 5,
    text: 'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.',
    id: 4,
  },
];

function FeedBack() {
  return (
    <div className={styles.feedback}>
      <h5 className={styles.subtitle}>FEEDBACK</h5>
      <h3 className={styles.title}>Feedback from our customers</h3>
      <div className={styles.items}>
        {cards.slice(0, 3).map((item) => (
          <CardFeedback {...item} key={item.id} />
        ))}
      </div>
      <Button title="More" className={styles.moreBtn}></Button>
    </div>
  );
}

export default FeedBack;
