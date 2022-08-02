import React from 'react'
import { Grid, IconButton, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ExpandLess,West, ExpandMore } from '@mui/icons-material';
const useStyles = makeStyles({
  container:{
    borderBottom:"2px solid lightgrey",
    padding:"4px 10px"
  },
  nav: {
    display:"flex",
    alignItems:"center"
  }
});

function Header() {

  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item md={11} className={classes.nav}>
        <IconButton>
          <West/>
        </IconButton>
        <Typography variant="h6">Unfiled / Dumbledore & Grindelwald • Set Fire To The Rain</Typography>
      </Grid>
      <Grid item md={1} className={classes.nav}>
        <p>Manish</p>
        <IconButton>
          <ExpandMore/>
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Header