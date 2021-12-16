import React, { useState, useEffect } from 'react'
import { Link, Redirect } from "react-router-dom"
import { addDelegate, updateDelegate } from 'service/delegates'
import './delegateForm.css'


function DelegateForm(props) {
  const initialValue = {
    fullName: "",
    username: "",
    email: "",
    phone: "",
    type: ""
  }

  const [form, setForm] = useState(initialValue)
  const [url, setUrl] = useState("")

  const handleChange = e => setForm(form => ({ ...form, [e.target.id]: e.target.value }))

  const postData = (e) => {
    e.preventDefault()
    if (props.location?.state?.delegate) {
      updateDelegate(form)
    } else {
      addDelegate(form)
      setForm(initialValue)
    }
    //Used to Set time interval of the code
    setTimeout(() => {
      setUrl("/delegates-table")
    }, 1000)

  }

  useEffect(() => {
    if (props.location?.state?.delegate)
      setForm(props.location?.state?.delegate)
  }, [props.location?.state?.delegate])

  console.log();

  if (url) {
    return <Redirect to={url} />
  }

  return (
    <div className="delegateForm container-fluid">
      <div className="TableLink">
        <Link to="/delegates-table">Back to Delegates Records</Link>
      </div>
      <h2>Delegate Registration Form</h2>
      <div >

        <form className="row g-3 ">
          <div className="col-md-6">
            <label htmlFor="fullName">Full Name</label>
            <input type="name" className="form-control" id="fullName" aria-describedby="name" placeholder="enter fullname" onChange={handleChange} value={form.fullName} />
            <small id="name" className="form-text text-muted">We will Never Share Your email with anyone else.</small>
          </div>

          <div className="col-md-6">
            <label htmlFor="username">UserName</label>
            <input type="name" className="form-control" id="username" placeholder="username" onChange={handleChange} value={form.username} />
            <small id="name" className="form-text text-muted">Your password must be unique</small>
          </div>
          <div className="col-md-6">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Email" onChange={handleChange} value={form.email} />
            <small id="email" className="form-text text-muted">Your password must be unique</small>
          </div>
          <div className="col-md-6">
            <label htmlFor="phone">Phone</label>
            <input type="phone" className="form-control" id="phone" placeholder="Phone" onChange={handleChange} value={form.phone} />
            <small id="phone" className="form-text text-muted">Your password must be unique</small>
          </div>
          <br />
          <div className="col-md-2">
            <h6>Select Form Type</h6>
            <select id="type" onChange={handleChange} value={form.type}>
              <option value=""></option>
              <option value="Staff">Staff</option>
              <option value="Subcon">Subcon</option>
              <option value="Trainee">Trainee</option>
            </select>
          </div>
          <br />
          <div className="col-12">
            <button className="btn-btn primary" onClick={postData} type="submit">Submit</button>
          </div>
        </form>
        <br />

      </div>

    </div>
  )
}

export default DelegateForm
