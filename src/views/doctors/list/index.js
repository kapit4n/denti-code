import React from 'react'
import axios from 'axios'

import DetailComponent from './main'

import { useHistory } from "react-router-dom";
import useFetch from '../../../hooks/useFetch';
import { ENTITY_NAME } from '../constants'

export default function Index({ setBreadcrumbs }) {

  const { data } = useFetch({ entity: ENTITY_NAME })
  const history = useHistory()

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'LIST DOCTORS' }
    ])
  }, [])

  const goToItem = (item) => {
    history.push(`/doctors/${item.id}`)
  }

  const onRemove = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_PATH}/doctors/${id}`)
    // setClients(list => list.filter(l => l.id !== id))
  }

  return (
    <DetailComponent doctors={data} goToItem={goToItem} onRemove={onRemove}/>
  )
}
