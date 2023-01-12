
import React, { useEffect } from "react"
import "./style.css"
import { Input, Label} from 'reactstrap'
import AgreeButton from "./Next.png"
import { useNavigate } from "react-router-dom"
// import Loan from './Loan Agreement-V1.pdf'
import Loan from './Application and Notice of Assignment.pdf'
// import Application from "./application"
// import  UserContext  from "./application"

function absoluteAssigment() {
  // const {user} = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(() => {
      window.scrollTo(0, 0)
       }, [])
   
  return (
     
    <div className="card">
         <div className="Insurance-step">
            <div className="step step-active">Step1</div>
            <div className="step step-active"onClick={() => navigate('/step2')}>Step2</div>
            <div className="step step-active">Step3</div>
            <div className="step">Step4</div>
            <div className="step">Step5</div>
          </div>
          <h2 className="app-header">Application and Notice of Assignment</h2>
          <iframe src={Loan} width="70%" height="600px  "></iframe>
      {/* <h2 className="app-header">Absolute Assignment Deed</h2>
      <div className="form-content-center">
        <p className="absolute-first">
          Assignment to 1 Click Capital (Powered by CHP Finance Pvt Ltd) for a
          valuable consideration of Rs<input className="spacing"></input>(Rupees)<input className="spacing"></input>.
          (Consideration amount is mandatory).
        </p>
        <p className="absolute-first">
          
          I/We<label>Jaffar</label>the holder of the Life Insurance Policy No
          <input className="spacing"></input>issued by INDIA FIRST LIFE INSURANCE COMPANY LIMITED
          (‘the Company’) do hereby for a valuable consideration ABSOLUTELY
          TRANSFER and assign the right and benefits of the said Policy in favor
          of Lender M/s. 1 Click Capital(powered by CHP Finance Pvt Ltd) having
          their office at UGF-1, Jeevan Vihar, Ground Floor, Sansad Marg,
          Connaught Place, Delhi Central110001, India and Corporate office at
          701-702,Wing A, Supreme Business Park, Hiranandani Gardens, Powai,
          Mumbai-400076
        </p>
        <p className="absolute-first">
          I/WE note that the assignment shall be complete and effectual upon the
          execution of this endorsement but that it shall not be operative as
          against the Company until a notice in writing of this assignment and
          either the said endorsement or the instrument itself or a copy there
          of certified to be correct by both the assignor and the assignee or
          their duly authorised agent has been delivered to the specified
          office(s) of the Company.
        </p>
        <p className="absolute-first">
          I hereby declare that the assignee’s receipt of the benefits under the
          Policy shall be a valid and sufficient discharge of the Company.
        </p>
        <div >
          Executed on this day<input className="spacing"></input>of<input className="spacing"></input>20<input className="spacing"></input>
          at<input className="spacing"></input>
          <br />
          </div>
          <div className="internal-form">
          <p>Assignor’s Signature:</p>
          <input></input>
          <p>Full Name:</p>
          <input></input>
          <p>Address:</p><input></input>
          <p>Contact Number(s):</p><input></input>
        </div>
        <h2>Declaration</h2>
        <p>
          The Assignor has duly executed the endorsement on the Policy, and the
          signature/thumb impression is of the Assignor affixed on the date
          place herein above stated.
        </p>
        <div className="internal-form">
          <p>Signature of witness:</p><input className="spacing"></input>
        
          <p>Full Name:</p><input className="spacing"></input>
        
          <p>Address of witness:</p><input className="spacing"></input>
          <p>Date:</p> <input className="spacing"></input>
        </div>
        <p>
          Please note that the witness should be major and competent to contract
          In case the Assignor has signed in Vernacular/is illiterate, the
          witness will also attest the following: Certified that the contents of
          the above Assignment were explained by me to the Assignor
          <input className="spacing"></input>in Vernacular and that he affixed his signature/left
          thumb Impression thereto in my presence after thoroughly understanding
          the same.<br/>
          <input className="spacing stop"></input>Signature of Witness
          <p>
        Note: The witness will sign in English
        </p>
        </p>
        <div className="app-privacy">
            <Input type="checkbox"  className='checkbox'/>
          <Label style={{marginLeft:'10px'}}>
             I acknowledge that i have read,understand and agree to the terms and condition and all document set forth above
              </Label>
              </div>
       
      </div> */}
       <img src={AgreeButton} style={{marginLeft:"40%"}} className="In-absolute-button" onClick={() => navigate('/step4')} />
    </div>
  )
}
export default absoluteAssigment
