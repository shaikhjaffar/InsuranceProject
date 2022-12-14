import {React, useState} from 'react'
import { slide as Menu } from 'react-burger-menu'
import './sidemenu.css'
import { Link, NavLink } from "react-router-dom"
import './navprodd.css'
const Sidebar = () => {
const options = [
    {
        id:1,
        cname:"1 Click",
        name:"Payroll",
        path:"/product/payroll"
    },
    {
        id:2,
        cname:"1 Click",
        name:"Salary Advance",
        path:"/product/salaryadv"
    },
    {
        id:3,
        cname:"1 Click",
        name:"Insurance Funding",
        path:"/product/insurancefun"
    },  
    {
        id:4,
        cname:"1 Click",
        name:"Project Funding",
        path:"/product/projectfun"
    },  
    {
        id:5,
        cname:"1 Click",
        name:"L.R.D",
        path:"/product/lrd"
    },  
    {
        id:6,
        cname:"1 Click",
        name:"Supply Chain Financing",
        path:"/product/scf"
    },  
    {
        id:7,
        cname:"1 Click",
        name:"Working Capital",
        path:"/product/workingcap"
    },  
    {
        id:8,
        cname:"1 Click",
        name:"Colateral Free MSME/SME Loan",
        path:"/product/cf"
    },  
    {
        id:9,
        cname:"1 Click",
        name:"H.R Management Systems",
        path:"/product/hrm"
    },  
    {
        id:10,
        cname:"1 Click",
        name:"Entertainment & Production Financing",
        path:"/product/production"
    }       
]
  const [isActive, setIsActive] = useState(false)
  const [isclicked, setClicked] = useState(false)
  const handleClicked = () => setClicked(!isclicked)
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <Menu>
            <a className="menu-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                onClick={handleClicked}
              >
                Home
              </NavLink>
            </a>
            <div className={isActive === true ? "Navhmtitle  Navhmactive" : "Navhmtitle"}
              onClick={() => setIsActive(!isActive)} 
              >
              <div className="Navhm-dd-title">
                <NavLink
                  exact
                  to="/product/payroll"
                  className="navhm-links"
                  onClick={handleClicked}>
                  Product <span className='product-icons'>&#129179;</span>
                </NavLink>
              </div>
              {isActive && (
                <div className='Navhm-dd-data'>
                  {options.map((option) => (
                    <div className='Navhm-dd-item'key ={option.id}>
                      <span className='itemhm-name'>
                        <Link
                          exact
                          to={option.path}>
                            {option.name}
                        </Link>
                      </span>
                    </div>
                  ))}
                </div>
               )}
            </div>
            <a className="menu-item">
              <NavLink
                exact
                to="/blogs"
                activeClassName="active"
                onClick={handleClick}
              >
                Blogs
              </NavLink>
            </a>
            <a className="menu-item">
              <NavLink
                exact
                to="/carrer"
                activeClassName="active"
                onClick={handleClick}
              >
                Career
              </NavLink>
            </a>
            <a className="menu-item">
              <NavLink
                exact
                to="/about-us"
                activeClassName="active"
                
                onClick={handleClick}
              >
                About us
              </NavLink>
            </a>
            <a className="menu-item">
              <NavLink
                exact
                to="/contact-us"
                activeClassName="active"
                onClick={handleClick}
              >
                Contact us
              </NavLink>
            </a>
    </Menu>
    
  )
}
export default Sidebar