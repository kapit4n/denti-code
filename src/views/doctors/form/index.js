import React from 'react';

import TextField from '@mui/material/TextField'

import { Controller } from 'react-hook-form'
import { Button } from '@mui/material';

import './index.css'

export function CreateForm({ register, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} style={{ display: 'block' }}>
      <div className="form-row">
        <TextField {...register("firstName")} placeholder="First Name" label="First Name" fullWidth variant="standard" InputLabelProps={{ shrink: true }}/>
      </div>
      <div className="form-row">
        <TextField {...register("lastName")} placeholder="Last Name" label="Last Name" fullWidth variant="standard" InputLabelProps={{ shrink: true }}/>
      </div>
      <div className="form-row">
        <TextField {...register("speciality")} placeholder="Speciality" label="Speciality" fullWidth variant="standard" InputLabelProps={{ shrink: true }}/>
      </div>
      <div>
        <Button type="submit">Create</Button>
      </div>
    </form>
  )
}

export function EditForm({ handleSubmit, control, cancel = () => { } }) {
  return (
    <form onSubmit={handleSubmit} style={{ display: 'block' }}>
      <div className="form-row">
        <Controller
          name={"firstName"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={"First Name"} fullWidth variant="standard" InputLabelProps={{ shrink: true }} />
          )}
        />
      </div>
      <div className="form-row">
        <Controller
          name={"lastName"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={"Last Name"} fullWidth variant="standard" InputLabelProps={{ shrink: true }} />
          )}
        />
      </div>
      <div className="form-row">
        <Controller
          name={"speciality"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={"Speciality"} fullWidth variant="standard" InputLabelProps={{ shrink: true }} />
          )}
        />
      </div>
      <div>
        <Button type="submit">Save</Button>
        <Button type="reset" onClick={cancel}>Cancel</Button>
      </div>
    </form>
  )
}
