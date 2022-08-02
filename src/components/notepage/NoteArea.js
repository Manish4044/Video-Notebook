import React, {useState} from 'react'
import { makeStyles } from '@mui/styles';
import {Tabs, Tab, Box, Typography, IconButton} from '@mui/material';
import {PlayArrowOutlined, TextSnippet, Delete} from '@mui/icons-material';
import {Service} from '../../services';
import {secondsToHms} from '../../helpers';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const useStyles = makeStyles({
container:{
  width: '100%', 
  height:"100%", 
  display:'flex', 
  flexDirection:'column' 
},
root: {
    padding: "7px 10px",
    borderRadius:"5px",
    display:'flex',
    alignItems:'center',
    border:"none",
    cursor:"pointer"
  },
message_container:{
    width:"100%",
    backgroundColor:'#fff',
    borderRadius:'5px',
    padding:'0px 10px',
    border: '1px solid rgb(237, 237, 237)',
    margin:'10px 0',
    },
message_text:{
    margin:'1px',
    cursor:'pointer'
},
message_button:{
    width:'fit-content',
    display:"flex",
    alignItems:'center',
    border:'1px solid grey',
    color:'red',
    borderRadius:'10px',
    padding:'0 10px',
    margin:0,
  }
});
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const NotePoint = (props) => {
    const classes = useStyles();
    
    const handlePlayTime = (time) => {
      props.youtubeRef.seekTo(Number(time));
    }
    const handleDeletePoint = (point) => {
      console.log("delete")
      console.log(point)
    }

    return (
        <div className={classes.message_container}>
            <p className={classes.message_text}> {props.text} </p>
            <p className={classes.message_button} onClick={() => handlePlayTime(props.time)}>
                <PlayArrowOutlined/>
                {secondsToHms(props.time)}
            </p>
            <IconButton onClick={() => handleDeletePoint({text:props.text,time:props.time})}>
              <Delete/>
            </IconButton>
        </div>
    )
}

const InputNote = (props) => {

    const [input, setInput] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        const time = (props.youtubeRef.getCurrentTime());
        const point = {
            text:input,
            time:time
        }
        console.log(point);
        Service.addNotePoint(props.note_id, point)
        .then(res => console.log(res));
        setInput('');
    }

    return (
        <div style={{width:'100%',boxSizing:'border-box', padding:'10px 30px', backgroundColor:'#F5F5F5'}}>
            <form 
                style={{display:"flex", alignItems:'center', backgroundColor:'#FAFAFA', borderRadius:"8px"}}
                onSubmit={handleSubmit}
            >
                <TextSnippet fontSize="large"/>
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{fontSize:"20px",marginLeft:10,flex:1, height:"40px",backgroundColor:'transparent'}}
                />
                <button type="submit" hidden></button>
            </form>
        </div>
    )
}

function NoteArea(props) {

  const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [points, setPoints] = React.useState(props.points);

    useEffect(() => {
      setPoints(points);
      console.log(props.points);
      console.log(props.note_id);
    })

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <Box className={classes.container}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Notes" {...a11yProps(0)} />
        <Tab label="Captions" {...a11yProps(1)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0} style={{flex:1}}>
        {props.points?.map(point => (
            <NotePoint
                key={Math.random()}
                youtubeRef={props.youtubeRef}
                {...point}
            />
        ))}
    </TabPanel>

    <TabPanel value={value} index={0}>
        <InputNote
          note_id={props.note_id}
          youtubeRef={props.youtubeRef}
        />
    </TabPanel>
    
    <TabPanel value={value} index={1} style={{flex:1}}>
      Item Two
    </TabPanel>
  </Box>
  )
}

const mapStateToProps = (state) => {
  return ({
    youtubeRef:state.youtubeRef,
  })
}

export default connect(mapStateToProps)(NoteArea)