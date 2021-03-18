import React from 'react';

export default function Nav() {

  const options = ['doctor', 'clients', 'records'];

  return (
    <div>
      {options.map(o => <span>{o} | </span>)}
    </div>
  )
}