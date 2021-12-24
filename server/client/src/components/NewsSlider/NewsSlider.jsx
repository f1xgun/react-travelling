import React from "react";
import styles from "./NewsSlider.module.scss";
import CardNews from "../CardNews/CardNews";

const cards = [
  {
    title: "We announces partnership with UNESCO to promote cultural tourism",
    text: "Explore this playful",
    imageUrl: "img/News/1.jpg",
    id: 1,
  },
  {
    title: "The quirkiest roadside curiosities to inspire your next road trip.",
    text: "Explore this playful round-up of 16 amusing stays that double as roadside attractions for your next road trip in the United States.",
    imageUrl: "img/News/2.jpg",
    id: 2,
  },
  {
    title: "The quirkiest roadside curiosities to inspire your next road trip.",
    text: "Explore this playful round-up of 16 amusing stays that double as roadside attractions for your next road trip in the United States.",
    imageUrl: "img/News/3.jpg",
    id: 3,
  },
  {
    title: "4",
    text: "Explore this playful",
    imageUrl: "img/News/1.jpg",
    id: 4,
  },
  {
    title: "5",
    text: "Explore this playful",
    imageUrl: "img/News/2.jpg",
    id: 5,
  },
  {
    title: "6",
    text: "Explore this playful",
    imageUrl: "img/News/3.jpg",
    id: 6,
  },
];
function NewsSlider(props) {
  const [currentPage, setCurrentPage] = React.useState(0);

  const moveToNextPage = () => {
    const nextPage = currentPage + 1 >= cards.length / 3 ? 0 : currentPage + 1;
    setCurrentPage(nextPage);
  };

  const moveToPrevPage = () => {
    const nextPage = currentPage - 1 < 0 ? 0 : currentPage - 1;
    setCurrentPage(nextPage);
  };

  return (
    <section className={styles.news}>
      <h5 className={styles.subtitle}>NEWS</h5>
      <h3 className={styles.title}>Amazing offers and updates</h3>

      <div className={styles.items}>
        {cards.slice(currentPage * 3, currentPage * 3 + 3).map((item) => (
          <CardNews {...item} key={item.id} />
        ))}
      </div>
      <div className={styles.btnsSlider}>
        <button className="arrowLeft" onClick={moveToPrevPage}>
          <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 16L9.41 14.59L3.83 9L24 9V7L3.83 7L9.42 1.42L8 0L0 8L8 16Z"
              fill="#F85A47"
            />
          </svg>
        </button>
        <button className="arrowRight" onClick={moveToNextPage}>
          <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z"
              fill="#F85A47"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default NewsSlider;
