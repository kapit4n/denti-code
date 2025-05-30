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

import styles from './styles'

import { makeStyles } from '@mui/styles';
import { useLocation } from 'react-router-dom';

import {
  useRouteMatch,
} from "react-router-dom";

const useStyles = makeStyles(styles)

export default function Nav() {
  const { user, handleUserChange } = React.useContext(UserContext);
  const history = useHistory()
  const theme = useTheme();
  let match = useRouteMatch();

  let location = useLocation();

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

  const includesPatients = location.pathname.includes('patients')
  const includesDoctors = location.pathname.includes('doctors')
  const includesRecordTypes = location.pathname.includes('recordTypes')
  const includesRecords = location.pathname.includes('records')
  const includesAppointments = location.pathname.includes('appointments')

  return (
    <>
      <AppBar>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          {!matches && (
            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start">
              <MenuIcon />
            </IconButton>
          )}
          {matches && (<>
            <div className={classes.linksContainer}>
              <Link to={`/`} className={!includesPatients && !includesDoctors && !includesRecordTypes && !includesRecords && !includesAppointments ? classes.currentLink : classes.activeLink}>Dashboard</Link>
              <Link to={`/patients`} className={includesPatients ? classes.currentLink : classes.activeLink}>Patients</Link>
              <Link to={`/doctors`} className={includesDoctors ? classes.currentLink : classes.activeLink}>Doctors</Link>
              <Link to={`/doctors`} className={includesDoctors ? classes.currentLink : classes.activeLink}>Specializations</Link>
              <Link to={`/recordTypes`} className={includesRecordTypes ? classes.currentLink : classes.activeLink}>Categories</Link>
              <Link to={`/recordTypes`} className={includesRecordTypes ? classes.currentLink : classes.activeLink}>Types</Link>
              <Link to={`/appointments`} className={includesAppointments ? classes.currentLink : classes.activeLink}>Appointments</Link>
              <Link to={`/records`} className={includesRecords ? classes.currentLink : classes.activeLink}>Actions</Link>
            </div>
            </>
          )}

          {user && user.firstName ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span>{user.firstName.charAt(0)}</span>
              <Button style={{ color: 'white' }} variant="outlined" onClick={() => { handleUserChange({})
                history.push('/')
              }}>SignOut</Button>
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