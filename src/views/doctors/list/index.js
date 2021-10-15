import React from 'react'
import axios from 'axios'

import { List, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction, InconButton, IconButton } from '@mui/material/'

import AddIcon from '@material-ui/icons/ArrowForward'

import DetailComponent from './main'

import { useHistory } from "react-router-dom";

export default function Index() {

  const [clients, setClients] = React.useState([]);
  const history = useHistory()

  React.useEffect(async () => {
    const list = await axios.get(`${process.env.REACT_APP_API_PATH}/doctors/`)
    setClients(list.data)
  }, [])

  const goToItem = (item) => {
    history.push(`/doctors/${item.id}`)
  }

  return (
    <DetailComponent clients={clients} goToItem={goToItem} />
  )
}
