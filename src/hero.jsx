import React, { useEffect, useRef} from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

import Count from './count.jsx';

let ImportedImages=import.meta.glob('./assets/heroF_2k/*.jpg',{eager:true,import:"default",query:"?url"})

function Hero(){  

gsap.registerPlugin(ScrollTrigger)  

let framesArr=Object.values(ImportedImages);

let frames={currentIndex:0,maxIndex:framesArr.length-1}

let canvasRef=useRef(null)

useEffect(()=>{

function playAnimation(){
  let tl=gsap.timeline({
    scrollTrigger:{
      trigger:"#parent",
      start:"top top",
      scrub:2,
      end:"bottom bottom"
    }
  })

  function animateFrames(index){
    return {
      currentIndex:index,
      onUpdate:()=>{loadFramesIndex(Math.floor(frames.currentIndex))}
    }
  }
   tl.to(frames,animateFrames(40),'heading1')
     .to('h1',{transform:'translateY(-50%)',opacity:0,ease:"linear"},'heading1')

     .to(frames,animateFrames(50),'countAnimate')
     .to('#count-btn-container',{transform:'translateY(0)',opacity:1},'countAnimate')

     .to(frames,(animateFrames(frames.maxIndex)))
}

let images=[];
let preloadedImgNum=0;
let canvas=canvasRef.current
let context=canvas.getContext("2d")

function loadFramesIndex(index){
  let img=images[index];

  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;

  let scaleX=canvas.width/img.width;
  let scaleY=canvas.height/img.height;
  let scale=Math.max(scaleX,scaleY);

  let newWidth=img.width * scale;
  let newHeight=img.height * scale;

  let offsetX=(canvas.width - newWidth)/2;
  let offsetY=(canvas.height - newHeight)/2;

  context.imageSmoothingQuality="high";
  context.imgeSmoothingEnabled=true;
  context.clearRect(0,0,canvas.width,canvas.height);
  context.drawImage(img,offsetX,offsetY,newWidth,newHeight)

  frames.currentIndex=index
}

function preLoadedFrames(){
for(let i=0;i<=frames.maxIndex;i++){
  let imaUrl=framesArr[i];
  let ima=new Image();
  ima.src=imaUrl;
  ima.onload=()=>{
    preloadedImgNum++
  if(preloadedImgNum===framesArr.length){
    loadFramesIndex(frames.currentIndex)
     playAnimation()
  }
  }
  images.push(ima)
}
}

preLoadedFrames()
},[])

  return (

    <section id='hero'>
        <div id="parent">
          <div id="canvas-container">
              <canvas ref={canvasRef}/>
                  <h1>Novamed<br/><span style={{color:'white',fontSize:'6rem'}}>Health</span></h1>
                  <div id="count-btn-container">
                    <div>
                    <Count/>
                    </div>
                    <span>Book Appointment</span>
                  </div>
          </div>
        </div>
    </section>

  )
}

export default Hero