import React from "react"

import Vect1 from '../Vector (1).png'
import Vect2 from '../Group 24bag tick.png'
import Vect from '../Vector.png'
import './style.css'
// import Register from "../../../Registration"
function Button3() {
 return (
   <>
    <div className="section2-product">
       <span className="circle-product"></span>
        <div className="button-product-container">
         <div className="enroll-button">
           <span className="image-back-white"><img className="enroll-img" src={Vect}></img></span>
            <p className="enroll-text">Click on Registration Button and Fill Required Details.</p>
         </div>
         <div className="enroll-button">
            <span className="image-back-white"><img className="enroll-img" src={Vect1}></img></span>
            <p className="enroll-text">Upload Important Documents</p>
         </div>
         <div className="enroll-button">
          <span className="image-back-white"><img className="enroll-img" src={Vect2}></img></span> 
            <p className="enroll-text">Avail the Loan Selecting the EMI Option</p>
         </div>
        </div>
    </div>
    </>
 )
}


export default Button3