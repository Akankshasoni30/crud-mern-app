import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from './Navbar';

const EditStudent = () => {
    const [credentials, setcredentials] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
      });
    
      const { id } = useParams();
    
      const handleEdit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:4000/api/students/${id}`, {
          method: "PUT",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            name: credentials.name,
            username: credentials.username,
            email: credentials.email,
            phone: credentials.phone,
          }),
        });
        const json = await response.json();
        console.log(json);
    
        if (response.status === 200) {
          alert("Succesfully edited !!!!");
        }
        else {
            alert("Not Succesfully edited !!!!");
        }
      };
      const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
      };
    
      useEffect(() => {
        fetchStudentsById(id);
      }, []);
    
      const fetchStudentsById = async (id) => {
        try {
          const response = await axios.get(
            `http://localhost:4000/api/update-student/${id}`
          );
          setcredentials(response.data);
        } catch (error) {
          console.error("Error fetching students:", error);
        }
      };
  return (
    <div>
    <div>
      <Navbar></Navbar>
    </div>

    <div>
      <div className="container">
        <form onSubmit={handleEdit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={credentials.username}
                onChange={onChange}
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email{" "}
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={credentials.phone}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-secondary">
            Edit Student
          </button>
        </form>
      </div>
    </div>
  </div>
);
}

export default EditStudent
