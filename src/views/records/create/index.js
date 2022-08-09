import React from 'react';

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

const schema = yup.object().shape({
  description: yup.string().required(),
})

export default function Index({ fileId, handleCloseDialog }) {
  const history = useHistory()
  const { user } = React.useContext(UserContext);
  const { data: doctors, isLoading: isLoadingDoctors } = useFetchData({ entity: 'doctors' })
  const { data: patients, isLoading: isLoadingPatients } = useFetchData({ entity: 'patients' })
  const { data: recordTypes, isLoading: isLoadingRecordTypes } = useFetchData({ entity: 'recordTypes' })

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { fileId }
  })

  const submitIt = async (data) => {
    // logic for admin user
    const result = await axios.post(`${process.env.REACT_APP_API_PATH}/records`, { ...data })
    // if user is doctor
    // const result = await axios.post(`${process.env.REACT_APP_API_PATH}/records`, { ...data, doctorId: user.id })
    // if user is client
    // const result = await axios.post(`${process.env.REACT_APP_API_PATH}/records`, { ...data, fileId: user.ClientFile.id })

    if (handleCloseDialog) {
      handleCloseDialog(result)
    } else {
      history.push(`/records`)
    }
  }

  if (isLoadingDoctors) {
    return <Loading />
  }

  return (
    <form onSubmit={handleSubmit(submitIt)} style={{ display: 'block' }}>
      {user /* && user.isAdmin */ && (
        <div>
          <Select {...register("doctorId")} placeholder="Doctor" >
            {doctors.map(d => <MenuItem value={d.id} key={d.id}>{d.firstName}</MenuItem>)}
          </Select>
        </div>
      )}

      {user /* && user.isAdmin */ && (
        <div>
          <Select {...register("fileId")} placeholder="Patient" >
            {patients.map(d => <MenuItem value={d.ClientFile && d.ClientFile.id} key={d.id}>{d.firstName}</MenuItem>)}
          </Select>
        </div>
      )}

      {user /* && user.isAdmin */ && (
        <div>
          <Select {...register("recordTypeId")} placeholder="Record Type" >
            {recordTypes.map(d => <MenuItem value={d.id} key={d.id}>{d.description}</MenuItem>)}
          </Select>
        </div>
      )}

      <div>
        <TextField {...register("description")} placeholder="Description" fullWidth multiline
          rows={4} />
      </div>
  
      <div style={{ padding: '1rem' }}>
        <Button>Cancel</Button>
        <Button type="submit" color="primary">Save</Button>
      </div>
    </form>
  );
};
