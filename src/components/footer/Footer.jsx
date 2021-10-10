import React from 'react'
import { currentYear } from './footer.js'
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <h2>copyright Ⓒ {currentYear}</h2>
        </div>
    )
}

export default Footer
