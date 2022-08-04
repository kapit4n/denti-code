import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import axios from 'axios'

export default function Details() {
  const { id } = useParams();
  const [data, setData] = React.useState({})

  useEffect(async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_PATH}/recordTypes/${id}`)
    setData(result.data)
  }, [id])

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