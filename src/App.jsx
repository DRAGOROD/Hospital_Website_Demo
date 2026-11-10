import Facilties from "./fecalty"
import Hero from "./hero"
import Doctors from "./doctors"
import LocationEl from "./locationEl"
import Footer from "./footer"
import Navbar from "./navbar"

import {ReactLenis} from 'lenis/react'

import { createContext,useRef } from "react"

export let navContext=createContext(null)

function App() {

let homeRef=useRef(null)
let facilityRef=useRef(null)
let doctorRef=useRef(null)
let locationRef=useRef(null)

  return (
    <>
    <ReactLenis root values={{lerp:0.1,wheelMultiplier:20}}>
    <navContext.Provider value={{homeRef,facilityRef,doctorRef,locationRef}}>
       <Navbar/>
      <div ref={homeRef}>
        <Hero/>
      </div>
      <div ref={facilityRef}>
        <Facilties/>
      </div>
      <div ref={doctorRef}>
        <Doctors/>
      </div>
      <div ref={locationRef}>
        <LocationEl/>
      </div>
        <Footer/>
    </navContext.Provider>
    </ReactLenis>
    </>
  )
}

export default App
