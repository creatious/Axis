import React from 'react'
import { Link } from 'react-router-dom';
import './table.css'


function Tables() {
    return (
        <div className="tables container-sm">
            <div className="TableLink">
                <Link to="/menu">Back to Menu</Link>
            </div>
            <h2>List of Tables</h2>
            {/* <Link to="/users-table" classNameName="shadow-inner ...">Users Table</Link>
            <br />
            <br />
            <Link to="/delegates-table" classNameName="shadow-inner ...">Delegates Table</Link>

            */}
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Users Table</h5>
                            <p className="card-text">Click the button below to view All Users.</p>
                            <Link to="/users-table" className="btn btn-primary">Button</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Delegates Table</h5>
                            <p className="card-text">Click the button below to view All Delegates.</p>
                            <Link to="/delegates-table" className="btn btn-primary">Button</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Clients Table</h5>
                            <p className="card-text">Click the button below to view All Clients.</p>
                            <Link to="#" className="btn btn-primary">Button</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 left-14...">
            </div>

        </div>
    )
}

export default Tables