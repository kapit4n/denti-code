import React from 'react'
import { Link } from 'react-router-dom';

import { Avatar, List, ListItem, ListItemText } from '@mui/material'
import Divider from '@mui/material/Divider';

import './summary.css'

export default function ({ items }) {
  return (
    <List>
      {
        items.map(i => <>
          <ListItem>
            <ListItemText >
              <h3><span className="summary-item-type">[{i.type}]</span> {i.title}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  {i.description}
                </span>
                <Avatar alt={i.ClientFile.Patient?.firstName} src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
              </div>
              {i.links.map(l => (
                <Link to={`${l.path}/${l.value}`}>{l.label}</Link>
              ))}

            </ListItemText>
          </ListItem>
          <Divider variant="inset" component="li" style={{ marginLeft: 0 }} />
        </>)
      }
    </List>
  )
}