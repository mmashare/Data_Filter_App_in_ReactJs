import React from 'react'
import ToggleButton from "@material-ui/lab/ToggleButton"
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"
import {makeStyles} from "@material-ui/core/styles"

const useStyle = makeStyles({
  root :{
    width:"100%",
    justifyContent : "space-between"
  },
  child:{
    fontFamily : `"Raleway",sans-sarif`,
    fontSize : ".8rem",
    border:"1px solid rgba(0,0,0,0.12)",
    borderRadius:"10px",
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)":{
      borderRadius:"10px"
    },
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)":{
      borderRadius:"10px",
      border: "1px solid rgba(0,0,0,0,12)", 
    },
    // ye mui-selected class bhot jaruri hai ye apne app click karne vale button ko select karke usspe ye effect dal degi
    "&.Mui-selected":{
     
      borderRadius: "10px",
      background:"#000",
      color:"#fff",
    },
    "&.MuiToggleButton-root":{
      "&:hover":{
        background:"#000",
        color:"#fff"
      },
    },


  },
})

const FilterListToggle = ({data,value,selectToggle}) => {
  const classes = useStyle()
  return (
    // toggleButtongroup ye mui deti hai ye sare element ko ek group me bat ta hai
    // app isse ek div ke ander bhi use kar sakte hai,but usska jayada use nhi hai yaha
    <ToggleButtonGroup
    value={value}
    onChange={selectToggle}
    className={classes.root}
    exclusive   // ye exclusive option material ui deta hai how it work(if you click on one item it select it only and unselect other element in that div)
    >
        
        {/* ye {label,id,value} hamari key hai joo hamne data filder ke file ke ander banii hai */}
        
        {data.map((d)=>{
          return (
            // toogleButoon normal button ki tarah work karte hai.
            <ToggleButton key={d.id} value={d.value} className={classes.child}>{d.label}</ToggleButton>
          )
        })}

    </ToggleButtonGroup>
  )
}

export default FilterListToggle