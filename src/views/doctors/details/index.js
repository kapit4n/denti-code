import React from 'react';
import { useParams } from 'react-router-dom';

import Main from './main'
import { ENTITY_NAME } from '../constants'
import useFetchDetails from '../../../hooks/useFetchDetails'
import Loading from '../../../components/loading';

export default function Details({ setBreadcrumbs }) {

  const { id } = useParams();
  const {data: doctor, isLoading} = useFetchDetails({ id, entity: ENTITY_NAME })

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'LIST', route: "/doctors" },
      { label: 'DETAILS' }
    ])
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Main data={doctor} />
  )
}
