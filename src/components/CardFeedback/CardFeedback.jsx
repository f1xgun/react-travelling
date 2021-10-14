import React from 'react';
import styles from './CardFeedback.module.scss'

function CardFeedback(props) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.person}>
          <img className={styles.img} src="img/FeedBack/1.png" alt="Person img"/>
          <div className={styles.info}>
            <p className={styles.name}>{props.person}</p>
            <p className={styles.location}>{props.location}</p>
          </div>
        </div>
        <div className={styles.grade}>
          {props.grade}
        </div>
        <p className={styles.text}>{props.text}</p>
      </div>
    </div>
  )
}

export default CardFeedback;