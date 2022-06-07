import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import styles from "./searchbar.module.css"


const SearchBar = ({value,changeInput}) => {

  
  return (
    <div className={styles.searchbarWrap}>
      
      <input type="text" placeholder='wooldland hills' value={value} onChange={changeInput}/>
      <SearchIcon className={styles.searchicon}/>
      
      </div>
  )
}

export default SearchBar