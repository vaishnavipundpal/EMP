import React from 'react'
import { useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

function showpage() {
  
    const[employees,setEmployees]=useState([]);
    useEffect(()=>
        {
            axios.get('http://localhost:5000/employee')
            .then(result=>setEmployees(result.data))
            .catch(err=>console.log(err))
    
        },[])

        const handleDelete=(id)=>
          {
           axios.delete("http://localhost:5000/employee/"+id)
           .then(result=>{
             console.log(result)
             window.location.reload()
             alert("Employee deleted successfully")
           })
          }

  return (    <>
  <div className='con'>
    <div  className='container'>
    <table className="table table-bordered">
   <thead  className='table table-success'>
     <tr>
       <th scope="col" style={{width:`20rem`, paddingLeft:`100px`}}>Employee ID</th>
       <th scope="col" style={{width:`20rem`, paddingLeft:`150px`}}>Employee Name</th>
       <th scope="col" style={{width:`20rem`, paddingLeft:`150px`}}>Action</th>
       
     </tr>
   </thead>
   <tbody className="tbody">
   {
                         employees.map((user)=>
                         {
                           return  <tr key={user.Id}>
                                 <td>{user.id}</td>
                                 <td>{user.name}</td>
                               
                                 <td className='d-flex justify-content-between'>                                 
                                 <Link to={`/viewemp/${user.id}`} className='btn btn-success' align="right" >                         
                                 View 
                                   </Link>                                  
                                   <Link to={`/update/${user.id}`} className='btn btn-primary' align="right">                          
                                 Update 
                                   </Link>
                                 <button className="btn btn-danger" 
                                 onClick={(e)=>handleDelete(user.id)}>Delete</button></td>
                             </tr>
                         })
                         }</tbody>
 </table>
     </div>
     </div>
     </>
  )}

export default showpage
