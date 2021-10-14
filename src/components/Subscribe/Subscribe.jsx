import React from 'react';
import styles from './Subscribe.module.scss';
import Button from '../Button';

function Subscribe() {
  return (
    <div className={styles.subscribe}>
      <h3 className={styles.title}>Subscribe to get lastest news update</h3>
      <p className={styles.text}>We recommended you to subscribe to our newspaper, enter your email below to get our daily update about us.</p>
      <form className={styles.input}>
        <input type="text" placeholder="Enter your email address" className={styles.input}/>
        <Button className={styles.button} title="Subscribe now" />
      </form>
    </div>
  )
}

export default Subscribe;