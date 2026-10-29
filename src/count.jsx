import React,{useEffect, useState,useRef} from 'react'

function Count(){

let currentElRef=useRef(null)

let [doctors,setDoctors]=useState(0);
let [paitients,setPaitients]=useState(0);
let [hospitals,setHospitals]=useState(0);

function handleCount(x,i,n,countEl){
let interval=setInterval(()=>{
    i++;
    countEl(i)
if(i>=n){
    clearInterval(interval)
}
},1*x)
}

useEffect(()=>{
    let observer=new IntersectionObserver((entries)=>{
        entries.forEach(e=>{
          if(e.isIntersecting){
            handleCount(5,1800,2500,setDoctors)
            handleCount(5,198555,200000,setPaitients)
            handleCount(5,0,300,setHospitals)
            observer.unobserve(e.target)
          }
        })
    },{threshold:0.5})
   observer.observe(currentElRef.current)
return ()=>observer.disconnect()
},[])

  return (
    <div id='count-container' ref={currentElRef}>
        <div>
            <p>{doctors}+</p>
            <h5>Doctors</h5>
        </div>
        <div>
            <p>{paitients}+</p>
            <h5>Patients Treated</h5>
        </div>
        <div>
            <p>{hospitals}+</p>
            <h5>No. Of Hospitals</h5>
        </div>
    </div>
  )
}

export default Count