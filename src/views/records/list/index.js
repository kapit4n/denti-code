import React from 'react'
import axios from 'axios'

import { List, ListItem, ListItemText, Button } from '@mui/material/'

import Actions from '../../../components/actions'

import { useHistory } from "react-router-dom";
import { ENTITY_NAME } from '../constants'
import useFetch from '../../../hooks/useFetch'
import Loading from '../../../components/loading';
const LIST_BC_LABEL = 'Records List'

export default function Index({ setBreadcrumbs }) {

  const { data, isLoading } = useFetch({ entity: ENTITY_NAME })
  const history = useHistory()

  const onRemove = () => { }

  const goToCreate = () => {
    history.push(`/${ENTITY_NAME}/create`)
  }

  React.useEffect(() => {
    setBreadcrumbs([
      { label: LIST_BC_LABEL }
    ])
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Button onClick={goToCreate} variant="contained" color="primary">CREATE</Button>
      <List>
        {data && data.map(c => (
          <ListItem key={c.id}>
            <ListItemText>
              {c.Doctor ? `${c.Doctor.firstName} ${c.Doctor.lastName}` : 'No doctor'},
              {c.ClientFile && c.ClientFile.Patient ? `${c.ClientFile.Patient.firstName} ${c.ClientFile.Patient.lastName}` : 'No Patient'},
              {c.RecordType ? `${c.RecordType.description} ` : 'No Type'}
            </ListItemText>
            <Actions item={c} entity={ENTITY_NAME} onRemove={onRemove} />
          </ListItem>))}
      </List>
    </>
  )
}
