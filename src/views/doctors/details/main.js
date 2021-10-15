import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import axios from 'axios'

export default function Main({ data }) {

  return (
    <Card>
      <CardHeader title={`${data.firstName} ${data.lastName}`} />
      <CardContent>
        <div>
          Speciality: {data.speciality}
        </div>
        <div>
          CreatedAt: {data.createdAt}
        </div>
      </CardContent>
    </Card>
  )
}