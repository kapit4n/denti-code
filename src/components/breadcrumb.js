import React from 'react'
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import './breadcrumb.css'

export default function Index({ items }) {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="breadcrumb-container">
      {items.map(i => (
        <>
          {i.route ? (
            <Link
              underline="hover"
              color="inherit"
              to={i.route}
            >
              {i.label}
            </Link>
          ) : (
            <Typography color="text.primary">{i.label}</Typography>
          )}
        </>
      ))
      }
    </Breadcrumbs>
  )
}
