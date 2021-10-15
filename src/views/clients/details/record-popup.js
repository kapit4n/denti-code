import React from 'react';
import { Modal, DialogTitle, DialogContent } from '@mui/material/'

import RecordCreate from '../../records/create/index'

export default function ({ handleClose, open, doctors, fileId }) {

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="simple-dialog-title">
      <div style={{ background: 'lightblue', padding: '3rem' }}>
        <DialogTitle id="modal">Create new Record</DialogTitle>
        <DialogContent>
          <RecordCreate doctors={doctors} fileId={fileId} handleCloseDialog={handleClose} />
        </DialogContent>
      </div>
    </Modal>
  )
}
