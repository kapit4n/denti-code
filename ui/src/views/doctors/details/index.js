import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import axios from 'axios'

export default function Details() {

  const { id } = useParams();
  const [data, setData] = React.useState({})

  useEffect(async () => {
    const result = await axios.get(`http://localhost:3000/doctors/${id}`)
    setData(result.data)
  }, [id])

  return (
    <Card>
      <CardHeader title={`${data.firstName} ${data.lastName}`} />
      <CardContent>
        <div>
          Speciality: {data.speciality}
        </div>
        <div>
          CreatedAt: {data.createdAt}
        </div>
      </CardContent>
    </Card>
  )
}