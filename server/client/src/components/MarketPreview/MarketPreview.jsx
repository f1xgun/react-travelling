import React from 'react';
import styles from './MarketPreview.module.scss';

function MarketPreview() {
  return (
    <div className={styles.bg}>
      <img src="img/marketBg.jpg" alt="background" />
      <div className={styles.content}>
        <img src="img/plane.png" alt="plane" className={styles.titleImg} />
        <h3 className={styles.title}>
          Market<span>App</span> Client
        </h3>
      </div>
    </div>
  );
}

export default MarketPreview;
