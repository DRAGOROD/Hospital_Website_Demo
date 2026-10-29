import Hero from "./hero"

import {ReactLenis} from 'lenis/react'

function App() {

  return (
    <>
    <ReactLenis root values={{lerp:0.1,wheelMultiplier:20}}>
        <Hero/>
    </ReactLenis>
    </>
  )
}

export default App
