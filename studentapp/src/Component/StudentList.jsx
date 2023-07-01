import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom'

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
      fetchStudents();
    }, []);
  
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/readstudent');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    const handleDelete = async (id) => {
        try {
          const res = await axios.delete(
            `http://localhost:4000/api/delete-student/${id}`
          );
          if (res.status === 200) {
            alert("Successfully deleted");
            // Fetch updated student list
            fetchStudents();
          } else {
            alert("Not successfully deleted");
          }
        } catch (error) {
          console.error("Error deleting student:", error);
        }
      };


  return (
    <div>
    <h2>Student List</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student._id}>
            <td>{student.name}</td>
            <td>{student.username}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td>
                <div>
                  <Link
                    className="btn btn-primary me-3"
                    to={`/edit/${student._id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(student._id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default StudentList
