import React from 'react';
import { useParams } from 'react-router-dom';

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import useFetchDetails from '../../../hooks/useFetchDetails'

export default function Details() {
  const { id } = useParams();
  const { isLoading, data } = useFetchDetails({ id, entity: 'records' })

  if (isLoading) {
    return "Loading"
  }

  return (
    <Card>
      <CardHeader title={data.ClientFile && data.ClientFile.Patient ? `${data.ClientFile.Patient.firstName} ${data.ClientFile.Patient.lastName}` : ''} />
      <CardContent>
        <div>
          Doctor: {data.Doctor ? `${data.Doctor.firstName} ${data.Doctor.lastName}` : ''}
        </div>
        <div>
          CreatedAt: {data.createdAt}
        </div>
      </CardContent>
    </Card>
  )
}