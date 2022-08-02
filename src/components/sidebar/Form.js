import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { Service } from '../../services';
import { USER_ID } from '../../constants';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddNotebookButton() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateNotebook = async() => {
    console.log(name);
    const res = await Service.addNotebook(USER_ID,name);
    console.log(res);
    setName('');
    handleClose();
  }

  return (
    <div style={{margin:"auto"}}>
      <Typography onClick={handleOpen}>+Add Notebook</Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h1">
            Enter the name of your notebook
          </Typography>
          <Typography id="modal-modal-description" variant="h6" sx={{ mt: 4, mb:3 }}>
            Give a name to your notebook
          </Typography>
          <TextField 
            fullWidth 
            label="Notebook name" 
            id="fullWidth" 
            sx={{ mb:3 }} 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Box>
            <Button style={{color:"red",fontWeight:"bold"}} variant="text" onClick={handleClose}>Cancel</Button>
            <Button style={{color:"black",fontWeight:"bold"}} variant="text" onClick={handleCreateNotebook}>Create notebook</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}