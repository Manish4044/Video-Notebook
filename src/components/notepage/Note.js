import { Typography } from '@mui/material'
import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';
import Button from './Button';
import { connect } from 'react-redux';
import {FileDownload, Send, East} from '@mui/icons-material';
import { makeYouTubeRef } from '../../actions';

function Note(props) {

  const opts = {
      width: '100%',
      maxWidth:"500px",
      height: '390',
      borderRadius:"20px",
      playerVars: {
        autoplay: 0,
      },
  };
  
  const onPlayerReady = (e) => {
    props.addYoutubeRef(e.target);
  }


  return (
    <div style={{padding:"20px"}}>
        <Typography variant="h5" align='center' gutterBottom component="div">
            {props.title}
        </Typography>
        <div style={{width: "100%", height:"400px", margin:"20px auto"}}>
          <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady}/>
        </div>
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <Button
              Icon={FileDownload}
              text={"Export"}
              sx={{padding:"10px 20px"}}
            />
            <Button
              Icon={Send}
              text={"Share"}
              sx={{padding:"10px 20px"}}
            />
            <Button
              Icon={East}
              iconPosition="end"
              text={"Open in YouTube"}
              sx={{padding:"10px 20px"}}
            />
        </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addYoutubeRef: (ref) => dispatch(makeYouTubeRef(ref)),
  })
}

export default connect(null,mapDispatchToProps)(Note)
