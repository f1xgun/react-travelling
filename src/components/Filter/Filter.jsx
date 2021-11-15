import React from 'react';
import styles from './Filter.module.scss';
import Input from '../Input/Input.jsx';

function Filter() {
  return (
    <div className={styles.filter}>
      <ul>
        <li className={styles.mainItem}>
          <p className={styles.name}>Flying from?</p>
          <Input placeholder="Enter Derapture"/>
        </li>
        <li className={styles.mainItem}>
          <p className={styles.name}>Where to?</p>
          <Input placeholder="Enter Destination"/>
        </li>
        <li className={styles.mainItem}>
          <p className={styles.name}>When?</p>
          <Input placeholder="24/10/2021"/>
        </li>
        <li className={styles.mainItem}>
          <p className={styles.name}>For how long?</p>
          <Input placeholder="7 nights"/>
        </li>
        <li className={styles.item}>
          <div className={styles.itemMargin}>
            <p className={styles.name}>Adults</p>
            <Input placeholder="2"/>
          </div>
          <div>
            <p className={styles.name}>Children</p>
            <Input placeholder="0"/>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Filter;