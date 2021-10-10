import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom';


function menu() {
    return (
        <div>
            <Link to="/search" className="menu-option">Search</Link>
            <Link to="/reports" className="menu-option">Reports</Link>
            <Link to="/tables" className="menu-option">Tables</Link>
            <Link to="/tables" className="menu-option">Forms</Link>
        </div>
    )
}

export default menu
