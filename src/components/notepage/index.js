import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { useParams } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Note from './Note'
import NoteArea from './NoteArea';
import {noteRef, Service} from '../../services';
import { onSnapshot } from 'firebase/firestore';

const useStyles = makeStyles({
  root: {
    flex:1,
    // height:"100vh",
  },
});

function NotePage(props) {
  const classes = useStyles();
  const {notebook_id, note_id} = useParams();
  const [note, setNote] = useState({});
  
  useEffect(() => {
    Service.getSingleNote(note_id).then(res => {
      setNote(res);
    });
  },[note_id]);

  useEffect(() => {
    const unsub = onSnapshot(noteRef(note_id), (doc) => {
      console.log("Current data: ", doc.data());
    });
  })

  return (
    <Grid container className={classes.root}>
        <Grid md={8}>
          <Note
            title={note.title}
            videoURL={note.videoURL}
          />
        </Grid>
        <Grid md={4}> 
          <NoteArea
            note_id={note.id}
            points={note.points}
          />
        </Grid>
    </Grid>
  )
}

export default NotePage