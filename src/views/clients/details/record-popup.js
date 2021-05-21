import React from 'react';
import { Modal, DialogTitle, DialogContent } from '@material-ui/core'

import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  doctorId: yup.string().required(),
  description: yup.string().required(),
})


export default function ({ handleClose, open }) {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="simple-dialog-title" style>
      <div style={{ background: '#800080', padding: '10rem' }}>
        <DialogTitle id="modal">Create new Record</DialogTitle>
        <DialogContent>
          <form style={{ padding: '5rem' }}>
            <div>
              <TextField {...register("doctorId")} placeholder="Doctor" />
            </div>
            <div>
              <TextField {...register("description")} placeholder="Description" />
            </div>
          </form>
          <Button onClick={handleSubmit(d => handleClose(d))}>Save</Button>
        </DialogContent>
      </div>
    </Modal>
  )
}