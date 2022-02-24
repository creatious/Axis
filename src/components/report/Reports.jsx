import React from 'react'
import { Link } from "react-router-dom"
import './report.css';


function Reports() {
  return (
    <div>

      <div className="backMenu"><Link to="/menu">Back to Menu</Link></div>
      <div>
        <h2>Reports to show all details on Axis database</h2>
      </div>

    </div>
  )
}

export default Reports
