import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 100,
    flexShrint: 0,
  }
}))

export default function Nav() {

  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const options = ['doctors', 'clients', 'records', 'bookings'];

  const handleDrawerOpen = () => {
    setOpen(true);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  }

  return (
    <>
      <AppBar>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start">
            <MenuIcon />
          </IconButton>
          <div style={{ padding: '1.5rem 2rem' }}>
            <Link to="login">Login</Link>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" archor="left" open={open} classes={{ paper: classes.drawePaper }}>
        <IconButton color="inherit" aria-label="close drawer" onClick={handleDrawerClose} edge="start">
          <MenuIcon />
        </IconButton>

        <ul onClick={handleDrawerClose} style={{ marginBlock: 0, paddingInline: '0.5rem' }}>
          {
            options.map(o => <li style={{
              listStyle: 'none'
            }} key={o}>
              <div style={{ padding: '1rem 0.3rem', borderBottom: '1px solid' }}>
                <Link to={`/${o}`} style={{ fontStyle: 'none', textDecoration: 'none' }}>{o}</Link>
              </div>
            </li>)
          }
        </ul>

      </Drawer>
    </>
  )
}