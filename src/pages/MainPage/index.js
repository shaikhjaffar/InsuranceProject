import React from "react"
import "@styles/base/components/_card.scss"
import Form from "../../@core/components/form"
// import { Card } from "reactstrap"
 import './main.css'
import Effect from "../../@core/components/m_effect"
 import  Recsvg  from "@src/assets/images/pages/rectangle.svg"
//  import topsvg from "./Group 80.png"
import topsvg from "./rectangle.png"
 import Button from "../../@core/components/button/Button"

const MainPage = () => {
  return (
    <>
      <div className="homecard">
        <Button/>
        <div className="row">
          <div className="column">
          <img className="topsvg" src={topsvg}>
            </img>
            <div className="company-motto">
              <div className="motto1">
                <p>Hamesha Aapke Saath</p>
              </div>
            </div>
            <div className="text-animation">
              <Effect />
            </div>
            <p className="motto2-top">Listening to the financial needs of business and simplifying payroll funding for digital India</p>
          </div>
          <div className="column">
          <img className="bottomsvg" src={Recsvg}></img>
            <div className="main-form">
            <h3 className="form-head">Get a Free Quote</h3>
              <Form />
            </div>
          </div> 
          <p className="motto2-bottom">Listening to the financial needs of business and simplifying payroll funding for digital India</p>
        </div>
      </div>
      
    </>
  )
}

export default MainPage
