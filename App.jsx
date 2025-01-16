import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import Navbar from './component/navbar.jsx';
import Showpage from './component/showpage.jsx';
import Addemp from './component/addemp.jsx';
import Viewemp from './component/viewemp.jsx';
import Update from './component/update.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route,Link}from 'react-router-dom';


function App() {
 

  return (

    <>
     <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Showpage />}></Route>
    <Route path='/addemp' element={<Addemp />}></Route>
    <Route path='/viewemp/:id' element={<Viewemp />}></Route>
    <Route path='/update/:id' element={<Update />}></Route>

    </Routes>
    </BrowserRouter>
   

   
    </>
  )
}

export default App
