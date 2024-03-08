import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import useFetch from '../../../hooks/useFetch';


import useFetchDetails from '../../../hooks/useFetchDetails'
import Loading from '../../../components/loading';
import { ENTITY_NAME } from '../constants'
import styles from './styles'

const useStyles = makeStyles(styles);
const TIP_TIMEOUT = 2000;

const schema = yup.object().shape({
  description: yup.string().required(),
})

export default function Edit({ setBreadcrumbs }) {
  const classes = useStyles()
  const { id } = useParams();
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [dataToEdit, setDataToEdit] = useState({});

  const [displayError, setDisplayError] = useState(false);
  const { data: clients } = useFetch({ entity: 'patients' })
  const { data: recordTypes } = useFetch({ entity: 'recordTypes' })
  const { data: doctors } = useFetch({ entity: 'doctors' })
  const { data, isLoading, setData } = useFetchDetails({ entity: ENTITY_NAME, id })

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {}
  })

  useEffect(() => {
    setDataToEdit(data)
  }, [data])

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'LIST RECORDS', route: "/records" },
      { label: `${data?.description?.toUpperCase()} DETAILS`, route: `/records/${id}` },
      { label: 'EDIT' }
    ])
  }, [data, id])

  if (isLoading) {
    return <Loading />
  }

  const displaySuccessHandler = async () => {
    setDisplaySuccess(true)
    setTimeout(() => {
      setDisplaySuccess(false)
    }, TIP_TIMEOUT)
  }

  const displayErrorHandler = async () => {
    setDisplayError(true)
    setTimeout(() => {
      setDisplayError(false)
    }, TIP_TIMEOUT)
  }

  const saveData = async () => {
    try {
      await axios.put(`${process.env.REACT_APP_API_PATH}/record/${id}`, { ...dataToEdit })
      setData(dataToEdit)
      displaySuccessHandler()
    } catch (error) {
      console.log(error)
      displayErrorHandler()
    }
  }

  const onChangeData = (e, field) => {
    setDataToEdit({ ...dataToEdit, [field]: e.target.value })
  }

  return (
    <Card>
      <CardContent>
        {displaySuccess && <span className={classes.successMessage}>Data saved successfully</span>}
        {displayError && <span className={classes.errorMessage}>Error to save data</span>}
        <div className={classes.content}>
          <strong>Client:</strong>
          <FormControl>
            <InputLabel id="clientId">Client</InputLabel>
            <Select {...register("clientId")} label="Client">
              {clients.map(d => <MenuItem value={d.id} id="clientId" key={d.id}>{d.firstName}</MenuItem>)}
            </Select>
          </FormControl>
          <strong>Record Type:</strong> 
          <FormControl>
            <InputLabel id="recordTypeId">Record Type</InputLabel>
            <Select {...register("recordTypeId")} label="Record Type">
              {recordTypes.map(d => <MenuItem value={d.id} id="recordTypeId" key={d.id}>{d.description}</MenuItem>)}
            </Select>
          </FormControl>
          <strong>Doctor:</strong> 
          <FormControl>
            <InputLabel id="doctorId">Doctor</InputLabel>
            <Select {...register("doctorId")} label="Doctor">
              {doctors.map(d => <MenuItem value={d.id} id="doctorId" key={d.id}>{d.firstName}</MenuItem>)}
            </Select>
          </FormControl>
          <strong>Price:</strong> <TextField id="outlined-basic" label="" onChange={e => onChangeData(e, 'price')} value={dataToEdit.price} variant="outlined" />
          <strong>Estimated Time:</strong> <TextField id="outlined-basic" label="" value={'1 hour'} variant="outlined" />
          <strong>CreatedAt:</strong> <TextField id="outlined-basic" label="" value={new Date()} variant="outlined" />
          <strong>Description:</strong> <TextField id="outlined-basic" label="" multiline rows={4} value={dataToEdit.description.repeat(50)} variant="outlined" />
        </div>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={saveData} className={classes.actionButton}>
          SAVE
        </Button>
        <Button variant="contained" color="secondary" className={classes.actionButton}>
          <Link to={`/recordTypes/${id}`}>Cancel</Link>
        </Button>
      </CardActions>
    </Card>
  )
}