import React, { useState, useEffect } from 'react'
import { Link, Redirect } from "react-router-dom"
import './table.css'
import { getDelegatesList, deleteDelegate } from 'service/delegates'


const DelegatesTable = () => {
  const [delegatesInfo, setdelegatesInfo] = useState([])
  const [url, setUrl] = useState(null)

  useEffect(() => {
    getDelegatesList().then(delegates => {
      setdelegatesInfo(delegates)

    })
  }, [])

  const handleDelete = (delegate) => {
    deleteDelegate(delegate).then(() => {
      getDelegatesList().then(delegates => {
        setdelegatesInfo(delegates)

      })
    })
  }

  const handleEdit = (delegate) => {
    const redirect = {
      pathname: `/delegate-form`,
      state: { delegate }
    }
    setUrl(redirect)
  }

  if (url) {
    return <Redirect to={url} />
  }

  return (
    <div className="container-fluid">
      <div className="back-link">
        <Link to="/tables">Back to Tables</Link>
      </div>
      <h2>Delegate Details</h2>
      <br />
      <div>
        <Link to="/delegate-form" className="btn btn-primary">Add New Delegate</Link>
      </div>
      <br />
      <div className="table">
        <table className="ui celled table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Fullname</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Type of Personnel</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {delegatesInfo.map(delegate => (
              <tr key={delegate.id}>
                <td>{delegate.fullName}</td>
                <td>{delegate.username}</td>
                <td>{delegate.email}</td>
                <td>{delegate.phone}</td>
                <td>{delegate.type}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(delegate)}>Delete</button>

                  <button className="btn btn-info" onClick={() => handleEdit(delegate)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
    </div>
  )
}

export default DelegatesTable
