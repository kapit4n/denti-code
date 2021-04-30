import React from 'react';

import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  fileId: yup.string().required(),
  doctorId: yup.string().required(),
  description: yup.string().required(),
})

export default function Index() {
  const history = useHistory()

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })

  const submitIt = async (data) => {
    await axios.post("http://localhost:3000/records", data)
    history.push(`/records`)
  }

  return (
    <form onSubmit={handleSubmit(d => submitIt(d))} style={{ display: 'block' }}>
      <div>
        <TextField {...register("fileId")} placeholder="Client" />
      </div>
      <div>
        <TextField {...register("doctorId")} placeholder="Doctor" />
      </div>
      <div>
        <TextField {...register("description")} placeholder="Description" />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};
