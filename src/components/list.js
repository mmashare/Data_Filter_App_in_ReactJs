import ListItem from "./listitem"
import React from 'react'
import styles from "./list.module.css"

const List = ({list}) => {
  console.log(list)
  return (
    <div className={styles.divwrap}>
      
      {list.map((item)=>{
        return <ListItem key={item.id} item={item}/>
        })}
    </div>
  )
}

export default List