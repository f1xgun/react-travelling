import React from 'react'
import styles from "./SortList.module.scss";
const SortListItem = ({ sortType, sortTypeText, setSortType }) => {
    const onItemClick = () => {
        setSortType(sortTypeText);
    }
    return (
        <li
            className={`${styles.sort} ${
                sortTypeText === sortType && styles.active
            }`}
            onClick={onItemClick}
        >
            {sortTypeText}
        </li>
    );
};

export default SortListItem
