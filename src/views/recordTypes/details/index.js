import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { RECORD_TYPES_ENTITY_NAME } from '../constants'
import useFetchDetails from '../../../hooks/useFetchDetails'

export default function Details() {
  const { id } = useParams();
  const { data, isLoading } = useFetchDetails({ entity: RECORD_TYPES_ENTITY_NAME, id })

  if (isLoading)  {
    return "Loading"
  }

  return (
    <Card>
      <CardHeader title={data.description} />
      <CardContent>
        <div>
          Price: {data.price}
        </div>
        <div>
          CreatedAt: {data.createdAt}
        </div>
      </CardContent>
    </Card>
  )
}