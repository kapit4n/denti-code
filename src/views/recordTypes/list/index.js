import React from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';

import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material/'

import AddIcon from '@material-ui/icons/ArrowForward'

import { useHistory } from "react-router-dom";

export default function Index({ setBreadcrumbs }) {

  const [clients, setClients] = React.useState([]);
  const history = useHistory()

  React.useEffect(async () => {
    const list = await axios.get(`${process.env.REACT_APP_API_PATH}/recordTypes/`)
    setClients(list.data)
  }, [])

  const goToItem = (item) => {
    history.push(`/recordTypes/${item.id}`)
  }

  const goToCreate = () => {
    history.push(`/recordTypes/create`)
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
        {clients && clients.map(c => (
          <ListItem key={c.id}>
            <ListItemText>
              {c.description} - {c.price}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton onClick={() => goToItem(c)}>
                <AddIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>))}
      </List>
    </>
  )
}
