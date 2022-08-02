import React from 'react'
import { makeStyles } from '@mui/styles';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { FaRegAddressBook } from 'react-icons/fa';
import { ExpandLess, ExpandMore, YouTube } from '@mui/icons-material';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    hide: {
      display:"none",
    },
    link:{
      color:"black",
      textDecoration:"none",
    }
  });


function Notebook(props) {
    const classes = useStyles();
    const [tabOpen, setTabOpen] = React.useState(false);
    const toggleTab = () => {
        setTabOpen(!tabOpen);
    };
    
  return (
    <List
        sx={{ width: '100%',padding:0,margin:"auto", backgroundColor: '#EDEDED', borderRadius:"10px" }}
    >
        <ListItemButton 
            sx={{ width: '100%', maxWidth: 360, backgroundColor: '#CECECE',borderRadius:"10px 10px 0px 0" }}
        >
            <ListItemIcon>
                <ExpandMore onClick={toggleTab} fontSize={"large"}/>
            </ListItemIcon>
            <ListItemIcon>
                <FaRegAddressBook fontSize={"25px"}/>
            </ListItemIcon>
            <Link to={`/${props.id}`} className={classes.link}>
                <ListItemText primary={props.title}/>
            </Link>
        </ListItemButton>
        
        <Collapse in={tabOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {props.notes.map(note => (
                    <ListItemButton sx={{ pl: 4 }} key={note.id}>
                        <ListItemIcon>
                            <YouTube sx={{color:"red"}}/>
                        </ListItemIcon>
                        <Link to={`/${props.id}/video/${note.id}`} className={classes.link}>
                            <ListItemText primary={note.title} />
                        </Link>
                    </ListItemButton>
                ))}
            </List>
        </Collapse>
    </List>
  )
}

export default Notebook