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
    width: '100%',
    margin: '0.5rem 0'
  },
  form: {
    maxWidth: '40rem',
    width: '100%',
    padding: '0 1rem'
  }
}));

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  birthDate: yup.date(),
  profession: yup.string(),
  address: yup.string(),
  diseases: yup.string(),
  allergies: yup.string(),
})

export default function Main({ onSubmit }) {

  const classes = useStyles();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit(d => onSubmit(d))} className={classes.form}>
        <div className={classes.fieldContainer}>
          <TextField className={classes.field} {...register("firstName")} placeholder="First Name" variant="outlined" label="First Name" />
          {errors.firstName && <p className="firstName_error">First Name is required</p>}
        </div>
        <div className={classes.fieldContainer}>
          <TextField className={classes.field}  {...register("lastName")} placeholder="Last Name" variant="outlined" label="Last Name" />
          {errors.lastName && <p className="firstName_error">Last Name is required</p>}
        </div>
        <div className={classes.fieldContainer}>
          <TextField type="date" className={classes.field}  {...register("birthDate")} placeholder="Birth Date" variant="outlined" label="Birth Date" />
          {errors.birthDate && <p className="firstName_error">Birth Date is required</p>}
        </div>
        <div className={classes.fieldContainer}>
          <TextField className={classes.field}  {...register("profession")} placeholder="Profession" variant="outlined" label="Profession" />
          {errors.profession && <p className="firstName_error">Profession is required</p>}
        </div>
        <div className={classes.fieldContainer}>
          <TextField className={classes.field}  {...register("address")} placeholder="Address" variant="outlined" label="Address" />
          {errors.address && <p className="firstName_error">Address is required</p>}
        </div>
        <div className={classes.fieldContainer}>
          <TextField className={classes.field}  {...register("diseases")} placeholder="Diseases" variant="outlined" label="Diseases" />
          {errors.diseases && <p className="firstName_error">Diseases is required</p>}
        </div>
        <div className={classes.fieldContainer}>
          <TextField className={classes.field}  {...register("allergies")} placeholder="Allergies" variant="outlined" label="Allergies" />
          {errors.allergies && <p className="firstName_error">Allergies is required</p>}
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </div>
      </form>
    </div>

  );
};
