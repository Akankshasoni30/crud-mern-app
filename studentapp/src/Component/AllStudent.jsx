import React from 'react'
import Navbar from './Navbar'
import StudentList from './StudentList'

const AllStudent = () => {
  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
    <div>
    <h1>My Student App</h1>
    <StudentList></StudentList>
    </div>
    </>
  )
}

export default AllStudent

