import React from 'react';

import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Select from '@mui/material/Select';
import { MenuItem, Button } from '@mui/material/';
import { UserContext } from '../../../App'

const schema = yup.object().shape({
  description: yup.string().required(),
})

export default function Index({ doctors, fileId, handleCloseDialog }) {
  const history = useHistory()
  const { user, setUser } = React.useContext(UserContext);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { fileId }
  })

  const submitIt = async (data) => {
    const result = await axios.post(`${process.env.REACT_APP_API_PATH}/records`, { ...data, fileId })
    if (handleCloseDialog) {
      handleCloseDialog(result)
    } else {
      history.push(`/records`)
    }
  }

  return (
    <form onSubmit={handleSubmit(submitIt)} style={{ display: 'block' }}>
      {user && user.isAdmin && (
        <div>
          <Select {...register("doctorId")} placeholder="Doctor" >
            {doctors.map(d => <MenuItem value={d.id} key={d.id}>{d.firstName}</MenuItem>)}
          </Select>
        </div>
      )}
      <div>
        <TextField {...register("description")} placeholder="Description" />
      </div>
      <div style={{ padding: '1rem' }}>
        <Button>Cancel</Button>
        <Button type="submit" color="primary">Save</Button>
      </div>
    </form>
  );
};
