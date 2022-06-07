import React from 'react'
import styles from "./filterpanel.module.css"
import FilterListToggle from "./filterListToggle"
import {categoryList,ratingList} from "../data/index"
import Checkboxtoggle from "./checkboxtoggle"
import PriceSlider from "./priceSlider"

const FilterPanel = ({selectedCategory,selectToggle,selectedRating,selectRating,Cusines,changeCusines,selectedPrice,handleChangePrice}) => {
  
  console.log(handleChangePrice)
  return (
    <div>
     {/* category */}
     <div className={styles.inputgroup}>
       <p className={styles.label}>catrgory</p>
       <FilterListToggle data={categoryList} value={selectedCategory} selectToggle={selectToggle}/>
     </div>
     {/* Cusins */}

        <div className={styles.inputgroup}>
          <p className={styles.label}>Cusines</p>
          {Cusines.map((cusine)=>(
             <Checkboxtoggle key={cusine.id} changeChecked={changeCusines} Cusines={cusine} />
          ))}
        </div>

     {/* price filter */}
     
     <div className={styles.inputgroup}>
       <p className={styles.PriceRange}>Price Range</p>
            <PriceSlider value={selectedPrice} changedPrice={handleChangePrice}/>
     </div>
     
     {/* star rating */}
     <div className={styles.inputgroup}>
       {/* don't be confuse that why we use this component twice here / it just print the value u pass in it by props ye unnke button banadega and yaha hamne rating data as a prop beja hai  */}
     <p className={styles.ratinglabel}>Star Rating</p>
     <FilterListToggle data={ratingList} value={selectedRating} selectToggle={selectRating} />
     </div>
    </div>
  )
}

export default FilterPanel