
import { Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
// import { Document, Page } from 'react-pdf'
import React, {useState} from 'react'
// import { Button} from 'reactstrap';
import INRegister from './Next.png'
// import INReset from './Inreset.png'
// import { useNavigate } from "react-router-dom"
// import Swal from 'sweetalert2'
// import Pdf from "./Loan Agreement-V1.pdf"

// export const UserContext = createContext()
function Step2() {
  const [message, setMessage] = useState('')
  const [value, setvalue] = useState('')
  // const [user, setUser] = useState("Jaffar")
  // console.log(user)
  // console.log(setUser)
  function callEmi () {
    
    const Stenure = document.getElementById('tenure').value
    const z = parseInt(Stenure)
    const LoanAmount = document.getElementById('Loan-amount').innerText
    // const Roi = document.getElementById('Roi').innerText
    const y = parseInt(LoanAmount)
      const Roi = 0.01 * Stenure * LoanAmount
          // const x = y + Roi
          const EMI = (y + Roi) / z
     document.getElementById('Emi').innerText = Math.round((EMI + Number.EPSILON) * 100) / 100

  }
  function CopyAddress() {
    const ref1 = document.getElementById('per-add')
    const ref2 = document.getElementById('check')
    const ref3 = document.getElementById('cur-add')
    if (ref2.checked) {
      ref3.value = ref1.innerHTML 
    } else {
      ref3.value = ""
    }
   }
//  function showPDf () {
   
//  }
   
    return (
      // <UserContext.Provider value={user}>
        // {console.log(user)}
        <>
       
          <h2 className="app-header">Personal Detail</h2>
          <div className="personal-detail">
            <div className="app-form-input">
            <label>Policy Holder Name</label>
           {/* <input></input> */}
           <label>Jaffar</label>
            </div>
            <div className="app-form-input">
           <label>Email</label>
           <label>Tusharmalik@gmail.com</label>
           </div>
           <div className="app-form-input">
            <label>Select Gender</label>
            <span><input type="radio" name='gender' value='Male'/>Male</span>
            <span> <input type="radio" name='gender' value='Female'/>Female</span>
           <span><input type="radio" name='gender' value='other'/>Other</span>
           </div>
           <div className="app-form-input">
           <label>Select Gender Title</label>
           <select id='gender-title'>
            <option value="" disabled selected hidden >Title</option>
            <option value="3">Mr</option>
            <option value="6">Mx</option>
            <option value="9">Mrs</option>
          </select>
           </div>
           <div className="app-form-input">
           <label>Pan Card</label>
           <input className="input-insurance"></input>
           </div>
           <div className="app-form-input">
           <label>Adhar Card</label>
           <label>12345678901</label>
           {/* <input></input> */}
           </div>
           <div className="app-form-input">
           <label>Current Addres</label>
           <textarea id='cur-add' className="input-insurance"></textarea>
           <span><input type="checkbox" id='check'  onChange={CopyAddress} />Same as Permanent Address</span>
           </div>
           <div className="app-form-input">
           <label>Permanent Addres</label>
           <label id='per-add' >Hiranandani Powai </label>
           {/* <input></input> */}
           </div>
          </div>
          <h2 className="app-header">Policy Details</h2>
          <div className="personal-detail">
            <div className="app-form-input">
            <label>Policy Number</label>
           {/* <input></input> */}
           <label>876765</label>
            </div>
            <div className="app-form-input">
           <label>Policy Type</label>
           <label>ULIP</label>
           </div>
           <div className="app-form-input">
           <label>Due Premium</label>
           <label>56789</label>
           {/* <input></input> */}
           </div>
           <div className="app-form-input">
           <label>Surrender Value</label>
           <label>100000</label>
           </div>
           <div className="app-form-input">
           <label>Processing Fees</label>
           <label>3% </label>
           </div>
           <div className="app-form-input">
           <label>ROI</label>
           <label id='Roi'>1% per Month</label>
           </div>
           <div className="app-form-input">
           <label>Select Tenure</label>
           <select id='tenure' onChange={callEmi}>
            <option value="" disabled selected hidden >Month</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="9">9 Months</option>
            <option value="12">12 Months</option>
          </select>
           </div>
           <div className="app-form-input">
           <label>Loan Amount</label>
           <label id='Loan-amount'>70000</label>
           </div>
           <div className="app-form-input">
           <label>EMI</label>
           <label id='Emi'></label>
           <label></label>
           {/* <input></input> */}
           </div>
          </div>
          <h2 className="app-header">Bank Detail</h2>
          <div className="personal-detail">
          <div className="app-form-input">
            <label>Account Holder Name</label>
            <input  className="input-insurance"value={message}
        onChange={(event) => {
          const result = event.target.value.replace(/[^a-z]/gi, '')
          setMessage(result)
        }}></input>
           {/* <input type="text"></input> */}
            </div>
            <div className="app-form-input">
            <label>Account Number</label>
           <input className="input-insurance"   value={value}
              onChange={(event) => {
               const result1 = event.target.value.replace(/\D/g, '')
               setvalue(result1)
             }}></input>
            </div>
            <div className="app-form-input">
            <label>IFSC Code</label>
           <input className="input-insurance"></input>
            </div>
            </div>
          </>
    )
   
}
export default Step2  
