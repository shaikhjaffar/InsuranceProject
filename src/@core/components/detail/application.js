
import { Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
// import { Document, Page } from 'react-pdf'
import React, { useState } from 'react'
// import { Button} from 'reactstrap';
import INRegister from './Next.png'
// import INReset from './Inreset.png'
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
// import Pdf from "./Loan Agreement-V1.pdf"

// export const UserContext = createContext()
function Application() {

  // const [user, setUser] = useState("Jaffar")
  // console.log(user)
  // console.log(setUser)
 
  const [modal, setModal] = useState(false)
  const [showOTp, setshowOTp] = useState(false)
  // const [showOTp2, setshowOTp2] = useState(false)
  const [showWitness, setShowWitness] = useState(false)
  const [showWitness2, setShowWitness2] = useState(false)
  // const [EsignWitness, setEsignWitness] = useState(false)
  // const [EsignAssignee, setEsignAssigneee] = useState(false)
  const navigate = useNavigate()
  function toggle() {
    setModal(!modal)
    if (modal === false) {
      setshowOTp(false)
    }
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
        <div className="card">
              <div className="Insurance-step">
            <div className="step step-active">Step1</div>
            <div className="step step-active">Step2</div>
            <div className="step">Step3</div>
            <div className="step">Step4</div>
            <div className="step">Step5</div>
          </div>
            <h2 className="app-header">Personal Detail</h2>
          <div className="personal-detail">
            <div className="app-form-input">
            <label>Policy Holder Name</label>
           {/* <input></input> */}
           <label>Jaffar</label>
            </div>
            <div className="app-form-input">
           <label>Email</label>
           <input></input></div>
           <div className="app-form-input">
           <label>Pan Card</label>
           <input></input>
           </div>
           <div className="app-form-input">
           <label>Adhar Card</label>
           {/* <input></input> */}
           </div>
           <div className="app-form-input">
           <label>Current Addres</label>
           <input id='cur-add'></input>
           <span><Input type="checkbox" id='check' onChange={CopyAddress} className='checkbox' />Same as Permanent Address</span>
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
            </div>
            <div className="app-form-input">
           <label>Policy Type</label>
          {/* <select>
            <option value="" disabled selected hidden >Select Policy Type</option>
            <option>ULIP</option>
            <option>Traditional</option>
          </select> */}
           </div>
           <div className="app-form-input">
           <label>Due Premium</label>
           {/* <input></input> */}
           </div>
           <div className="app-form-input">
           <label>Surrender Value</label>
           {/* <input></input> */}
           </div>
           <div className="app-form-input">
           <label>Processing Fees</label>
           <label>3% </label>
           </div>
           <div className="app-form-input">
           <label>ROI</label>
           <label>1% per Month</label>
           </div>
           <div className="app-form-input">
           <label>Select Tenure</label>
           <select>
            <option value="" disabled selected hidden >Select Tenure</option>
            <option>3 Months</option>
            <option>6 Months</option>
            <option>9 Months</option>
            <option>12 Months</option>
          </select>
           </div>
           <div className="app-form-input">
           <label>Loan Amount</label>
           <input></input>
           </div>
           <div className="app-form-input">
           <label>EMI</label>
           {/* <input></input> */}
           </div>
          </div>
          <h2 className="app-header">Bank Detail</h2>
          <div className="personal-detail">
          <div className="app-form-input">
            <label>Account Holder Name</label>
           <input></input>
            </div>
            <div className="app-form-input">
            <label>Account Number</label>
           <input></input>
            </div>
            <div className="app-form-input">
            <label>IFSC Code</label>
           <input></input>
            </div>
            </div>
            <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Witness Authentication</ModalHeader>
        <ModalBody>
        <label>Adhar Number</label>
           <input className='spacing stop'></input>
           <label>Relationship with Assignor</label>
           <input className='spacing stop'></input>
           {
            showOTp ? <> <label>Enter OTP</label><input className='spacing stop'></input> </> : <></>
           }
        </ModalBody>
        <ModalFooter>
          {
            showOTp ?   <Button color="primary" onClick={() => { setShowWitness(!showWitness); setShowWitness2(!showWitness2); toggle() }}>Verify</Button> : <Button color="primary" onClick={() => setshowOTp(!showOTp)}>Request for OTP</Button>
          }
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div> {
      showWitness ? <section className='witness-detail'>
      <h2 className="app-header">Witness1 Detail</h2> 
      <div className="personal-detail">
     <div className="app-form-input">
       <label>Name of Witness</label>
      {/* <input></input> */}
       </div>
       <div className="app-form-input">
       <label>Relationship with Assignor</label>
      {/* <input></input> */}
       </div>
       <div className="app-form-input">
       <label>Mobile Number</label>
      {/* <input></input> */}
       </div>
       <div className="app-form-input">
       <label>Adhar Number</label>
      {/* <input></input> */}
       </div>
       <div className="app-form-input">
       <label>Address</label>
      {/* <input></input> */}
       </div>
       </div>
       {/* <Button style={{width:"200px", marginLeft: "53%", marginTop: "-46px"}} onClick={EssignOTPWitness}>Click here to E-sign Witness</Button>
       <Button style={{width:"200px", marginLeft: "53%", marginTop: "20px"}} onClick={EssignOTPAssignee}>Click here to E-sign Assignee</Button> */}
       </section> : <div style={{display:"flex", gap:"20px", marginLeft:"50%"}}><Button style={{width:"200px"}} onClick={toggle}>Click here to fill witness1 detail</Button></div>
    }
     {
      showWitness2 ? <section className='witness-detail'>
      <h2 className="app-header">Witness2 Detail</h2> 
      <div className="personal-detail">
     <div className="app-form-input">
       <label>Name of Witness</label>
      {/* <input></input> */}
       </div>
       <div className="app-form-input">
       <label>Relationship with Assignor</label>
      {/* <input></input> */}
       </div>
       <div className="app-form-input">
       <label>Mobile Number</label>
      {/* <input></input> */}
       </div>
       <div className="app-form-input">
       <label>Adhar Number</label>
       </div>
       <div className="app-form-input">
       <label>Address</label>
       </div>
       </div>
       <img className="In-personal-button" src={INRegister} onClick={() => navigate('/step3')}/>
       {/* <Button style={{width:"200px", marginLeft: "53%", marginTop: "-46px"}} onClick={EssignOTPWitness}>Click here to E-sign Witness</Button>
       <Button style={{width:"200px", marginLeft: "53%", marginTop: "20px"}} onClick={EssignOTPAssignee}>Click here to E-sign Assignee</Button> */}
       </section> : <div style={{ marginLeft:"50%", marginTop:"40px"}}><Button style={{width:"200px"}} onClick={toggle}>Click here to fill witness2 detail</Button></div>
    }
     
         </div>
    )
}
export default Application  
