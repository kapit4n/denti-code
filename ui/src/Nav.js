import React from 'react';

import { Link } from 'react-router-dom';

export default function Nav() {

  const options = ['doctors', 'clients', 'records', 'bookings'];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <ul style={{ display: "flex", justifyContent: 'flex-start', listStyleType: 'none' }}>
        {options.map(o => <li style={{ padding: '0.5rem' }}><Link to={o}>{o}</Link></li>)}
      </ul>
      <div style={{ padding: '1.5rem 2rem' }}>
        <Link to="login">Login</Link>
      </div>
    </div>
  )
}