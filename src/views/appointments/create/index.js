import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Select from '@mui/material/Select';
import { MenuItem, Button } from '@mui/material/';
import { UserContext } from '../../../App'
import useFetchData from '../../../hooks/useFetchData';
import Loading from '../../../components/loading';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import styles from './styles'

import { makeStyles } from '@mui/styles';

const schema = yup.object().shape({
  description: yup.string().required(),
})

const useStyles = makeStyles(styles)

export default function Index({ fileId, handleCloseDialog }) {
  const history = useHistory()
  const { user } = React.useContext(UserContext);
  const { data: records, isLoading: isLoadingRecords } = useFetchData({ entity: 'records' })
  const [value, setValue] = useState(new Date())
  const classes = useStyles();
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { fileId }
  })

  const submitIt = async (data) => {
    const result = await axios.post(`${process.env.REACT_APP_API_PATH}/appointments`, { ...data, date: value })
    if (handleCloseDialog) {
      handleCloseDialog(result)
    } else {
      history.push(`/appointments`)
    }
  }

  if (isLoadingRecords) {
    return <Loading />
  }

  return (
    <form onSubmit={handleSubmit(submitIt)} className={classes.form}>
      {user && (
        <FormControl>
          <InputLabel id="recordId">Record</InputLabel>
          <Select {...register("recordId")} label="Record">
            {records.map(d => <MenuItem value={d.id} id="recordId" key={d.id}>{d.description}</MenuItem>)}
          </Select>
        </FormControl>
      )}
      <FormControl>
        <TextField {...register("description")} label="Description" multiline
          rows={4} />
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FormControl>
          <DateTimePicker
            label="DateTime picker"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...register("date")} {...params} />}
          />
        </FormControl>
      </LocalizationProvider>
      <FormControl>
        <Button type="submit" color="primary" variant="contained">Save</Button>
        <Button>Cancel</Button>
      </FormControl>
    </form>
  );
};
