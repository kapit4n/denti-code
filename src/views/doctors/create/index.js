import React from 'react';

import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  speciality: yup.string().required(),
})

export default function Index() {
  const history = useHistory()

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })

  const submitIt = async (data) => {
    await axios.post(`${process.env.REACT_APP_API_PATH}/doctors`, data)
    history.push(`/doctors/list`)
  }

  return (
    <form onSubmit={handleSubmit(d => submitIt(d))} style={{ display: 'block' }}>
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
  );
};
