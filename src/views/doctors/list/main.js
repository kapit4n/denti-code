import React from 'react'

import {
  List, ListItem,
  ListItemText, ListItemSecondaryAction,
  IconButton, Divider, Button
} from '@mui/material/'

import { makeStyles } from '@mui/styles'

import OpenIcon from '@material-ui/icons/FolderOpen'
import DeleteIcon from '@material-ui/icons/DeleteForever'
import { Link } from 'react-router-dom'

import styles from './styles'

const useStyles = makeStyles(styles);



export default function Main({ clients, goToItem, onRemove }) {
  
  const classes = useStyles()
  
  return (
    <>
      <div className={classes.listHeader}>
        <div className={classes.listHeaderActions}>
          <Button variant="contained" color="primary"><Link to="/doctors/create">CREATE</Link></Button>
        </div>
        <div className="list-header-filters">
          <Button >Filters</Button>
        </div>
      </div>
      
      <List className={classes.list}>
        {clients && clients.map(c => (
          <div>
            <ListItem key={c.id}>
              <ListItemText>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h2> {`Name: ${c.firstName} ${c.lastName}`} </h2>
                    <div>{`Speciality: ${c.speciality}`}</div>
                    <div>{`CreateAt: ${c.createdAt}`}</div>
                  </div>
                </div>
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton onClick={() => goToItem(c)}>
                  <OpenIcon />
                </IconButton>

                <IconButton onClick={() => onRemove(c.id)}>
                  <DeleteIcon />
                </IconButton>

              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" style={{ marginLeft: 0 }} />
          </div>
        ))}
      </List>
    </>
  )
}
