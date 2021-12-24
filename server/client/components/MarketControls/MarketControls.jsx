import React from 'react';
import SortList from '../SortList/SortList';
import styles from './MarketControls.module.scss';

const MarketControls = ({ searchValue, setSearchValue, sortType, setSortType }) => {
  const onSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '105px',
      }}>
      <form className={styles.search}>
        <img src="img/searchIcon.png" className={styles.searchIcon} alt="Search field" />
        <input type="text" value={searchValue} onChange={onSearchInput} className={styles.input} />
      </form>
      <SortList sortType={sortType} setSortType={setSortType} />
    </div>
  );
};

export default MarketControls;
