import React from 'react'
import axios from 'axios'

import { List, ListItem, ListItemText, Button } from '@mui/material/'

import Actions from '../../../components/actions'

import { useHistory } from "react-router-dom";
import { RECORD_ENTITY_NAME } from '../constants'
import useFetch from '../../../hooks/useFetch'
const LIST_BC_LABEL= 'Records List'

export default function Index({ setBreadcrumbs }) {

  const { data } = useFetch({ entity: RECORD_ENTITY_NAME })
  const history = useHistory()

  const onRemove = () => { }

  const goToCreate = () => {
    history.push(`/${RECORD_ENTITY_NAME}/create`)
  }

  React.useEffect(() => {
    setBreadcrumbs([
      { label: LIST_BC_LABEL }
    ])
  }, [])

  return (
    <>
      <Button onClick={goToCreate} variant="contained" color="primary">CREATE</Button>
      <List>
        {data && data.map(c => (
          <ListItem key={c.id}>
            <ListItemText>
              {c.Doctor ? `${c.Doctor.firstName} ${c.Doctor.lastName}` : ''}
            </ListItemText>
            <Actions item={c} entity={RECORD_ENTITY_NAME} onRemove={onRemove} />
          </ListItem>))}
      </List>
    </>
  )
}
