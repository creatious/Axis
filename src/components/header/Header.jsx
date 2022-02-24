import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'

function Header() {

  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <h1 className="navbar-brand">Axis</h1>
        <div className="container">
          <div className="container">
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Search">Search</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
