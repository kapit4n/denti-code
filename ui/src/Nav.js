import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

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
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Drawer variant="persistent" archor="left" open={open} classes={{ paper: classes.drawePaper }}>
        <ul>
          {options.map(o => <li style={{ padding: '0.5rem' }}><Link to={o}>{o}</Link></li>)}
        </ul>
      </Drawer>
      <div>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </div>
      <div style={{ padding: '1.5rem 2rem' }}>
        <Link to="login">Login</Link>
      </div>
    </div>
  )
}