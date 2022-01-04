import React from 'react';

import TextField from '@mui/material/TextField'

export default function ({ register, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} style={{ display: 'block' }}>
      <div>
        <TextField {...register("firstName")} placeholder="First Name" fullWidth />
      </div>
      <div>
        <TextField {...register("lastName")} placeholder="Last Name" fullWidth />
      </div>
      <div>
        <TextField {...register("speciality")} placeholder="Speciality" fullWidth />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  )
}
