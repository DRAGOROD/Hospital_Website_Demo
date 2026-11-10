import React,{useState,useContext} from 'react'

import { navContext } from './App';

function Navbar(){

let [navDropdown1,setnavDropdown1]=useState(false);
let [navDropdown2,setnavDropdown2]=useState(false);

let {homeRef,facilityRef,doctorRef,locationRef}=useContext(navContext)


  return (
    <>
    <div id="nav-section">
        <ul>
            <li onClick={()=>homeRef.current.scrollIntoView({behavior:'smooth'})}>Home</li>
            <li onMouseEnter={()=>setnavDropdown1(true)} onMouseLeave={()=>setnavDropdown1(false)}>
             <span>Patient Case <span style={navDropdown1?{display: 'inline-block', transform:'rotate(270deg)',fontSize:'medium',transition:"0.3s ease"}:{display: 'inline-block', transform:'rotate(90deg)',fontSize:'medium',transition:"0.3s ease"}}>▶</span></span> 
            <ul id="nav-dropdown1">
               <li>Find a Doctor</li>
               <li>Quality Control</li>
               <li>Test Details</li>
            </ul>
            </li>
            <li onClick={()=>facilityRef.current.scrollIntoView({behavior:'smooth'})}>Fecilities</li>
            <li onClick={()=>doctorRef.current.scrollIntoView({behavior:'smooth'})}>Doctors</li>
            <li onMouseEnter={()=>setnavDropdown2(true)} onMouseLeave={()=>setnavDropdown2(false)}>
              <span> Academics & Research <span style={navDropdown2?{display: 'inline-block', transform:'rotate(270deg)',fontSize:'medium',transition:"0.3s ease"}:{display: 'inline-block', transform:'rotate(90deg)',fontSize:'medium',transition:"0.3s ease"}}>▶</span></span> 
            <ul id="nav-dropdown2">
               <li>Academics</li>
               <li>Critical Research</li>
            </ul>
            </li>
            <li onClick={()=>locationRef.current.scrollIntoView({behavior:'smooth'})}>Location</li>
        </ul>
        <span>Book Appointment <span style={{fontSize:'x-large'}}>➲</span></span>
        </div>
        <div id='scroll-progressbar'>
           <div></div>
        </div>
    </>
  )
}

export default Navbar