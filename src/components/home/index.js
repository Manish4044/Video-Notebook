import React, {useEffect, useState} from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Card from './Card';
import Search from './Search';
import {Service} from '../../services';
import { useParams } from "react-router-dom";

function Home(props) {

  const {notebook_id} = useParams();
  const [notebook, setNotebook] = useState({});
  
  useEffect(() => {
    Service.getSingleNotebook(notebook_id).then(res => {
      setNotebook(res);
    });
  },[notebook_id])

  return (
    <Box>
        <Grid container direction={'column'} sx={{maxWidth:"660px", margin:'10px auto'}}>
            <Grid item md={12}>
            <Typography gutterBottom variant="h5" component="div">
              {notebook?.title}
            </Typography>
            </Grid>
            <Typography variant="h6" align='center'>Please select a video to view its notes and captions!</Typography>
            <Grid item container spacing={2} sx={{marginTop:"0"}}>
                {notebook?.notes?.map(note => (
                  <Grid item md={6}>
                    <Card {...note}/>
                  </Grid>
                ))}
            </Grid>
        </Grid>
    </Box>
  )
}

export default Home