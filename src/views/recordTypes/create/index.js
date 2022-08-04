import React from 'react';

import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Button } from '@mui/material/';
import { makeStyles } from '@mui/styles'
import { UserContext } from '../../../App'
import styles from './styles'

const schema = yup.object().shape({
  description: yup.string().required(),
})

const useStyles = makeStyles(styles)

export default function Index({ doctors, fileId, handleCloseDialog }) {
  const history = useHistory()
  const { user, handleUserChange } = React.useContext(UserContext);
  const classes = useStyles()

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { fileId }
  })

  const submitIt = async (data) => {
    const result = await axios.post(`${process.env.REACT_APP_API_PATH}/recordTypes`, { ...data })
    if (handleCloseDialog) {
      handleCloseDialog(result)
    } else {
      history.push(`/recordTypes`)
    }
  }

  return (
    <form onSubmit={handleSubmit(submitIt)} className={classes.form}>
      <div className={classes.fieldContainer}>
        <TextField
          {...register("description")}
          fullWidth
          variant="standard"
          InputLabelProps={{ shrink: true }}
          label="Description"
        />
      </div>
      <div className={classes.fieldContainer}>
        <TextField
          {...register("price")}
          fullWidth
          variant="standard"
          InputLabelProps={{ shrink: true }}
          label="Price" />
      </div>
      <div style={{ padding: '1rem' }}>
        <Button>Cancel</Button>
        <Button type="submit" color="primary">Save</Button>
      </div>
    </form>
  );
};
