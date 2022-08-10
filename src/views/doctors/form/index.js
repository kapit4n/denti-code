import React from 'react';

import TextField from '@mui/material/TextField'

import { Controller } from 'react-hook-form'
import { Button, FormControl } from '@mui/material';
import { makeStyles } from '@mui/styles';

import styles from './styles'
const useStyles = makeStyles(styles);

export function CreateForm({ register, handleSubmit }) {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <FormControl>
        <TextField {...register("firstName")} label="First Name" variant="outlined" />
      </FormControl>
      <FormControl>
        <TextField {...register("lastName")} label="Last Name" variant="outlined" />
      </FormControl>
      <FormControl>
        <TextField {...register("speciality")} label="Speciality" variant="outlined" />
      </FormControl>
      <FormControl>
        <Button type="submit" variant="contained" color="primary">Create</Button>
      </FormControl>
    </form>
  )
}

export function EditForm({ handleSubmit, control, cancel = () => { } }) {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <FormControl>
        <Controller
          name={"firstName"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={"First Name"} fullWidth variant="outlined" InputLabelProps={{ shrink: true }} />
          )}
        />
      </FormControl>
      <FormControl>
        <Controller
          name={"lastName"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={"Last Name"} fullWidth variant="outlined" InputLabelProps={{ shrink: true }} />
          )}
        />
      </FormControl>
      <FormControl>
        <Controller
          name={"speciality"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={"Speciality"} fullWidth variant="outlined" InputLabelProps={{ shrink: true }} />
          )}
        />
      </FormControl>
      <FormControl>
        <Button type="submit" variant="contained" color="primary">Save</Button>
        <Button type="reset" onClick={cancel}>Cancel</Button>
      </FormControl>
    </form>
  )
}
