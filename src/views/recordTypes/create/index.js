import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
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

export default function Index({ setBreadcrumbs, fileId, handleCloseDialog }) {
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


  useEffect(() => {
    setBreadcrumbs([
      { label: 'LIST RECORD TYPES', route: "/recordTypes" },
      { label: 'CREATE' }
    ])
  }, [])

  return (
    <form onSubmit={handleSubmit(submitIt)} className={classes.form}>
      <FormControl>
        <TextField
          {...register("description")}
          fullWidth
          variant="outlined"
          label="Description"
        />
      </FormControl>
      <FormControl>
        <TextField
          {...register("price")}
          fullWidth
          variant="outlined"
          label="Price" />
      </FormControl>
      <div className={classes.actionButtons}>
        <Button type="submit" color="primary" variant="contained">Save</Button>
        <Button color='secondary' variant='contained'>Cancel</Button>
      </div>
    </form>
  );
};
