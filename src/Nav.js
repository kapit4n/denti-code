import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { UserContext } from './App'
import { useHistory } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 100,
    flexShrint: 0,
  }
}))

export default function Nav() {
  const { user, setUser } = React.useContext(UserContext);
  const history = useHistory()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const options = ['doctors', 'patients', 'records', 'bookings'];

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
          {!matches && (
            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start">
              <MenuIcon />
            </IconButton>
          )}
          {matches && (
            <div style={{ display: 'flex' }}>
              <Link to={`/`}>Dashboard</Link>
              <div style={{ borderLeft: '2px solid white', height: '1rem', margin: '0 0.5rem' }}></div>
              <Link to={`/patients`}>Patients</Link>
              <div style={{ borderLeft: '2px solid white', height: '1rem', margin: '0 0.5rem' }}></div>
              <Link to={`/doctors`}>Doctors</Link>
            </div>
          )}
          {user && user.firstName ? (
            <div style={{ padding: '1.5rem 2rem' }}>
              <span>{user.firstName}</span>
              <Button onClick={() => {
                setUser({})
                history.push('/')
              }}>Logout</Button>
            </div>
          ) : (
            <div style={{ padding: '1.5rem 2rem' }}>
              <Link to="/login">Login</Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {!matches && (
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
      )}
    </>
  )
}