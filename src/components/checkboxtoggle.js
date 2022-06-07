import React from "react";
import { FormControlLabel, makeStyles, Checkbox } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    "&$checked": {
      color: "#000",
    },
  },
  checked: {},
  wrap: {
    
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 0,
  },
  Label: {
    
    fontSize: ".8rem",
    
    fontFamily: `"Raleway" , sans-serif`,
  },
});

const Checkboxtoggle = ({ Cusines, changeChecked }) => {
  const { label, id, checked } = Cusines;
  const classes = useStyle();
  
  return (
    <div>
      <FormControlLabel
        classes={{ label: classes.Label, root: classes.wrap, }}
        control={
          <Checkbox
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size="small"
            checked={checked}
            onChange={() => {
              return changeChecked(id);
            }}
          />
        }
        label={label}
       
      />
    </div>
  );
};

export default Checkboxtoggle;
