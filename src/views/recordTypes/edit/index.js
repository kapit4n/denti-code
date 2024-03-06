import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles'

import useFetchDetails from '../../../hooks/useFetchDetails'
import Loading from '../../../components/loading';
import { ENTITY_NAME } from '../constants'
import styles from './styles'

const useStyles = makeStyles(styles);
const TIP_TIMEOUT = 2000;

export default function Edit({ setBreadcrumbs }) {
  const [displayError, setDisplayError] = useState(false);

  const [displaySuccess, setDisplaySuccess] = useState(false);

  const classes = useStyles()

  const { id } = useParams();
  const { data, isLoading, setData } = useFetchDetails({ entity: ENTITY_NAME, id })
  const [dataToEdit, setDataToEdit] = useState({});

  useEffect(() => {
    setDataToEdit(data)
  }, [data])

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'LIST RECORD TYPES', route: "/recordTypes" },
      { label: `${data?.description?.toUpperCase()} DETAILS`, route: `/recordTypes/${id}` },
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
      await axios.put(`${process.env.REACT_APP_API_PATH}/recordTypes/${id}`, { ...dataToEdit })
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
          <strong>Description:</strong> <TextField id="outlined-basic" label="" onChange={e => onChangeData(e, 'description')} value={dataToEdit.description} variant="outlined" />
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