// import { func } from "prop-types"
import React from "react"
import './style.css'
import  OTP from './submit.png'
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
// import { number } from "prop-types"
// import CreatableSelect from 'react-select/creatable'
// import CreatableSelect from "react-select/dist/declarations/src/Creatable"
// import CreatableSelect from "react-select/dist/declarations/src/Creatable"
   function Detail () {
    const navigate = useNavigate()
     function AlertOtp() {
        Swal.fire({
            title: 'Adhar Verification',
            html:
              '<input id="swal-input1" type="number"  class="swal2-input">' +
              '<input id="swal-input2" type="number"   class="swal2-input">' +
              '<input id="swal-input3" type="number"   class="swal2-input">' +
              '<input id="swal-input4" type="number"  class="swal2-input">',
            focusConfirm: true,
            inputAttributes: {
                maxlength: 1,
                autocapitalize: 'off',
                autocorrect: 'off',
                type:'number'
              },
            preConfirm: () => {
                navigate('/step2')
            }
          })
     }
  
      
    //   if (formValues) {
    //     Swal.fire(JSON.stringify(formValues))
    //   }
    return (
        <div className="card">
          <div className="Insurance-step">
            <div className="step step-active">Step1</div>
            <div className="step">Step2</div>
            <div className="step">Step3</div>
            <div className="step">Step4</div>
            <div className="step">Step5</div>
          </div>
          <div className="application-form">
               <label>Select Company Name</label>
               <select>
                <option value="India First">India First</option>
               </select>
              <label>Enter Policy  Number</label>
              <input type="number"></input>
              <label>Enter Mobile Number</label>
              <input type="number"></input>
              <label>Enter Adhaar Card Number</label>
              <input type="number"></input>
              <section className="captcha">
          <label>12345</label>
          <input style={{marginLeft:"100px"}} placeholder="enter captcha"></input>
          </section>
          </div>
          <img  src={OTP} className="otp-button" onClick={AlertOtp}/>
        </div>
    )
   }
  //  wkhdwhcli
   export default Detail