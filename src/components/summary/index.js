import React from 'react'
import { List, ListItem, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function ({ items }) {
  return (
    <List>
      {
        items.map(i => <>
          <ListItem>
            <ListItemText primary={i.title} secondary={<>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                <div>
                  {i.description}
                </div>
              </Typography>
              <Link to={`/patients/${i.ClientFile.Patient.id}`}>{i.ClientFile.Patient.firstName}</Link>
            </>} />
          </ListItem>
          <Divider variant="inset" component="li" style={{ marginLeft: 0 }} />
        </>)
      }
    </List>
  )
}