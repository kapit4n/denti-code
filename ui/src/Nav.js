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
  const [open, setOpen] = useState(false);

  const options = ['doctors', 'clients', 'records', 'bookings'];

  const handleDrawerOpen = () => {
    setOpen(true);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  }

  return (
    <>
      <AppBar >
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
        <ul onClick={handleDrawerClose}>
          {options.map(o => <li style={{ padding: '0.5rem' }} key={o}><Link to={`/${o}`}>{o}</Link></li>)}
        </ul>
      </Drawer>
    </>
  )
}