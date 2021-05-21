import React from 'react';

import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  field: {
    width: '100%'
  },
  fieldContainer: {
    maxWidth: '40rem', padding: '1rem'
  },
  form: {
    display: 'block', 
    width: '100%'
  }
}));

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
})

export default function Main({ onSubmit }) {

  const classes = useStyles();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <form onSubmit={handleSubmit(d => onSubmit(d))} className={classes.form}>
      <div className={classes.fieldContainer}>
        <TextField className={classes.field} {...register("firstName")} placeholder="First Name" variant="outlined" label="First Name" />
        {errors.firstName && <p className="firstName_error">First Name is required</p>}
      </div>
      <div className={classes.fieldContainer}>
        <TextField className={classes.field}  {...register("lastName")} placeholder="Last Name" variant="outlined" label="Last Name" />
        {errors.lastName && <p className="firstName_error">Last Name is required</p>}
      </div>
      <div>
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </div>
    </form>
  );
};
