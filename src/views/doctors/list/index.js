import React from 'react'
import axios from 'axios'

import DetailComponent from './main'

import { useHistory } from "react-router-dom";

export default function Index() {

  const [clients, setClients] = React.useState([]);
  const history = useHistory()

  React.useEffect(async () => {
    const list = await axios.get(`${process.env.REACT_APP_API_PATH}/doctors/`)
    setClients(list.data)
  }, [])

  const goToItem = (item) => {
    history.push(`/doctors/${item.id}`)
  }

  const onRemove = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_PATH}/doctors/${id}`)
    setClients(list => list.filter(l => l.id !== id))
  }

  return (
    <DetailComponent clients={clients} goToItem={goToItem} onRemove={onRemove}/>
  )
}
