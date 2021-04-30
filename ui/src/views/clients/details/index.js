import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import axios from 'axios'
import { Button } from '@material-ui/core';

export default function Details() {

  const { id } = useParams();
  const [client, setClient] = React.useState({})
  const [fileInfo, setFileInfo] = React.useState({})

  useEffect(async () => {
    const result = await axios.get(`http://localhost:3000/users/${id}`)
    const fileResult = await axios.get(`http://localhost:3000/files/${id}`)
    setClient(result.data)
    if (fileResult.data) {
      setFileInfo(fileResult.data)
    }
  }, [id])

  const createFile = async () => {
    const result = await axios.post(`http://localhost:3000/files`, { userId: client.id })
    setFileInfo(result.data)
  }

  return (
    <Card>
      <CardHeader title={`${client.firstName} ${client.lastName} `} />
      <CardContent>
        <div>
          {fileInfo.id ? (<div>
            File Number: {fileInfo.id}
            <ul>
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