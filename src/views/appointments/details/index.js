import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import useFetchDetails from '../../../hooks/useFetchDetails'
import { ENTITY_NAME } from '../constants'
import Loading from '../../../components/loading';

export default function Details({setBreadcrumbs}) {
  const { id } = useParams();
  const { isLoading, data } = useFetchDetails({ id, entity: ENTITY_NAME })
  const { isLoading: isLoadingRecord, data: recordInfo } = useFetchDetails({ id: data.Record? data.Record.id: 0, entity: 'records' })
  
  useEffect(() => {
    setBreadcrumbs([
      { label: 'LIST APPOINTMENTS', route: "/appointments" },
      { label: 'DETAILS' }
    ])
  }, [])

  if (isLoading || isLoadingRecord) {
    return <Loading />
  }

  return (
    <Card>
      <CardHeader title={` ${recordInfo.ClientFile && recordInfo.ClientFile.Patient.firstName} - ${data.description} - ${data.createdAt}`} />
      <CardContent>
        <div>
          Record Type: {data.Record && data.Record.RecordType && data.Record.RecordType.description}
        </div>
        <div>
          Record Description: {recordInfo && recordInfo.description}
        </div>
        <div>
          Doctor: {recordInfo.Doctor && recordInfo.Doctor.firstName}
        </div>
        <div>
          Patient: {recordInfo.ClientFile && recordInfo.ClientFile.Patient.firstName}
        </div>
        <div>
          Description: {data.description}
        </div>
        <div>
          CreatedAt: {data.createdAt}
        </div>
      </CardContent>
    </Card>
  )
}