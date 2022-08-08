import React from 'react'
import Button from '@mui/material/Button';

import Actions from '../../../components/actions'

import { List, ListItem, ListItemText } from '@mui/material/'
import { useHistory } from "react-router-dom";
import useFetch from '../../../hooks/useFetch';
import { RECORD_TYPES_ENTITY_NAME} from '../constants'

const LIST_BC_LABEL = 'TYPES LIST'

export default function Index({ setBreadcrumbs }) {
  const { data } = useFetch({ entity: RECORD_TYPES_ENTITY_NAME })
  const history = useHistory()

  const onRemove = () => {
  }

  const goToCreate = () => {
    history.push(`/${RECORD_TYPES_ENTITY_NAME}/create`)
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
            <ListItemText primary={`Name: ${c.description}`} secondary={`price: $${c.price}`} />
            <Actions item={c} entity={RECORD_TYPES_ENTITY_NAME} onRemove={onRemove} />
          </ListItem>))}
      </List>
    </>
  )
}
