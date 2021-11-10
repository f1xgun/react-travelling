import styles from './SortList.module.scss';

function SortList() {
  return (
    <div className={styles.list}>
      <p className={styles.title}>Sort by:</p>
      <ul className={styles.options} activeClassName={styles.active}>
        <li className={styles.sort}>
          popularity
        </li>
        <li className={styles.sort}>
          profit
        </li>
        <li className={styles.sort}>
          price
        </li>
        <li className={styles.sort}>
          number
        </li>
      </ul>
    </div>
  )
}

export default SortList;