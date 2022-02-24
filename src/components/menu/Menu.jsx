import React from 'react'
import { Link } from 'react-router-dom';
import './menu.css'


function Menu() {
  return (
    <div className="container">
      <div>
        <Link to="/search" className="menu-option">Search</Link>
        <Link to="/reports" className="menu-option">Reports</Link>
        <Link to="/tables" className="menu-option">Tables</Link>
        <Link to="/delegate-form" className="menu-option">Forms</Link>
      </div>
      <div className="backButton"><Link to="/">Back to Home</Link></div>
    </div>
  )
}

export default Menu
