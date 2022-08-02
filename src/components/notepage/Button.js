import React from 'react'
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
  root: {
    padding: "7px 10px",
    borderRadius:"5px",
    display:'flex',
    alignItems:'center',
    border:"none",
    cursor:"pointer"
  }
});

function Button(props) {
    const classes = useStyles();
    const {Icon} = props;
    const {iconPosition='start'} = props;

  return (
    <button className={classes.root} style={props.sx} onClick={props.action}>
        {iconPosition === 'start' && <Icon fontSize='medium'/>}
        <Typography sx={{fontSize:"17px", margin:"0 10px"}} variant="p" component="div">{props.text}</Typography>
        {iconPosition === 'end' && <Icon fontSize='medium'/>}
    </button>
  )
}

export default Button