// ** Dropdowns Imports
import { Link } from "react-router-dom"
import React from "react"
// import { Button } from "reactstrap"
 import './style.css'
 import login from './Group 87.svg'
 import Register from "../Registration"
const button = () => {
  return (
    <>
      <Register/>
      <a href="https://www.1clickcapital.com/portal/login.php">
      <img src={login} className="button-animate bt2" alt="login"></img>
</a>
    
    </>

  )
}
export default button
