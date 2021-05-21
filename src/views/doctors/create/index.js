import React from 'react';

import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField'
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
    await axios.post("http://localhost:3000/doctors", data)
    history.push(`/doctors/list`)
  }

  return (
    <form onSubmit={handleSubmit(d => submitIt(d))} style={{ display: 'block' }}>
      <div>
        <TextField {...register("firstName")} placeholder="First Name" />
      </div>
      <div>
        <TextField {...register("lastName")} placeholder="Last Name" />
      </div>
      <div>
        <TextField {...register("speciality")} placeholder="Speciality" />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};
