import React from 'react'

import Summary from '../../components/summary'
import { ENTITY_NAME as RECORD_ENTITY_NAME } from '../records/constants'
import { ENTITY_NAME as RECORDTYPE_ENTITY_NAME } from '../recordTypes/constants'
import { ENTITY_NAME as APPOINTMENTS_ENTITY_NAME } from '../appointments/constants'
import useFetchForDashboard from '../../hooks/useFetchForDashboard'
import Loading from '../../components/loading'

const RECORD_ITEM = 'Record'

export default function Index() {

  const { data, isLoading } = useFetchForDashboard({ entityName: RECORD_ENTITY_NAME })

  if (isLoading) {
    return <Loading />
  }

  console.log(data)
  console.log(data)
  console.log(data)
  console.log(data)

  return (
    <Summary items={data} />
  )
}