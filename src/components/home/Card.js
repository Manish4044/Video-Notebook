import React from 'react'
import { makeStyles } from '@mui/styles';
import { Card as MuiCard, CardContent, Typography } from '@mui/material'
import {  YouTube, PlayCircle } from '@mui/icons-material';
const useStyles = makeStyles({
  root:{
    width:"100%", 
    height:"280px", 
    display:"flex",
    flexDirection:"column", 
    justifyContent:"space-between", 
    backgroundImage:'url("https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706__340.jpg")'
  }
})
function Card(props) {

  const classes = useStyles();
  const {points=[], title} = props;

  return (
    <MuiCard className={classes.root} sx={{borderRadius:"20px"}}>

      <CardContent sx={{display:"flex", justifyContent:"flex-end"}}>
        <YouTube fontSize='large' sx={{color:"red"}}/>
      </CardContent>

      <CardContent sx={{display:"flex", alignItems:"center"}}>
        <PlayCircle fontSize='large'sx={{color:"white"}}/>
        <CardContent sx={{paddingBottom:0, color:"white", display:"flex",flexDirection:"column", justifyContent:"center"}}>
          <Typography  variant="h6" component="div">
            {title} 
          </Typography>
          <Typography  variant="p" component="div">
            {points.length} Notes
          </Typography>
        </CardContent>
      </CardContent>

    </MuiCard>
  )
}

export default Card