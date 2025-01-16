import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <nav className="nav">
    <div className="tag">
            <ul className="nav nav-underline">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home Page</a>
            </li>
           
            <li className="nav-item">
            <Link to ='/addemp' className="nav-link" aria-disabled="true" style={{color:`black`}}><b>Add Employee</b></Link>
            </li>
        </ul>
        </div>
        </nav>   
    
  )}

export default navbar;
