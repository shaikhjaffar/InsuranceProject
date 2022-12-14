import React, { useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navprodd.css'

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
        name:"Supply Chain Funding",
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
function Navprodd() {
    // const [isActive, setIsActive] = useState(false)
    const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <div className='Navhmtitle' 
    // onMouseEnter={() => setIsActive(true)} 
    // onMouseLeave={() => setIsActive(false)}
    >
        <div className="Navhm-dd-title"><NavLink
                exact
                to="/product/payroll"
                className="navhm-links"
                onClick={handleClick}
              >
              Product
              </NavLink></div>
        {/* {isActive && ( */}
        <div className='Navhm-dd-data'>
            {options.map((option) => (
               <div 
               className='Navhm-dd-item'key ={option.id}>
               <span className='itemhm-cname'><Link
               exact
               to={option.path}
             >{option.cname}</Link>
             </span>
             <span className='itemhm-name'><Link
               exact
               to={option.path}
             >{option.name}</Link></span>
            </div>
            ))}
        </div>
        {/* )} */}
    </div>
  )
}

export default Navprodd
