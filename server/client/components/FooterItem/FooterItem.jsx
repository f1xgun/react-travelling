import React from 'react';
import styles from './FooterItem.module.scss';

function FooterItem(props) {
  return (
    <div className={styles.footerItem}>
      <h5 className={styles.title}>{props.title}</h5>
      {props.links.map((category, index) => (
        <p className={styles.category} key={index}>{category}</p>
      ))}
    </div>
  )
}

export default FooterItem;