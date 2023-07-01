import React, { useState } from 'react'
import Navbar from './Navbar'

export default function AddUser() {
  const [credentials, setcredentials] = useState({ name: "", username: "", email: "", phone: "" })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/createstudent", {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, username: credentials.username, email: credentials.email, phone: credentials.phone })
    });
    const json = await response.json()
    console.log(json);


    if (!json.success) {
      alert("enter valid credentials")
    }

  }
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })

  }
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} />
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
                <input type="text" className="form-control" name="username" value={credentials.username} onChange={onChange} id="exampleInputPassword1" />
              </div>

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
              <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
              <input type="text" className="form-control" name="phone" value={credentials.phone} onChange={onChange} />
            </div>

            <button type="submit" className="btn btn-success">Add Student</button>

          </form>
        </div>


      </div>

    </div>
  )
}
