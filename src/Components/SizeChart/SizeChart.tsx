"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Btn from '../Btn/Btn';
import { IconButton } from '@mui/material';
import { GrFormClose } from 'react-icons/gr';
import TableVisual from './TableVisual';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:'95%',sm:'max-content',md:500},
  maxWidth:{xs:'95%',sm:'400px',md:'500px'},
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function SizeChart({categories,chartName}:any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{display:{xs:'flex',md:'none'},width:{xs:'0%',md:'98%'}}}>
      <Btn v2 sx={{color:'black',textDecoration:'underline',px:2,mx:0,fontWeight:400,mb:1}} onClick={handleOpen}>Size Chart</Btn>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box sx={{justifyContent:'flex-end'}} className="flex items-center space-between justify-between ">
            <Typography sx={{px:2,fontWeight:600}}>
        {chartName}
      </Typography>
            <IconButton 
        
        onClick={handleClose}>
                        <GrFormClose
                                color='red'
                                />
                        </IconButton>
            </Box>
       
          <TableVisual categories={categories} chartName={chartName}/>
       
        </Box>
      </Modal>
    </Box>
  );
}
