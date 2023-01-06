import React, { useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navdd.css'

const options = [
    {
        id:1,
        cname:"1 Click",
        name:"Payroll Financing",
        path:"/product/1-click-payroll"
    },
    {
        id:2,
        cname:"1 Click",
        name:"Salary Advance",
        path:"/product/1-click-salary-advance"
    },
    {
        id:3,
        cname:"1 Click",
        name:"Insurance Funding",
        path:"/product/1-click-insurance-funding"
    },  
    {
        id:4,
        cname:"1 Click",
        name:"Project Funding",
        path:"/product/1-click-project-funding"
    },  
    {
        id:5,
        cname:"1 Click",
        name:"L.R.D",
        path:"/product/1-click-lease-rental-discounting"
    },  
    {
        id:6,
        cname:"1 Click",
        name:"Supply Chain Finance",
        path:"/product/1-click-supply-chain-financing"
    },  
    {
        id:7,
        cname:"1 Click",
        name:"Working Capital",
        path:"/product/1-click-working-capital"
    },  
    {
        id:8,
        cname:"1 Click",
        name:"Collateral Free MSME/SME Loan",
        path:"/product/1-click-collateral-free-msme"
    },  
    {
        id:9,
        cname:"1 Click",
        name:"H.R Management Systems",
        path:"/product/1-click-human-resources-management-systems"
    },  
    {
        id:10,
        cname:"1 Click",
        name:"Entertainment & Production Financing",
        path:"/product/1-click-entertainment-and-production-financing"
    }       
]
function Navdd() {
    const [isActive, setIsActive] = useState(false)
    const path = window.location.pathname
  return (
    <div className='Navtitle' 
    onMouseEnter={() => setIsActive(true)} 
    onMouseLeave={() => setIsActive(false)}
    onClick={() => setIsActive(false)}
    >
        <div className="Nav-dd-title nav-item"><NavLink
                exact
                to="/product/1-click-payroll"             
                 activeClassName="active"
                className={path.includes('/product') ? "nav-links active" : "nav-links"}
              >
              Product
              </NavLink></div>
        {isActive && (
    
        <div className='hover-data'>
            {options.map((option) => (
               <div 
               className='Nav-dd-item'key ={option.id}>
               <span className='item-cname'><Link
               exact
               to={option.path}
             >{option.cname}</Link>
             </span>
             <span className='item-name'><Link
               exact
               to={option.path}
             >{option.name}</Link></span>
            </div>
            ))}
        </div>
        )}
    </div>
  )
}

export default Navdd
