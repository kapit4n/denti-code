import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import axios from 'axios'
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@material-ui/icons/DeleteOutline'
import IconButton from '@mui/material/IconButton';

import RecordModal from './record-popup'

export default function Details({ setBreadcrumbs }) {
  const { id } = useParams();
  const [client, setClient] = React.useState({})
  const [doctors, setDoctors] = React.useState([])
  const [fileInfo, setFileInfo] = React.useState({})

  const [open, setOpen] = React.useState(false);

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
  };

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'LIST', route: "/patients" },
      { label: 'DETAILS' }
    ])
  }, [])


  useEffect(async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_PATH}/doctors`)
    setDoctors(result.data)
  }, [])

  useEffect(async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_PATH}/patients/${id}`)
    setClient(result.data)
    const fileResult = await axios.get(`${process.env.REACT_APP_API_PATH}/files/${id}`)
    if (fileResult.data) {
      setFileInfo(fileResult.data)
    }
  }, [id])

  const createFile = async () => {
    const result = await axios.post(`${process.env.REACT_APP_API_PATH}/files`, { patientId: client.id })
    console.log(result)
    setFileInfo(result.data)
  }

  const onRemove = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_PATH}/records/${id}`)
    setFileInfo(s => ({ ...s, Records: [...s.Records.filter(f => f.id !== id)] }))
  }

  return (
    <Card>
      <CardHeader title={`${client.firstName} ${client.lastName} `} />
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
    </Card>
  )
}