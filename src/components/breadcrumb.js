import React from 'react'
import { Link } from 'react-router-dom';

export default function Index({ items }) {
  return (
    <div>
      {items.map(i => <><Link to={i.route}>{i.label}</Link> / </>)}
    </div>
  )
}