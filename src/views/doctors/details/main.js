import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'

import './main.css'
import { Button } from '@mui/material';

const Actions = ({ onDelete, id }) => {
  return (
    <div className="doctor-details-actions">
      <Button className="primary"> <Link to={`/doctors/edit/${id}`}>Edit</Link> </Button>
      <Button onClick={onDelete}>Delete</Button>
    </div>
  )
}

export default function Main({ data }) {

  const onDelete = useCallback((id) => {
    console.log("Delete it: " + id)
  })

  return (
    <Card>
      <CardHeader title={`${data.firstName} ${data.lastName}`} />
      <Actions onDelete={onDelete} id={data.id} />
      <CardMedia
        component="img"
        height="300"
        image="https://media.istockphoto.com/vectors/doctor-icon-or-avatar-physician-with-stethoscope-medicine-symbol-vector-id1150502263?k=20&m=1150502263&s=612x612&w=0&h=s2_jO-vB7I_Jd5UqFIacb5hpXrTFjOFpOTABRiVg40A="
        alt="Paella dish"
      />
      <CardContent>
        <div className="info-row">
          <label>Speciality:</label> {data.speciality}
        </div>
        <div className="info-row">
          <label>CreatedAt:</label> {data.createdAt}
        </div>
      </CardContent>
    </Card>
  )
}