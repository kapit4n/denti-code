import React from 'react';

import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './styles'

const theme = createTheme();


const useStyles = makeStyles(styles);

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
    <ThemeProvider theme={theme}>
      <div className={classes.formContainer}>
        <form onSubmit={handleSubmit(d => onSubmit(d))} className={classes.form}>
          <div className={classes.fieldContainer}>
            <TextField className={classes.field} {...register("firstName")} fullWidth variant="standard" InputLabelProps={{ shrink: true }} label="First Name" />
            {errors.firstName && <p className="firstName_error">First Name is required</p>}
          </div>
          <div className={classes.fieldContainer}>
            <TextField className={classes.field}  {...register("lastName")} fullWidth variant="standard" InputLabelProps={{ shrink: true }} label="Last Name" />
            {errors.lastName && <p className="firstName_error">Last Name is required</p>}
          </div>
          <div className={classes.fieldContainer}>
            <TextField type="date" className={classes.field}  {...register("birthDate")} fullWidth variant="standard" InputLabelProps={{ shrink: true }} label="Birth Date" />
            {errors.birthDate && <p className="firstName_error">Birth Date is required</p>}
          </div>
          <div className={classes.fieldContainer}>
            <TextField className={classes.field}  {...register("profession")} fullWidth variant="standard" InputLabelProps={{ shrink: true }} label="Profession" />
            {errors.profession && <p className="firstName_error">Profession is required</p>}
          </div>
          <div className={classes.fieldContainer}>
            <TextField className={classes.field}  {...register("address")} fullWidth variant="standard" InputLabelProps={{ shrink: true }} label="Address" />
            {errors.address && <p className="firstName_error">Address is required</p>}
          </div>
          <div className={classes.fieldContainer}>
            <TextField className={classes.field}  {...register("diseases")} fullWidth variant="standard" InputLabelProps={{ shrink: true }} label="Diseases" />
            {errors.diseases && <p className="firstName_error">Diseases is required</p>}
          </div>
          <div className={classes.fieldContainer}>
            <TextField className={classes.field}  {...register("allergies")} fullWidth variant="standard" InputLabelProps={{ shrink: true }} label="Allergies" />
            {errors.allergies && <p className="firstName_error">Allergies is required</p>}
          </div>
          <div>
            <Button type="submit" variant="contained" color="primary">CREATE</Button>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
};
