import React from "react"
import { useNavigate } from "react-router-dom"
import Bank from './bank.png'
import Indiafirst from './india.png'
import Next from './Next.png'
import Tushar from './Tushar.jpeg'
import Jaffar from './Jaffar.jpeg'
import { Label } from "reactstrap"
// import Loan1 from './Application and Notice of Assignment.pdf'
import Loan1 from './Absolute Assignment Deed.pdf' 
function India() {
    const navigate = useNavigate()
    return (
      <div className="card">
           <div className="Insurance-step">
            <div className="step step-active ">Step1</div>
            <div className="step step-active"onClick={() => navigate('/step2')}>Step2</div>
            <div className="step step-active"onClick={() => navigate('/step3')}>Step3</div>
            <div className="step step-active">Step4</div>
            <div className="step">Step5</div>
          </div>
          <h2 className="app-header">Absolute Assignment Deed</h2>
          <iframe src={Loan1} width="70%" height="600px  "></iframe>
      {/* <section className="india-image-section">
      <img width="400px" heigth="auto"  src={Bank}/>
      <img  width="300px" heigth="100px" src={Indiafirst}/> */}

      {/* </section>
      <h2 className="app-header">Application for Assignment</h2> */}
      
      {/* <div className="detail-india">
      <p>Name of Policy Owner: </p><Label className="spacing">Jaffar</Label>
      <p>Policy No:</p><Label className="spacing">123456</Label> */}
       {/* <p>Client ID:</p><input className="spacing"></input> */}
           {/* <p>Contact No. (Off/Res) </p><Label className="spacing">1234567890</Label>
           <p>Mobile</p><Label className="spacing">1234567890</Label>
           <p>Email ID:</p><Label className="spacing">example@gmail.com</Label>
      </div> */}
      {/* <div className="applicant-india">
      Sir/Madam,<br/>
I/We <Label className="spacing">Jaffar</Label>applicant/holder of the Life Insurance Application/Policy No <Label className="spacing">123456</Label>with IndiaFirst Life
Insurance Company Limited do hereby assign the right and benefits of the said policy in favor of
<Label className="spacing">1clcicapital</Label>(assignee’s name) being my <Label className="spacing">Lander</Label> (relationship) whose Date
of Birth is<Label className="spacing">5th March 1998</Label>(if assignee is an individual)and residing at/having their office at <Label className="spacing">Hirandani powai</Label>
      </div> */}
      {/* <section className="detail-o-assing">
        <div className="deta-o-assing">
           <p><strong>Details of the Assignee</strong> (The below details are mandatory only if Absolute Assignment has been made to an Individual and not
to a Company/Trust/Institution) (Please tick as applicable)</p> 
        </div>
        <div style={{marginLeft:"100px"}}>
            <strong>Occupation:</strong>
            <div className="occupation-option">
            <p>Business Owner</p> */}
              {/* <p><input type="checkbox"></input>&nbsp;Salaried </p>
              <p><input type="checkbox"></input>&nbsp;Agriculturist </p>
              <p><input type="checkbox"></input>&nbsp;Retired/Pensioner </p> */}
              
              {/* <p><input type="checkbox"></input>&nbsp;Housewife</p>
              <p><input type="checkbox"></input>&nbsp;Self Employed</p>
              <p><input type="checkbox"></input>&nbsp;Student</p>
              <p>other<input></input></p> */}
            {/* </div>
        </div>
      </section> */}
      {/* <div>
        <strong style={{marginLeft:"100px"}}>Documents relating to the Assignee:</strong>(Please tick as applicable)
        <div>
       <div className="document-india"> */}
        {/* <h4 >Identity Proof:</h4> */}
        {/* <p><input type="checkbox"></input>&nbsp;Passport </p> */}
              {/* <p>PAN Card  </p> */}
              {/* <p><input type="checkbox"></input>&nbsp;Voter’s Identity card </p> */}
              {/* <p>other<input></input></p> */}
       {/* </div>
       <div className="document-india">
        <h4 className="">Address proof:</h4> */}
        {/* <p><input type="checkbox"></input>&nbsp;Telephone Bill </p>
              <p><input type="checkbox"></input>&nbsp;Ration card </p> */}
              {/* <p>Electricity Bill</p> */}
              {/* <p>other<input></input></p> */}
       {/* </div>
       <div className="document-india">
        <h4 className="">Assignee Status:</h4>
        <p>Resident Indian</p> */}
              {/* <p><input type="checkbox"></input>&nbsp;Non Resident Indian</p> */}
       {/* </div>
            </div>
      </div>
      <div className="occupation-option" style={{marginTop:"100px"}}>
        <span>
        <p>Signature of the Assignor
           (Policy Owner)</p>
           <input value="Jaffar"></input>
        </span>
         <span>
         <p>Signature of the Assignee</p>
         <img src={Tushar} width="200px" height="100px" ></img>
         </span> */}
           {/* <img  width="200px" height="100px" src={Jaffar}></img> */}
       
      {/* </div> */}
      <img src={Next}  className="In-absolute-button app-header" onClick={() => navigate('/step5')}/>
      </div>
    )
}
export default India 