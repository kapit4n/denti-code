import React from 'react'
import axios from 'axios'

import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ListItemSecondaryAction, { getListItemSecondaryActionClassesUtilityClass } from '@mui/material/ListItemSecondaryAction';

import OpenIcon from '@material-ui/icons/FolderOpen'
import RemoveIcon from '@material-ui/icons/DeleteForever'
import { makeStyles } from '@material-ui/styles'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch';

import styles from './styles'
import { ENTITY_NAME} from '../constants'

const useStyles = makeStyles(styles)

export default function Index({ setBreadcrumbs }) {
  const { data } = useFetch({ entity: ENTITY_NAME })

  const history = useHistory()
  const classes = useStyles()

  const goToItem = (item) => {
    history.push(`/patients/${item.id}`)
  }

  const onRemove = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_PATH}/patients/${id}`)
    // setClients(clients => clients.filter(c => c.id !== id))
  }

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'LIST' }
    ])
  }, [])

  const renderPrimary = (c) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h2> {`Name: ${c.firstName} ${c.lastName}`} </h2>
        </div>
      </div>
    )
  }

  const renderSecondary = c => (
    <> <div>{`Profession: ${c.profession}`}</div>
      <div>{`CreateAt: ${c.createdAt}`}</div>
    </>
  )

  return (
    <>
      <div className={classes.listHeader}>
        <div className={classes.listHeaderActions}>
          <Button variant="contained" color="primary">
            <Link to="/patients/create">CREATE</Link></Button>
        </div>
        <div className="list-header-filters">
          <Button >Filters</Button>
        </div>
      </div>

      <List>
        {data && data.map(c => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemText primary={renderPrimary(c)}
                secondary={renderSecondary(c)}
              >
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton onClick={() => goToItem(c)}>
                  <OpenIcon />
                </IconButton>
                <IconButton onClick={() => onRemove(c.id)}>
                  <RemoveIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" style={{ marginLeft: 0 }} />
          </>
        ))}
      </List>
    </>
  )
}
