import React from 'react'
import Button from '@mui/material/Button';

import Actions from '../../../components/actions'

import { List, ListItem, ListItemText, Divider } from '@mui/material/'
import { useHistory } from "react-router-dom";
import useFetch from '../../../hooks/useFetch';
import { ENTITY_NAME } from '../constants'

const LIST_BC_LABEL = 'TYPES LIST'

export default function Index({ setBreadcrumbs }) {
  const { data } = useFetch({ entity: ENTITY_NAME })
  const history = useHistory()

  const onRemove = () => {
  }

  const goToCreate = () => {
    history.push(`/${ENTITY_NAME}/create`)
  }

  React.useEffect(() => {
    setBreadcrumbs([
      { label: LIST_BC_LABEL }
    ])
  }, [])

  const renderPrimary = (c) => (
    <h2>{`Name: ${c.description}`}</h2>
  )

  return (
    <>
      <Button onClick={goToCreate} variant="contained" color="primary">CREATE</Button>
      <List>
        {data && data.map(c => (
          <>
            <ListItem key={c.id} alignItems="flex-start">
              <ListItemText primary={renderPrimary(c)} secondary={`price: $${c.price}`} />
              <Actions item={c} entity={ENTITY_NAME} onRemove={onRemove} />
            </ListItem>
            <Divider variant="inset" component="li" style={{ marginLeft: 0 }} />
          </>
        ))}
      </List>
    </>
  )
}
