import React from 'react'
import styles from "./listitem.module.css"

const ListItem = ({item:{coverSrc,title,price,deliveryFee,serviceTime,rating}}) => {
   
  return (
    <div className={styles.listitemwrap}>
        <img src={coverSrc} alt="item" />
        <header>
            <h4>{title}</h4>
            <span>{rating}</span>
        </header>
        <footer>
            <p>
                <b>{serviceTime}</b> <span>fee ${deliveryFee}</span>
            </p>
            <p>
                <b>${price}</b>
            </p>
        </footer>
    </div>
  )
}

export default ListItem