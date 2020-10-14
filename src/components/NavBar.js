import React from 'react';
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}