import React from 'react';
import { Modal, DialogTitle, DialogContent } from '@material-ui/core'
import { useParams } from 'react-router-dom';

import { useForm, Controller } from 'react-hook-form';
import Button from '@material-ui/core/Button'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import RecordCreate from '../../records/create/index'

const schema = yup.object().shape({
  doctorId: yup.string().required(),
  description: yup.string().required(),
})

export default function ({ handleClose, open, doctors, fileId, redirectTo }) {

  const { id } = useParams();

  const { control, handleSubmit } = useForm({
    defaultValues: { doctorId: id, description: '' },
    resolver: yupResolver(schema),
  })

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="simple-dialog-title" style>
      <div style={{ background: 'white', padding: '10rem' }}>
        <DialogTitle id="modal">Create new Record</DialogTitle>
        <DialogContent>
          <RecordCreate doctors={doctors} fileId={fileId} handleCloseDialog={handleClose} />
        </DialogContent>
      </div>
    </Modal>
  )
}

/*
  <div>
              <Controller
                name="doctorId"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Doctor"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Doctor required' }}
              />
            </div>
            <div>
              <Controller
                name="description"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Description"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Description name required' }}
              />
            </div>
*/