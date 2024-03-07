import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

import { makeStyles } from '@mui/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import { Button } from '@mui/material';


import useFetchDetails from '../../../hooks/useFetchDetails'
import { ENTITY_NAME } from '../constants'
import Loading from '../../../components/loading';
import styles from './styles'

const useStyles = makeStyles(styles);

export default function Details({ setBreadcrumbs }) {
  const { id } = useParams();
  const classes = useStyles()
  const { isLoading, data } = useFetchDetails({ id, entity: ENTITY_NAME })


  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'LIST RECORDS', route: "/records" },
      { label: 'DETAILS' }
    ])
  }, [])

  const title = useMemo(() => {
    const clientName = data?.ClientFile?.Patient?.firstName + " " + data?.ClientFile?.Patient?.lastName;
    const recordDescription = data?.RecordType?.description
    return clientName + " - " + recordDescription
  }, [data])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Card>
      <CardHeader title={title} />
      <CardContent>
        <div className={classes.content}>
          <strong>Doctor:</strong> <span>{data.Doctor ? `${data?.Doctor?.firstName} ${data.Doctor.lastName}` : 'No doctor'}</span>
          <strong>CreatedAt:</strong> <span>{data.createdAt}</span>
          <strong>Description:</strong> <span>{data.description}</span>
        </div>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" className={classes.actionButton}>
          <Link to={`/records/${id}/edit`}>EDIT</Link>
        </Button>
        <Button variant="contained" color="secondary" className={classes.actionButton}>
          <Link to="/records">REMOVE</Link>
        </Button>
      </CardActions>
    </Card>
  )
}