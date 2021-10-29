import React from 'react'
import { Link } from 'react-router-dom';

import { Avatar, List, ListItem, ListItemText } from '@mui/material'
import Divider from '@mui/material/Divider';

export default function ({ items }) {
  return (
    <List>
      {
        items.map(i => <>
          <ListItem>
            <ListItemText >
              <h3>{i.title}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  {i.description}
                </span>
                <Avatar alt={i.ClientFile.Patient?.firstName} src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
              </div>
              <Link to={`/patients/${i.ClientFile?.Patient?.id}`}>{i.ClientFile.Patient?.firstName}</Link>

            </ListItemText>
          </ListItem>
          <Divider variant="inset" component="li" style={{ marginLeft: 0 }} />
        </>)
      }
    </List>
  )
}