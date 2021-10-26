import React from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material/'
import { UserContext } from '../../App'
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function Index() {

  const { user, handleUserChange } = React.useContext(UserContext);
  const history = useHistory()

  const onSubmit = async () => {
    // const result = await axios.post(`${process.env.REACT_APP_API_PATH}/auth/login`)
    const result = await axios.get(`${process.env.REACT_APP_API_PATH}/doctors/1`)
    handleUserChange(result.data)
    history.push('/')
  }

  return (
    <div style={{ width: '100%', display: 'flex', justifyItems: 'center' }}>
      <form style={{ width: '50rem', background: 'lightblue', padding: '2rem' }}>
        <TextField required id="username" label="User Name" variant="standard" style={{ display: 'block' }} fullWidth />
        <TextField required id="password" label="Password" variant="standard" style={{ display: 'block' }} fullWidth />
        <div style={{ height: '2.5rem', paddingTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onSubmit} color="primary" variant="contained" size="small"> Login</Button>
          <Button onClick={onSubmit} color="secondary" variant="contained" size="small"> Cancel</Button>
        </div>
      </form>
    </div>
  )
}