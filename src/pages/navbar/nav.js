import React, { useState, useRef, useEffect } from "react"
import { NavLink } from "react-router-dom"
import "./style.css"
 import Logo from "./index.js"
import Navdd from "../../@core/components/pbutton/Navdd"
import svg from './1 click -Logo for Light BG 4 (1).png'
import Sidebar from "../../@core/components/hamburgernav/sidemenu/sidemenu"
function NavBar() {
  const ref1 = useRef()
  useEffect(() => {

  function handleScroll() {
   const position = window.pageYOffset
    
   if (position >= 150) {
       ref1.current.style.display = "Block"
   } else {
       ref1.current.style.display = "none"
   }
  }
  window.addEventListener('scroll', handleScroll)
  }, [])
 
  const [click, setClick] = useState(false)
 function setActive(value) {
   setClick(value)
 }
  const handleClick = () => setClick(!click)
  return (
    <>
    <Logo/>
      <nav className="navbar">
      <Sidebar/>
        <img className="small-nav-logo" ref={ref1}  src={svg} ></img>
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <Navdd active={setActive}/> 
            <li className="nav-item">
              <NavLink
                exact
                to="/blogs"
                className="nav-links"
                onClick={handleClick}
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/career"
                className="nav-links"
                onClick={handleClick}
              >
                Career
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about-us"
                className="nav-links"
                onClick={handleClick}
              >
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact-us"
                className="nav-links"
                onClick={handleClick}
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      
    </>
  )
}

export default NavBar