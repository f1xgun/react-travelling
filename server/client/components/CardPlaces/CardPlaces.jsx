import styles from './Card.module.scss'

function Card(props) {
  return (
    <div className={styles.card}>
      <img className={styles.img} alt={props.title} src={props.imageUrl}></img>
      <p className={styles.tag}>{props.tag}</p>
      <h5 className={styles.title}>{props.title}</h5>
    </div>
  )
}

export default Card;