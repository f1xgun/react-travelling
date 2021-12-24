import styles from './SortList.module.scss';
import SortListItem from './SortListItem';

function SortList({ sortType, setSortType }) {

    return (
        <div className={styles.list}>
            <p className={styles.title}>Sort by:</p>
            <ul className={styles.options} activeClassName={styles.active}>
                <SortListItem
                    setSortType={setSortType}
                    sortType={sortType}
                    sortTypeText="popularity"
                />
                <SortListItem
                    setSortType={setSortType}
                    sortType={sortType}
                    sortTypeText="profit"
                />
                <SortListItem
                    setSortType={setSortType}
                    sortType={sortType}
                    sortTypeText="price"
                />
                <SortListItem
                    setSortType={setSortType}
                    sortType={sortType}
                    sortTypeText="number"
                />
            </ul>
        </div>
    );
}

export default SortList;