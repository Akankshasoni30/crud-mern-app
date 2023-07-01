import { useState } from 'react'


import './App.css'
import AddUser from './Component/AddUser'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";


import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import AllUser from './Component/AllStudent';
import AllStudent from './Component/AllStudent';
import EditStudent from './Component/EditStudent';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div>
        <Routes>
          <Route exact path="/addstudent" element={<AddUser></AddUser>}/>
          <Route exact path="/" element={<Home></Home>}/>
          <Route exact path="/allstudent" element={<AllStudent></AllStudent>}/>
          <Route exact path="/edit/:id" element={<EditStudent></EditStudent>}/>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
