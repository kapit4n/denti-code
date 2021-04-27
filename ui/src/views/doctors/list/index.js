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
    const list = await axios.get('http://localhost:3000/doctors/')
    setClients(list.data)
  }, [])

  const goToItem = (item) => {
    history.push(`/doctors/${item.id}`)
  }

  return (
    <List>
      {clients && clients.map(c => (
        <ListItem>
          <ListItemText>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                {`Name: ${c.firstName} ${c.lastName}`}
              </div>
              <div>
                <div>{`Speciality: ${c.speciality}`}</div>
                <div>{`CreateAt: ${c.createdAt}`}</div>
              </div>
            </div>
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
