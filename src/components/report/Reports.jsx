import React from 'react'
import { Link } from "react-router-dom"
import './report.css';


function Reports() {
    return (
        <div>
            <h2>Reports to show all details on Axis database</h2>
            <div className="backButton">
                <Link to="/menu">Back to Menu</Link>
            </div>

        </div>
    )
}

export default Reports
