import React from 'react'
import axios from 'axios'

import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

import AddIcon from '@material-ui/icons/ArrowForward'
import './list.css';

import { useHistory } from "react-router-dom";

export default function Index({ setBreadcrumbs }) {
  const [clients, setClients] = React.useState([]);
  const history = useHistory()

  React.useEffect(async () => {
    const list = await axios.get(`${process.env.REACT_APP_API_PATH}/patients/`)
    setClients(list.data)
  }, [])

  const goToItem = (item) => {
    history.push(`/patients/${item.id}`)
  }

  const goToCreate = () => {
    history.push(`/patients/create`)
  }

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'LIST' }
    ])
  }, [])

  return (
    <List className='list'>
      <Button onClick={goToCreate}>New</Button>
      {clients && clients.map(c => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={c.firstName} src={c.img} />
            </ListItemAvatar>
            <ListItemText
              primary={`${c.firstName} ${c.lastName}`}
              secondary={
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {c.profession}
                </Typography>
              }
            >
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton onClick={() => goToItem(c)}>
                <AddIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>

  )
}
