import React, {useState} from 'react'

import { List, ListItem, ListItemText, Button } from '@mui/material/'

import Actions from '../../../components/actions'

import { useHistory } from "react-router-dom";
import { ENTITY_NAME } from '../constants'
import useFetch from '../../../hooks/useFetch'
import Loading from '../../../components/loading';
import { onDelete } from '../../../services/crud'
const LIST_BC_LABEL = 'Appoitments List'


export default function Index({ setBreadcrumbs }) {

  const { data, isLoading, setData } = useFetch({ entity: ENTITY_NAME })
  const [displayError, setDisplayError] = useState(false)
  const [displayActionInfo, setDisplayActionInfo] = useState(false)
  const history = useHistory()


  const removeCachedData =  (id) => {
    const newData = data.filter(d => d.id !== id)
    setData(newData)
  }

  const onRemove = async (id) => {
    // setLoading(true)
    const { failed } = onDelete({ entity: ENTITY_NAME, id })
    if (failed) {
      setDisplayError(true)
    } else {
      setDisplayActionInfo(true)
      removeCachedData(id)
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
              {c.id},
              {c.description},
              {c.Record ? c.Record.description : "No record"},
              {c.date}
            </ListItemText>
            <Actions item={c} entity={ENTITY_NAME} onRemove={() => onRemove(c.id)} />
          </ListItem>))}
      </List>
    </>
  )
}
