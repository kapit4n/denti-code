import React from 'react'
import Button from '@mui/material/Button';

import Actions from '../../../components/actions'

import { List, ListItem, ListItemText, Divider } from '@mui/material/'
import { useHistory } from "react-router-dom";
import useFetch from '../../../hooks/useFetch';
import { deleteAction } from '../../../services/crud';
import { ENTITY_NAME } from '../constants'
import "./index.css"

const LIST_BC_LABEL = 'TYPES LIST'

export default function Index({ setBreadcrumbs }) {
  const { data, refetch } = useFetch({ entity: ENTITY_NAME })
  const history = useHistory()
  const [actionResult, setActionResult] = React.useState("")
  const [displayResult, setDisplayResult] = React.useState(false)

  const displayResultFn = (actionText) => {
    setActionResult(actionText)
    setDisplayResult(true)
    setTimeout(() => {
      console.log("HIDE THE RESULT")
      setDisplayResult(false)
    }, 2000)
  }

  const onRemove = async (id) => {
    const deleteResult = await deleteAction({ entity: ENTITY_NAME, id: id })
    refetch();
    if (deleteResult.failed) {
      displayResultFn("Failed to remove Record Type")
    } else {
      displayResultFn("Record Type was removed")
    }
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
      <div className="actions-container">
        <Button onClick={goToCreate} variant="contained" color="primary">CREATE</Button>
        {displayResult && (
          <div>
            {actionResult}
          </div>
        )
        }
      </div>

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
