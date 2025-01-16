import React, { useState }from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function addemp() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [address,setAddress]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState('')
  const navigate=useNavigate()


        const Submit=(e)=>
          {
             
               e.preventDefault()
               axios.post("http://localhost:5000/employee",{name,email,address,designation,salary})
               .then(result=>{
                  console.log(result)
                  navigate('/')
                  alert("Employee added successfully")
              })
               .catch(err=>console.log(err))
      }
  return (  
    <div className='cont'>
    <div className='createform'>
      
    <form onSubmit={Submit}>
      <h1 align="center">Add Employee</h1>
    <br></br>
    <input type="text" className="form-control" style={{backgroundColor:`transparent`,borderColor:`black`}} id="" 
     onChange={(e)=>setName(e.target.value)} placeholder="Enter your  Name" required></input><br></br>
    
    <input type="text" className="form-control" style={{backgroundColor:`transparent` ,borderColor:`black`}} id="" 
     onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" required></input><br></br>
 
   
    <input type="text" className="form-control" style={{backgroundColor:`transparent`, borderColor:`black`}} id=""   
    onChange={(e)=>setAddress(e.target.value)} placeholder="Enter your  Address" required></input><br></br>

    
    <input type="text" className="form-control" style={{backgroundColor:`transparent`, borderColor:`black`}} id=""  
    onChange={(e)=>setDesignation(e.target.value)} placeholder="Enter your Designation" required></input>
   <br></br>

    <input type="text" className="form-control" style={{backgroundColor:`transparent`, borderColor:`black`}} id=""  
    onChange={(e)=>setSalary(e.target.value)} placeholder="Enter your Salary" required></input>
<br></br>

<div className='row'>
  <div className='col-1'></div>
  <div className='col-sm-4'>
    < button align="center" className="btn btn-success" role="button" style={{marginLeft:`70px`}}>Submit</button>
  </div>
   <div className='col-sm-1'></div>
   <div className='col-sm-4'>
    < button align="center" type="reset" className="btn btn-danger" role="button"  style={{marginLeft:`5px`}}>Cancle</button>
     
      </div>
      </div>
      </form>
    </div>
    </div>
  
  )
  
}

export default addemp
