import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import axios from 'axios'
import { Button } from '@mui/material/';

import RecordModal from './record-popup'

export default function Details() {

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
    setFileInfo(s => ({ ...s, Records: [...s.Records, result.data] }))
  };

  useEffect(async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_PATH}/doctors`)
    setDoctors(result.data)
  }, [])

  useEffect(async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_PATH}/users/${id}`)
    const fileResult = await axios.get(`${process.env.REACT_APP_API_PATH}/files/${id}`)
    setClient(result.data)
    if (fileResult.data) {
      setFileInfo(fileResult.data)
    }
  }, [id])

  const createFile = async () => {
    const result = await axios.post(`${process.env.REACT_APP_API_PATH}/files`, { userId: client.id })
    setFileInfo(result.data)
  }

  return (
    <Card>
      <CardHeader title={`${client.firstName} ${client.lastName} `} />
      <CardContent>
        <div>
          <RecordModal handleClose={handleClose} open={open} doctors={doctors} fileId={fileInfo.id} redirectTo={`${process.env.REACT_APP_API_PATH}/users/${id}`}></RecordModal>
          {fileInfo.id ? (<div>
            File Number: {fileInfo.id}
            <ul>
              <li><Button onClick={handleClickOpen}>Add</Button></li>
              {fileInfo.Records.map(r => <li>{`${r.description} ${r.createdAt}`}</li>)}
            </ul>
          </div>) : (
            <Button onClick={createFile}>Create File</Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}