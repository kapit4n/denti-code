import React from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';

import Actions from '../../../components/actions'

import { List, ListItem, ListItemText } from '@mui/material/'
import { useHistory } from "react-router-dom";
import useFetch from '../../../hooks/useFetch';

const ENTITY = 'recordTypes'

export default function Index({ setBreadcrumbs }) {

  const history = useHistory()
  const { data } = useFetch({entity: ENTITY})

  const onRemove = () => {
  }

  const goToCreate = () => {
    history.push(`/${ENTITY}/create`)
  }

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'TYPES LIST' }
    ])
  }, [])

  return (
    <>
      <Button onClick={goToCreate} variant="contained" color="primary">CREATE</Button>
      <List>
        {data && data.map(c => (
          <ListItem key={c.id}>
            <ListItemText primary={`Name: ${c.description}`} secondary={`price: $${c.price}`} />
            <Actions item={c} entity={ENTITY} onRemove={onRemove} />
          </ListItem>))}
      </List>
    </>
  )
}
