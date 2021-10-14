import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios'
import Main from './main'

export default function Details() {

  const { id } = useParams();
  const [data, setData] = React.useState({})

  useEffect(async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_PATH}/doctors/${id}`)
    setData(result.data)
  }, [id])

  return (
    <Main data={data} />
  )
}