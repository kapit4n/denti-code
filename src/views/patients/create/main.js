import React from 'react';
import { useForm } from 'react-hook-form';

import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import { Button } from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
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
      <form onSubmit={handleSubmit(d => onSubmit(d))} className={classes.form}>
        <FormControl>
          <TextField {...register("firstName")}   label="Name" variant="outlined"/>
          {errors.firstName && <p className="firstName_error">First Name is required</p>}
        </FormControl>
        <FormControl>
          <TextField  {...register("lastName")} variant="outlined" label="Last Name" />
          {errors.lastName && <p className="firstName_error">Last Name is required</p>}
        </FormControl>
        <FormControl>
          <TextField type="date"  {...register("birthDate")} variant="outlined"  InputLabelProps={{ shrink: true }} label="Birth Date" />
          {errors.birthDate && <p className="firstName_error">Birth Date is required</p>}
        </FormControl>
        <FormControl>
          <TextField  {...register("profession")} variant="outlined" label="Profession" />
          {errors.profession && <p className="firstName_error">Profession is required</p>}
        </FormControl>
        <FormControl>
          <TextField  {...register("address")} variant="outlined" label="Address" />
          {errors.address && <p className="firstName_error">Address is required</p>}
        </FormControl>
        <FormControl>
          <TextField  {...register("diseases")} variant="outlined" label="Diseases" />
          {errors.diseases && <p className="firstName_error">Diseases is required</p>}
        </FormControl>
        <FormControl>
          <TextField  {...register("allergies")} variant="outlined" label="Allergies" />
          {errors.allergies && <p className="firstName_error">Allergies is required</p>}
        </FormControl>
        <div className={classes.actionButtons}>
          <Button type="submit" variant="contained" color="primary">CREATE</Button>
          <Button variant="contained" color="secondary">CANCEL</Button>
        </div>
      </form>
    </ThemeProvider>
  );
};
