import React from 'react'
import axios from 'axios'

import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material/'

import AddIcon from '@material-ui/icons/ArrowForward'

import { useHistory } from "react-router-dom";

export default function Index() {

  const [clients, setClients] = React.useState([]);
  const history = useHistory()

  React.useEffect(async () => {
    const list = await axios.get(`${process.env.REACT_APP_API_PATH}/records/`)
    setClients(list.data)
  }, [])

  const goToItem = (item) => {
    history.push(`/records/${item.id}`)
  }

  return (
    <List>
      {clients && clients.map(c => (
        <ListItem key={c.id}>
          <ListItemText>
            {c.Doctor ? `${c.Doctor.firstName} ${c.Doctor.lastName}` : ''}
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
