import React,{useEffect,useRef} from 'react'

import { Map, NavigationControl, FullscreenControl, setWorkerUrl } from 'maplibre-gl'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import 'maplibre-gl/dist/maplibre-gl.css'

function LocationEl(){

let mapContainer=useRef(null);
let mapRef=useRef(null);

useEffect(()=>{

setWorkerUrl(workerUrl)

let map=new Map({
  container: mapContainer.current,
  style: 'https://tiles.openfreemap.org/styles/liberty',
  center: [13.388, 52.517],
  zoom: 9.5,
})

mapRef.current=map;

map.addControl(new NavigationControl(),'top-right')
map.addControl(new FullscreenControl(),'top-right')

return ()=>{
    map.remove()
    mapRef.current=null
}

},[])    

  return (
    <div id="map-section">
        <h3>Our Location</h3>
        <div>
          <div ref={mapContainer}>
        </div>
        </div>
    </div>
  )
}

export default LocationEl