import React from 'react';

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
import { makeStyles } from '@mui/styles';
import styles from './styles'

const schema = yup.object().shape({
  description: yup.string().required(),
})

const useStyles = makeStyles(styles);

export default function Index({ fileId, handleCloseDialog }) {

  const classes = useStyles();

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

  if (isLoadingDoctors || isLoadingPatients || isLoadingRecordTypes) {
    return <Loading />
  }

  return (
    <form onSubmit={handleSubmit(submitIt)} className={classes.form}>
      {user /* && user.isAdmin */ && (
        <FormControl>
          <InputLabel id="doctorId">Doctor</InputLabel>
          <Select {...register("doctorId")} placeholder="Doctor" labelId="doctorId" label="Doctor">
            {doctors.map(d => <MenuItem value={d.id} key={d.id}>{d.firstName}</MenuItem>)}
          </Select>
        </FormControl>
      )}

      {user /* && user.isAdmin */ && (
        <FormControl>
          <InputLabel id="fileId">Patient</InputLabel>
          <Select {...register("fileId")} label="Patient">
            {patients.map(d => <MenuItem value={d.ClientFile && d.ClientFile.id} key={d.id}>{d.firstName}</MenuItem>)}
          </Select>
        </FormControl>
      )}

      {user /* && user.isAdmin */ && (
        <FormControl>
          <InputLabel id="recordTypeId">Record Type</InputLabel>
          <Select {...register("recordTypeId")} label="Record Type" >
            {recordTypes.map(d => <MenuItem value={d.id} key={d.id}>{d.description}</MenuItem>)}
          </Select>
        </FormControl>
      )}

      <FormControl>
        <TextField {...register("description")} label="Description" multiline
          rows={4} />
      </FormControl>

      <FormControl>
        <Button type="submit" color="primary" variant="contained">Save</Button>
        <Button>Cancel</Button>
      </FormControl>
    </form>
  );
};
