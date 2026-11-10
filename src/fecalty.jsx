import React from 'react'

import HC from './assets/hc.mp4'

import EMC from './assets/facelties_icons/emc.webp'
import EYC from './assets/facelties_icons/eyc.webp'
import GM from './assets/facelties_icons/gm.webp'
import GS from './assets/facelties_icons/gs.webp'
import IC from './assets/facelties_icons/ic.webp'
import PC from './assets/facelties_icons/phc.webp'
import LS from './assets/facelties_icons/ls.webp'

function Facilties(){

let fCards=[
    {
    icon:GS,
    name:"General Surgery"
    },
    {
    icon:EMC,
    name:"Emergency Care"
    },
    {
    icon:EYC,
    name:"Eye Care"
    },
    {
    icon:GM,
    name:"General Medicine"
    },
    {
    icon:IC,
    name:"ICU Care"
    },
    {
    icon:PC,
    name:"Primary Care"
    },
    {
    icon:LS,
    name:"Luxury Suites"
    },
]

  return (
    <>
    <h3>Facilities We Offer</h3>
    <div id='fecalty-container'>
        <div>
           {fCards.map((v,i)=>
           <span key={i} data-name={v.name}>
            <img src={v.icon} alt={v.name}/>
            </span>)
            }
        </div>
        <video src={HC} playsInline autoPlay loop width={720}/>
    </div>
    </>
  )
}

export default Facilties