import React from 'react';
import { useHistory } from 'react-router';
import { HOTEL_ROUTE } from '../../consts.js';
import Button from '../Button.jsx';
import styles from './HotelCard.module.scss';

function HotelCard(props) {
  const history = useHistory();
  let gradeStars = [];
  let star = (
    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.5 0L14.0819 7.60081H22.4371L15.6776 12.2984L18.2595 19.8992L11.5 15.2016L4.74047 19.8992L7.32238 12.2984L0.56285 7.60081H8.91809L11.5 0Z"
        fill="black"
      />
    </svg>
  );

  for (let i = 0; i < props.rating; i++) gradeStars.push(star);

  return (
    <div className={styles.card} onClick={() => history.push(HOTEL_ROUTE + '/' + props.id)}>
      <img src={`http://localhost:5000/` + props.img} className={styles.img} alt={props.name} />
      <div className={styles.content}>
        <div>
          <div className={styles.information}>
            <h4 className={styles.name}>{props.name}</h4>
            <div className={styles.grade}>{gradeStars}</div>
          </div>

          <p className={styles.place}>{props.cityId}</p>
        </div>
        <span>{props.price}</span>
        <div className={styles.flex}>
          <p className={styles.reviews}>{props.reviewsCount} reviews</p>
          <Button className={styles.button} title="See avalibility" />
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
