import React from 'react'

import { List, ListItem, ListItemText, ListItemSecondaryAction, InconButton, IconButton } from '@material-ui/core'

import AddIcon from '@material-ui/icons/ArrowForward'

export default function Main({ clients, goToItem }) {
  return (
    <List>
      {clients && clients.map(c => (
        <ListItem key={c.id}>
          <ListItemText>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                {`Name: ${c.firstName} ${c.lastName}`}
              </div>
              <div style={{ padding: '1rem' }}>
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
