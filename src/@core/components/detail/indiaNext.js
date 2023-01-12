import React, { useEffect } from "react"
import Bank from './bank.png'
import Indiafirst from './india.png'
import {Button} from "reactstrap"
import Next from './submit.png'
// import Witness from './witness.png'
import Swal from "sweetalert2"
// import { Label } from "reactstrap"
import Loan2 from './Loan Agreement-V1.pdf'
import { useNavigate } from "react-router-dom"
function IndiaNext() {
  const navigate = useNavigate()
  function EssignOTPAssignee() {
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
            // setEsignAssigneee(true)
            // setEsignWitness(true)
            // navigate('/absolute')
            // onClick = {toggle}
        }
      })
 }
      function Successfully() {
        Swal.fire({
title:'Awesome !',
text:'form submitted successfully !',
type:'success'
})
      }
      function EssignOTPWitness() {
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
              // setEsignAssigneee(true)
              // setEsignWitness(true)
              // navigate('/absolute')
              // onClick = {toggle}
          }
        })
     }
      useEffect(() => {
     window.scrollTo(0, 0)
      }, [])
//       function Successfully1() {
//         Swal.fire({
// title:'Awesome !',
// text:'Authenticate successfully !',
// type:'success'
// })
//       }
    return (
      <div className="card">
         <div className="Insurance-step">
            <div className="step step-active">Step1</div>
            <div className="step step-active"onClick={() => navigate('/step2')}>Step2</div>
            <div className="step step-active"onClick={() => navigate('/step3')}>Step3</div>
            <div className="step step-active"onClick={() => navigate('/step4')}>Step4</div>
            <div className="step step-active">Step5</div>
          </div>
          <h2 className="app-header">Loan Agreement</h2>
        <iframe src={Loan2} width="70%" height="600px  "></iframe>
      {/* <section className="india-image-section">
      <img width="400px" heigth="auto"  src={Bank}/>
      <img  width="300px" heigth="100px" src={Indiafirst}/>
      </section>
      <p className="india-add">
      IndiaFirst Life Insurance Company Ltd <br></br>301, 'B' Wing, The Qube,<br></br>
Infinity Park,<br></br>
Dindoshi - Film City Road,<br></br>
Malad (East), Mumbai - 400 097
      </p>
      <p className="india-add"><strong>Re: </strong>Notice of Assignment under Section 38 of the Insurance Act, 1938 for policy no-<Label className="spacing">123456</Label></p>
      <p className="india-add">Dear sir,</p><br/>
      <p className="india-add">Notice is hereby given that I/We, <Label className="spacing">Jaffar</Label>have assigned the above Policy to Mr./Mrs./Ms
      <Label className="spacing">1clcicapital</Label>(name of assignee), whose address is <Label className="spacing">Hiranandani powai</Label>
    on <Label className="spacing">11th January 2023</Label>(date of assignment dd/mm/yyy). We enclose the deed of
assignment for registration of the assignment. </p>
<div className="detail-india-asig">
  <div className="india-fclient">
   <p>Signature of the Assignor</p>
<input className="input-india-size"></input>
Name of the Assignor
<input className="input-india-size"></input>
Address of the Assignor 
Place:<input className="input-india-size"></input> Date:<input className="input-india-size"></input>

Signature of the Witness
<input className="input-india-size"></input>
Name of the Witness
<input className="input-india-size"></input>
<p>Address of the Witness 
   </p>
   <input className="input-india-size"></input>
  </div>
  <div className="india-fclient">
   <p>Signature of the Assignee</p>
<input className="input-india-size"></input>
 Name of the Assignee
<input className="input-india-size"></input>
 Address of the Assignee
Place:<input></input> Date:<input ></input>
  </div>
</div>
<div className="india-instructio">
    <h3>Instruction</h3>
  <ul>
    <li>The full name, age, address and relationship of the assignee must be stated where the assignor is an individual </li>
    <li>The assignment of a policy shall automatically cancel any nomination made in the policy</li>
    <li>In case of assignment in favor of a Financial Institution/bank please affix a stamp of the Financial Institution/Bank and countersigned by
the Authorised Signatory. </li>
    <li>The witness should be a major and competent to contract. </li>
    <li>Please submit the original policy certificate along with this request</li>
  </ul>
</div> */}
      {/* <img src={Witness} className="In-absolute-witness" onClick={Successfully1}/> */}
      <div className="essign">
      <Button style={{width:"200px"}} onClick={EssignOTPWitness}>Click here to E-sign Witness1</Button>
      <Button style={{width:"200px"}} onClick={EssignOTPWitness}>Click here to E-sign Witness2</Button>
       <Button style={{width:"200px"}} onClick={EssignOTPAssignee}>Click here to E-sign Assignee</Button></div>
      <img src={Next} className="In-absolute-button app-header" onClick={Successfully}/>
      </div>
    )
}
export default IndiaNext