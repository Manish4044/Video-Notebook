import React from 'react'
import {Search as SearchIcon, ExpandMore, ExpandLess} from '@mui/icons-material';
import { FaRegAddressBook } from 'react-icons/fa';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container:{
        display:"flex",
        width:"100%",
        justifyContent:'space-between',
        alignItems:'center',
        padding:'4px 10px',
        backgroundColor:"#fafafa",
        margin:'5px 0'
    },
    form:{
        flex:1
    },
    input:{
        backgroundColor:"transparent",
        width:"100%",
        fontSize:"18px",
        outline:"none",
        border:"none",
    }
});

function Search() {
    const classes = useStyles();

  return (
    <div className={classes.container}>
        <SearchIcon fontSize="large"/>
        <form action="" className={classes.form}>
            <input className={classes.input} type="text" placeholder='Search'/>
        </form>
        <div>
            <FaRegAddressBook fontSize={"30px"}/>
            <ExpandMore fontSize="large"/>
        </div>
    </div>
  )
}

export default Search