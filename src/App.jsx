import Facilties from "./fecalty"
import Hero from "./hero"
import Doctors from "./doctors"
import LocationEl from "./locationEl"
import Footer from "./footer"

import {ReactLenis} from 'lenis/react'

function App() {

  return (
    <>
    <ReactLenis root values={{lerp:0.1,wheelMultiplier:20}}>
        <Hero/>
        <Facilties/>
        <Doctors/>
        <LocationEl/>
        <Footer/>
    </ReactLenis>
    </>
  )
}

export default App
