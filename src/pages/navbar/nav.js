import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./style.css"
 import Logo from "./index.js"
import Navdd from "../../@core/components/pbutton/Navdd"

function NavBar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <>
    <div className="btn-grp">
    </div>
    <Logo/>
      <nav className="navbar">
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
            <Navdd/> 
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
                to="/carrer"
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