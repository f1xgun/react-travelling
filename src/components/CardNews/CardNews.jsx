import styles from './CardNews.module.scss';

function CardNews(props) {
  return (
    <div className={styles.card}>
      <img className={styles.img} alt={props.title} src={`/img/${props.imageUrl}`}></img>
      <div className="content">
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.text}>{props.text}</p>
        <a href="#" className={styles.link}>read more</a>
      </div>
    </div>
  )
}

export default CardNews;