import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios'
import Main from './main'

export default function Edit() {

  const { id } = useParams();
  const [data, setData] = React.useState({})

  useEffect(async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_PATH}/doctors/${id}`)

    console.log(result.data)

    setData(result.data)
  }, [id])

  return (
    <Main data={data} id={id} />
  )
}