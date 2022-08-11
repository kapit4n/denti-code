import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@material-ui/icons/DeleteOutline'
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import RecordModal from './record-popup'
import useFetchDetails from '../../../hooks/useFetchDetails'
import { ENTITY_NAME } from '../constants'
import { ENTITY_NAME as DOCTOR_ENTITY_NAME } from '../../doctors/constants'
import { FILES_ENTITY_NAME } from '../constants'
import Loading from '../../../components/loading';

export default function Details({ setBreadcrumbs }) {
  const { id } = useParams();
  const {data: client, isLoading} = useFetchDetails({ id, entity: ENTITY_NAME })
  const {data: doctors, isLoading: doctorsLoading} = useFetchDetails({ id, entity: DOCTOR_ENTITY_NAME })
  const {data: fileInfo, isLoading: filesLoading, setData: setFileInfo} = useFetchDetails({ id, entity: FILES_ENTITY_NAME })
  
  const [open, setOpen] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async (result) => {
    setOpen(false);
    if (fileInfo.Records) {
      setFileInfo(s => ({ ...s, Records: [...s.Records, result.data] }))
    } else {
      setFileInfo(s => ({ ...s, Records: [result.data] }))
    }
    setOpenSnack(true);
  };

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'LIST', route: "/patients" },
      { label: 'DETAILS' }
    ])
  }, [])

  const createFile = async () => {
    const result = await axios.post(`${process.env.REACT_APP_API_PATH}/files`, { patientId: client.id })
    console.log(result)
    setFileInfo(result.data)
  }

  const onRemove = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_PATH}/records/${id}`)
    setFileInfo(s => ({ ...s, Records: [...s.Records.filter(f => f.id !== id)] }))
  }

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnack(false)
  }

  if (isLoading || doctorsLoading || filesLoading) {
    return <Loading />
  }

  return (
    <Card>
      <CardHeader title={`${client.firstName} ${client.lastName} `}>
      </CardHeader>
      <CardMedia
        component="img"
        height="300"
        image="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
        alt="Paella dish"
      />
      <CardContent>
        <div>
          <RecordModal handleClose={handleClose} open={open} doctors={doctors} fileId={fileInfo.id}></RecordModal>
          {fileInfo.id ? (<div>
            File Number: {fileInfo.id}
            <List>
              <li><Button onClick={handleClickOpen}>Add</Button></li>
              {fileInfo.Records && fileInfo.Records.map(r => <>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={`${r.description}`}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {r.createdAt}

                        </Typography>

                        <IconButton onClick={() => onRemove(r.id)}>
                          <RemoveIcon />
                        </IconButton>
                      </>
                    }
                  >
                  </ListItemText></ListItem>
                <Divider variant="inset" component="li" style={{ marginLeft: 0 }} />
              </>)}
            </List>
          </div>) : (
            <Button onClick={createFile}>Create File</Button>
          )}
        </div>
      </CardContent>
      <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
          Record created successfully
        </Alert>
      </Snackbar>
    </Card>
  )
}