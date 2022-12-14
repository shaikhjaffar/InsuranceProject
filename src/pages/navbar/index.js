// ** Horizontal Menu Components
import React from "react"
// import HorizontalNavMenuItems from "./HorizontalNavMenuItems"
import './style.css'
import { gsap } from "gsap"
import svg from './Group 175 (1).svg'
const {useLayoutEffect, useRef } = React
const Logo = () => {
  const app = useRef()
   useLayoutEffect(() => {
     const ctx = gsap.context(() => {
       gsap.fromTo(".navsvg", { x:"-100"}, {x:"50"})
     }, app)
     return () => ctx.revert()
   })
  return (
    <div ref={app}>
      <img   src={svg} className="navsvg" alt="jaffar"/>
    </div>
  )
}

export default Logo
