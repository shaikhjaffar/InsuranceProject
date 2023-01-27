import React, { useEffect, useState } from "react"
import {Button} from "reactstrap"
import Next from './submit.png'
import './style.css'
import Swal from "sweetalert2"
import Loan2 from './Absolute Assignment Deed.pdf' 
import PolicyHolder from './policyHolder.png'
import Witness1 from './witness1.png'
import Witness2 from './witness2.png'
// import { useNavigate } from "react-router-dom"
function Step5() {
    const [Esign, setEsign] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
         }, [])
//   const navigate = useNavigate()
  function EssignOTPAssignee() {
    Swal.fire({
        title: 'Adhar Verification',
        html:
        ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>',
        focusConfirm: true,
        inputAttributes: {
            maxlength: 1,
            autocapitalize: 'off',
            autocorrect: 'off',
            type:'number'
          },
        preConfirm: () => {
        }
      })
 }
//       function Successfully() {
//         Swal.fire({
// title:'Awesome !',
// text:'form submitted successfully !',
// type:'success'
// })
//       }
    //   function EssignOTPWitness() {
      
    //  }
      useEffect(() => {
     window.scrollTo(0, 0)
      }, [])
    return (
      
        Esign ? <div className="outer-frame"><span className="crossButton-Esign" onClick={() => {
          setEsign(false)
          }}>X</span><iframe className="essign-frame" src="https://app.digio.in/#/gateway/login/DID230123150029681ECVEXFII7OP5J2/vI3atY/8976412394">
          </iframe></div>  : <><h2 className="app-header">Loan Agreement</h2>
        <iframe src={Loan2} className="pdf-frame"  width="70%"></iframe>
        {/* <embed src={Loan2}  type="application/pdf" ></embed> */}
        {/* <object data="https://drive.google.com/viewerng/viewer?embedded=true&url=./Absolute Assignment Deed.pdf" type="application/pdf">
        <embed src="https://drive.google.com/viewerng/viewer?embedded=true&url=./Absolute Assignment Deed.pdf" type='application/pdf'/>
          </object> */}
        <span className="Esign-check"><input type="checkbox" id="Esign-check" className="rounded-checkbox"/>&nbsp;I had read all documents and I here by giving my consent on the same <br></br>&nbsp;&nbsp;&nbsp;Click Below To E-sign as</span>
        <div className="essign">
      <img src={Witness1} onClick={() => {
      const element = document.getElementById('Esign-check')
      if (element.checked) {
        setEsign(true)
        window.scrollTo(0, 0)
      } else {
        alert("Please read all documents ,give your consent on the same  and Check the checkbox")
      }
       
      }}/>
      <img src={Witness2} onClick={() => {
          const element = document.getElementById('Esign-check')
          if (element.checked) {
            setEsign(true)
            window.scrollTo(0, 0)
          } else {
            alert("Please read all documents ,give your consent on the same  and Check the checkbox")
          }
      }}/>
      <img src={PolicyHolder} onClick={() => {
         const element = document.getElementById('Esign-check')
         if (element.checked) {
           setEsign(true)
           window.scrollTo(0, 0)
         } else {
          alert("Please read all documents ,give your consent on the same  and Check the checkbox")
         }
      }}/>
       </div>

       {/* <input type="checkbox" className="rounded-checkbox"/>
       <input type="checkbox" className="rounded-checkbox"/> */}
      {/* <img src={Next} className="In-absolute-button" onClick={Successfully}/> */}
      </>
    )
}
export default Step5
