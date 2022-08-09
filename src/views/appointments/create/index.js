import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField'
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

const schema = yup.object().shape({
  description: yup.string().required(),
})

export default function Index({ fileId, handleCloseDialog }) {
  const history = useHistory()
  const { user } = React.useContext(UserContext);
  const { data: records, isLoading: isLoadingRecords } = useFetchData({ entity: 'records' })
  const [value, setValue] = useState(new Date())
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
    <form onSubmit={handleSubmit(submitIt)} style={{ display: 'block' }}>
      {user && (
        <div>
          <Select {...register("recordId")} placeholder="Doctor" >
            {records.map(d => <MenuItem value={d.id} key={d.id}>{d.description}</MenuItem>)}
          </Select>
        </div>
      )}
      <div>
        <TextField {...register("description")} placeholder="Description" fullWidth multiline
          rows={4} />
      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div>
          <DateTimePicker
            label="DateTime picker"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...register("date")} {...params} />}
          />

        </div>
      </LocalizationProvider>
      <div style={{ padding: '1rem' }}>
        <Button>Cancel</Button>
        <Button type="submit" color="primary">Save</Button>
      </div>
    </form>
  );
};
