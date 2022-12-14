import React from "react"
import { gsap } from "gsap"
import './style.css'
import Circle from './Group 90.svg'
import Icon from './Vector (2).svg'
import Banner from './1 click -Logo for Light BG 2 (1).svg'
// import Glass from './Glass Slide. -Introglass effect.svg'
const { useLayoutEffect, useRef } = React
function Mainanimate() {
    const app = useRef()
   useLayoutEffect(() => {
     const ctx = gsap.context(() => {
        const t1 = gsap.timeline()
         t1.fromTo(".svg2", {y:300}, {y:-220, duration:2}) 
        t1.fromTo('.svg3', {opacity:0}, {opacity:1, duration:1})
        }, app)
     return () => ctx.revert()
   })
   return (
    < div ref={app} className="card main-animate">
    <img src={Circle} className="svg1"></img> 
    <img src={Icon} className="svg2"></img> 
    <img src={Banner} className="svg3"></img> 
    {/* <div className="glass1"></div> */}
    </div>
   )
 }
 export default Mainanimate