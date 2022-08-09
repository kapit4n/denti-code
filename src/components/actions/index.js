import React from 'react'
import { ListItemSecondaryAction, IconButton } from '@mui/material/'

import OpenIcon from '@material-ui/icons/FolderOpen'
import RemoveIcon from '@material-ui/icons/DeleteForever'
import { useHistory } from "react-router-dom";

const Actions = ({ entity, onRemove, item }) => {
  const history = useHistory()

  const goToItem = (item) => {
    history.push(`/${entity}/${item.id}`)
  }

  return (
    <ListItemSecondaryAction>
      <IconButton onClick={() => goToItem(item)}>
        <OpenIcon />
      </IconButton>
      <IconButton onClick={() => onRemove(item.id)}>
        <RemoveIcon />
      </IconButton>
    </ListItemSecondaryAction>
  )
}

export default Actions;