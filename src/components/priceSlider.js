import React from 'react'
import { makeStyles,Slider } from '@material-ui/core'

const useStyle = makeStyles({
    root:{
        width:"100%",
    },
    thumb:{
        color:"#000",
    },
    rail:{
        color:"rgba(0,0,0,0.26)",
    },
    track:{
        color:"#000",
    }
})
const PriceSlider = ({value,changedPrice}) => {
    console.log(changedPrice)
  const classes = useStyle()
    return (
    <div className={classes.root}>
        <Slider  
        value={value}
        onChange={changedPrice}
        valueLabelDisplay="on"
        min={1000}
        max={5000}
        classes={
           { thumb:classes.thumb,
            rail:classes.rail,
            track:classes.track,
}
        }/>
    </div>
  )
}

export default PriceSlider