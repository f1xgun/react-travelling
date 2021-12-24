import React from 'react';
import styles from './Footer.module.scss';
import FooterItem from '../FooterItem/FooterItem.jsx';

const categories = [
  {
    title: 'Product',
    links: ['Overview', 'Pricing', 'Releases'],
  },
  {
    title: 'Company',
    links: ['About', 'Press', 'Careers', 'Contact', 'Partners'],
  },
  {
    title: 'Legal',
    links: ['Cookies Policy', 'Privacy Policy', 'Terms of Service', 'Law Enforcement', 'Status'],
  },
  {
    title: 'Follow us',
    links: ['Facebook', 'Twitter', 'Instagram'],
  },
];

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <ul className={styles.list}>
          {categories.map((obj) => (
            <FooterItem key={obj.title} {...obj} />
          ))}
        </ul>
        <h2 className={styles.logo}>
          Way<span>farer</span>
        </h2>
        <p className={styles.conclusion}>© 2021 Wayfarer Inc. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
