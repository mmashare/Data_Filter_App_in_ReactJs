import React from 'react'
import styles from "./emptyView.module.css"

const EmptyView = () => {
  return (
    <div className={styles.emptyViewWrap}>
        <img src="/images/gif/empty.gif" alt="No items" />
    </div>
  )
}

export default EmptyView