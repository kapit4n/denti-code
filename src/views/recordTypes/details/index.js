import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles'

import useFetchDetails from '../../../hooks/useFetchDetails'
import Loading from '../../../components/loading';
import { ENTITY_NAME } from '../constants'
import styles from './styles'

const useStyles = makeStyles(styles);

export default function Details({setBreadcrumbs}) {
  const classes = useStyles()

  const { id } = useParams();
  const { data, isLoading } = useFetchDetails({ entity: ENTITY_NAME, id })


  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'LIST RECORD TYPES', route: "/recordTypes" },
      { label: 'DETAILS' }
    ])
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Card>
      <CardHeader title={data.description} />
      <CardContent>
        <div className={classes.content}>
          <strong>Price:</strong> <span>{data.price}</span>
          <strong>Estimated Time:</strong> <span>1 hour</span>
          <strong>CreatedAt:</strong> <span>{data.createdAt}</span>
          <strong>Description:</strong> <span>{data.description.repeat(50)}</span>
        </div>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" className={classes.actionButton}>
          <Link to={`/recordTypes/${id}/edit`}>EDIT</Link>
        </Button>
        <Button variant="contained" color="error" className={classes.actionButton}>
          <Link to="/recordTypes">REMOVE</Link>
        </Button>
      </CardActions>
    </Card>
  )
}