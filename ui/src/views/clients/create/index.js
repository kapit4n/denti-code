import React from 'react';

import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
})

export default function Index() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })

  const submitIt = async (data) => {
    console.log(await axios.post("http://localhost:3000/users", data))
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
        <input type="submit" />
      </div>
    </form>
  );
};
