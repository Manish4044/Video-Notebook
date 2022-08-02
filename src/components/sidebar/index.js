import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png';
import AddNotebookButton from './Form';
import Notebook from './Notebook';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import { Drawer as MuiDrawer, List, ListItem, ListItemButton} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import {KeyboardTab} from '@mui/icons-material';
import { Service } from '../../services';
import {DRAWER_WIDTH} from '../../constants';
import clsx from 'clsx';

const useStyles = makeStyles({
  hide: {
    display:"none",
  },
  link:{
    color:"white",
    textDecoration:"none",
  }
});


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    borderBottom:"1px solid lightgrey",
    ...theme.mixins.toolbar,
  }));

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: DRAWER_WIDTH,
      zIndex:"10",
      flexShrink: 0,
      position:"fixed",
      display:"flex",
      flexDirection:"column",
      top:0,
      left:0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const openedMixin = (theme) => ({
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  

function Sidebar() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [notebooks, setNotebooks] = useState([]);
  const handleOpenClose = () => {
    setOpen(!open);
  }

  // Service.getSingleNotebook('SFoJaKcOvfcuCW0iwBi9');
  useEffect(() => {
    Service.getFullUserData('manishyadav4350@gmail.com')
    .then(res => {
      setNotebooks(res.notebooks)
    });
  },[])

  return (
    <Drawer variant="permanent" open={open}>
        <DrawerHeader>
            <img src={logo} height={80} alt="Logo" className={clsx( { [classes.hide]: !open })}/>
          
            <IconButton onClick={handleOpenClose}>
                <KeyboardTab fontSize="medium"/>
            </IconButton>
        </DrawerHeader>
        
          <List
          sx={{ overflow:"auto", flex:1, padding:"10px" }}
          component="nav"
          className={clsx( { [classes.hide]: !open })}
          >
          {notebooks.map(item => (
              <ListItem key={item.id}>
                  <Notebook
                    {...item}
                  />
              </ListItem>   
          ))}
          </List>

          <List className={clsx( { [classes.hide]: !open })}>
            <ListItemButton>
                <AddNotebookButton/>
            </ListItemButton>
          </List>
    </Drawer>
  )
}

export default Sidebar