import React from 'react';

import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
})

export default function Main({ onSubmit }) {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <form onSubmit={handleSubmit(d => onSubmit(d))} style={{ display: 'block' }}>
      <div>
        <TextField {...register("firstName")} placeholder="First Name" />
        {errors.firstName && <p className="firstName_error">First Name is required</p>}
      </div>
      <div>
        <TextField {...register("lastName")} placeholder="Last Name" />
        {errors.lastName && <p className="firstName_error">Last Name is required</p>}
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
