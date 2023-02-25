
import { Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
// import { Document, Page } from 'react-pdf'
import React, {useEffect, useState} from 'react'
import Swal from 'sweetalert2'
// import { element } from 'prop-types'
// import { Button} from 'reactstrap';
// import INRegister from './Next.png'
// import INReset from './Inreset.png'
// import { useNavigate } from "react-router-dom"
// import Swal from 'sweetalert2'
// import Pdf from "./Loan Agreement-V1.pdf"

// export const UserContext = createContext()
function Step2(props, {dataOfAdhar}) {
  const [modal, setModal] = useState(false)
  const [message, setMessage] = useState('')
  const [value, setvalue] = useState('')
  const [enterData, setEnterData] = useState({
    pname:"",
    email:"",
    pancard:"",
    current:"",
    tenure:"",
    emi:"",
    bankHolderName:"",
    AccountNumber:"",
    Ifsc:""

  })
  const [AssignorDetail, setAssignorDetail] =  useState({})
  useEffect(() => {
   setAssignorDetail({...dataOfAdhar})
  }, [])
  // const [showWitnessButton, setShowWitnessButton] = useState(false)
  // const [user, setUser] = useState("Jaffar")
  // console.log(user)
  // console.log(setUser)
  function ValidatePAN() {
    const txtPANCard = document.getElementById("pancard")
    const regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/
    if (regex.test(txtPANCard.value.toUpperCase())) {
        return true
    } else {
        return false
    }
}
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

  // function changeGender() {
  //   const RadioButtons = document.querySelectorAll('input[name="gender"]')
  //   for (const RadioButton of RadioButtons) {
  //       if (RadioButton.checked) {
  //         if (RadioButton.value === "Male") {
  //           const Dropdowns = document.getElementById('gender-title')
  //           Dropdowns.value = "Mr"
  //         } else if (RadioButton.value === "Female") {
  //           const Dropdowns = document.getElementById('gender-title')
  //           Dropdowns.value = "Mrs"
  //         }  else {
  //           const Dropdowns = document.getElementById('gender-title')
  //           Dropdowns.value = "Mx"
  //         }
  //       }
     
  //   }
  // }
  //  function changeGenderTitle() {
  //   const Dropdowns = document.getElementById('gender-title').value
  //   const RadioButtons = document.querySelectorAll('input[name="gender"]')
  //   for (const RadioButton of RadioButtons) {
  //     RadioButton.checked = true 
  //     if (Dropdowns === "Mr") {
  //       RadioButton.value = "Male"
  //       console.log(RadioButton.value)
  //     } else if (Dropdowns === "Mrs") {
  //       RadioButton.value = "Female"
  //       console.log(RadioButton.value)
  //     } else {
  //       RadioButton.value = "other"
  //       console.log(RadioButton.value)
       
  //     }
  //   }
     
  //  }
  

  const toggle = () => setModal(!modal)
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
  
    function getNewData () {
      setEnterData({...enterData,
        pname:document.getElementById('pname').innerText,
        email:document.getElementById('email').value,
        pancard:document.getElementById('pancard').value,
        current:document.getElementById('cur-add').value,
        tenure:document.getElementById('tenure').value,
        emi:document.getElementById('Emi').innerText,
        bankHolderName:message,
        AccountNumber:value,
        Ifsc:document.getElementById('ifsc').value
      })
      
      
  }

//  function showPDf () {
   
//  }
   
    return (
      // <UserContext.Provider value={user}>
        // {console.log(user)}
        <>
          {/* import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; */}
           <h2 className="app-header" style={{letterSpacing:"1px"}}>IndiaFirst<span style={{color:"orange"}}>Life</span>&nbsp;Insurance Funding</h2>
          <h3 className="app-header">Personal Detail</h3>
          <div className="personal-detail">
            <div className="app-form-input">
            <label>Policy Holder Name</label>
           {/* <input></input> */}
           <label id='pname'>Jaffar</label>
            </div>
            <div className="app-form-input">
           <label>Email</label>
           <input className="input-insurance" id='email' onFocus={console.log({AssignorDetail})} type="email"></input>
           </div>
           {/* <div className="app-form-input">
            <label>Select Gender</label>
            <span><input type="radio" name='gender'onClick={changeGender} value='Male'/>Male</span>
            <span> <input type="radio" name='gender'  value='Female' onClick={changeGender}/>Female</span>
           <span><input type="radio" name='gender' value='other' onClick={changeGender}/>Other</span>
           </div> */}
           <div className="app-form-input">
           <label>Select Gender Title</label>
           <select id='gender-title'>
            {/* <option value="" disabled selected hidden >Title</option> */}
            <option value="Mr">Mr</option>
            <option value="Mx">Mx</option>
            <option value="Mrs">Mrs</option>
            <option value="Mrs">Miss</option>
          </select>
           </div>
           <div className="app-form-input">

           <label>Pan Card</label>
           <input className="input-insurance" name='txtPANCard' id='pancard' minLength={10} maxLength={10} onChange={() => {
            document.getElementById('pancard').value.toUpperCase()
           }} style={{textTransform: "uppercase"}}></input>
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
           <input className="input-insurance" id='ifsc'></input>
            </div>
            </div>
            <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Policy Holder Detail</ModalHeader>
        <ModalBody>
        <h5>Personal Detail</h5>
         <label>Name:&nbsp;{enterData.pname}</label><br></br>
         <label>Email:&nbsp;{enterData.email}</label><br></br>
         {/* <label>Gender Title:&nbsp;{document.getElementById('gender-title').value}</label><br></br> */}
         <label>PanCard:&nbsp;{enterData.pancard}</label><br></br>
         <label>Current Addres:&nbsp;{enterData.current}</label><br></br>
         <label>Tenure:&nbsp;{enterData.tenure}</label><br></br>
         <label>Emi:&nbsp;{enterData.emi}</label>
         <h5>Bank Detail</h5>
         <label>Account Holder Name:&nbsp;{enterData.bankHolderName}</label><br></br>
         <label>Account Number:&nbsp;{enterData.AccountNumber}</label><br></br>
         <label>IFSC:&nbsp;{enterData.Ifsc}</label>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {
           toggle()
           props.child(true)
          }}>
            Submit Detail
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
            <button style={{width:"20%", marginLeft:"70%"}} className="witness-button" onClick={() => {
                 if (message === "" || value === "" || document.getElementById('ifsc').value === "") {
                  Swal.fire('All Fields are madatory')
                } else {
                  const Email = document.getElementById('email').checkValidity()
                  const Pancard =  ValidatePAN()
                  if (Email && Pancard) {
                    toggle()
                    getNewData()
                  } else {
                    Email ? alert('Invalid Pancard') : alert('Enter Valid Email')
                  }
                }
               
            }}>Confirm Filled Detail</button>
          </>
    )
   
}
export default Step2  
