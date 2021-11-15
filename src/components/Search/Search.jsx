import React, {useState} from 'react';
import styles from './Search.module.scss';

function Search() {

  const [searchQuery, setSearchQuery] = useState('')
  
  return (
    <form className={styles.search}>
      <img src='img/searchIcon.png' className={styles.searchIcon} alt="Search field"/>
      <input type="search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search by name" className={styles.input}></input>
    </form>
  )
}

export default Search;