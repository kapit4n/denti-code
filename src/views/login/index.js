import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'

export default function Index() {

  const onSubmit = () => {
  }

  return (
    <form style={{ display: 'flex', justifyContent: "space-between", width: '40rem' }}>
      <TextField required id="username" label="User Name" variant="filled" />
      <TextField required id="password" label="Password" variant="filled" />
      <Button onClick={onSubmit} color="primary" variant="contained"> Login</Button>
      <Button onClick={onSubmit} color="secondary" variant="contained"> Cancel</Button>
    </form>
  )
}