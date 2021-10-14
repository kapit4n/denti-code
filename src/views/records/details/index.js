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
    const result = await axios.get(`${process.env.REACT_APP_API_PATH}/records/${id}`)
    setData(result.data)
  }, [id])

  return (
    <Card>
      <CardHeader title={data.ClientFile ? `${data.ClientFile.id}`: ''} />
      <CardContent>
        <div>
          Doctor: {data.Doctor ? `${data.Doctor.firstName} ${data.Doctor.lastName}`: ''}
        </div>
        <div>
          CreatedAt: {data.createdAt}
        </div>
      </CardContent>
    </Card>
  )
}