import React from 'react';
import { Modal, DialogTitle, DialogContent, Typography, Box } from '@mui/material/'
import Dialog from '@mui/material/Dialog';

import RecordCreate from '../../records/create/index'


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


export default function ({ handleClose, open, doctors, fileId }) {

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          CREATE NEW RECORD
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <RecordCreate doctors={doctors} fileId={fileId} handleCloseDialog={handleClose} />
        </Typography>
      </Box>
    </Modal>
  )
}

/*  <Dialog open={open} onClose={handleClose} aria-labelledby="simple-dialog-title">
   <DialogTitle id="modal">CREATE NEW RECORD</DialogTitle>
   <DialogContent>
     <RecordCreate doctors={doctors} fileId={fileId} handleCloseDialog={handleClose} />
   </DialogContent>
 </Dialog> */