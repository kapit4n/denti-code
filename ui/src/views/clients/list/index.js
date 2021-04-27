import React from 'react'
import axios from 'axios'

import { List, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction, InconButton, IconButton } from '@material-ui/core'

import PlusIcon from '@material-ui/icons/PlusOne'
import AddIcon from '@material-ui/icons/ArrowForward'

import { useHistory } from "react-router-dom";

export default function Index() {

  const [clients, setClients] = React.useState([]);
  const history = useHistory()

  React.useEffect(async () => {
    const list = await axios.get('http://localhost:3000/users/')
    console.log(list.data)
    setClients(list.data)
  }, [])

  const goToItem = (item) => {
    history.push(`/clients/${item.id}`)
  }

  return (
    <List>
      {clients && clients.map(c => (
        <ListItem>
          <ListItemIcon>
            <PlusIcon />
          </ListItemIcon>
          <ListItemText>
            {`${c.firstName} ${c.lastName}`}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={() => goToItem(c)}>
              <AddIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>))}
    </List>
  )
}
