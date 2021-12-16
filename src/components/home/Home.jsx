import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="home">
            <Link to="/menu"><h1>Welcome to Axis</h1></Link>
        </div>
    )
}

export default Home
