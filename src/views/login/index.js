import React from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material/'
import { Card } from '@mui/material/'
import { UserContext } from '../../App'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './index.css'

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
    <Card className="login-container container">
      <h1>
        LOGIN TO REACT DOCTOR
      </h1>
      <form>
        <TextField required id="username" label="User Name" variant="standard" fullWidth/>
        <TextField required id="password" label="Password" variant="standard" fullWidth/>
        <div className="actions">
          <Button onClick={onSubmit} color="primary" variant="contained" size="small"> Login</Button>
          <Button onClick={onSubmit} color="secondary" variant="contained" size="small"> Cancel</Button>
        </div>
      </form>
      <div className="social-icon-container">
        <img src="https://icons-for-free.com/iconfiles/png/512/facebook+logo+media+network+social+icon-1320192913497992427.png" className="social-icon"/>
        <img src="data:image/png;base64,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" className="social-icon"/>
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="social-icon"/>
      </div>
    </Card>
  )
}