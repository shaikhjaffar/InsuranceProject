import { useState, useEffect} from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap'
// import axios from "axios"
import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import Step4 from "./step4"
import Step5 from "./step5"
import Next from './Next.png'
import Submit1 from './submit.png'
import Loader from "./otpstep"
import Swal from "sweetalert2"

// import axios from 'axios'
// import swal from '@sweetalert/with-react'

function Insurance() {

  const [data, setdata] = useState('')
  const [data1, setdata1] = useState('')
  const [data2, setdata2] = useState('')
  const [step, setStep] = useState('step1')
  const [value1, setvalue1] = useState('')
  const [message, setMessage] = useState('')
  const [value, setvalue] = useState('')
  const [Mobile1, setmobile1] = useState('')
  const [Mobile2, setmobile2] = useState('')
  const [message1, setMessage1] = useState('')
  const [active2, setactive2] = useState(false)
 const [otpStep, setOtpStep] = useState(false)
  const [active3, setactive3] = useState(false)
  const [active4, setactive4] = useState(false)
  const [active5, setactive5] = useState(false)
  const [modal, setModal] = useState(false)
  const [modal1, setModal1] = useState(false)
  const [showOTp, setshowOTp] = useState(false)
  const [showOTp1, setshowOTp1] = useState(false)
  const [showWitness, setShowWitness] = useState(false)
  const [count, setCount] = useState(0)
  const [mobile, setMobile] = useState(false)
  const [Step1Data, setStep1Data] = useState({})
  const [witnessDetail, setShowWitnessDetail] = useState({
       Relation: "",
       AdharNumber: "",
       MobileNumber:""
  })
  const [witness2Detail, setShowWitness2Detail] = useState({
    Relation: "",
    AdharNumber: "",
    MobileNumber:""
})
 const [show, setShow] = useState(false)
 const [AdharData, setAdharData] = useState({
 })
  const [showWitness2, setShowWitness2] = useState(false)
     useEffect(() => {
    window.scrollTo(0, 0)
     }, [step])

     //function for preventing auto-relod
  const handleBeforeUnload = (e) => {
    e.preventDefault()
    const message =
      "Are you sure you want to leave? All provided data will be lost."
    e.returnValue = message
    return message
  }
   function getValue (value) {
    setShow(value)
   }
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])
  //modal
  function toggle() {
    setModal(!modal)
    if (modal === false) {
      setshowOTp(false)
    }
  }

    const otpData = () => {
      const OtpData = document.getElementById('otpData').value.toString()
      const updatedObj = { ...Step1Data, 
        asnr_aadhar:document.getElementById('adharNumber').value,
        asnr_mobile_no:"9878765678",
        asnr_policy_no:"7977878",
        asnr_company_name :"indiafirst",
        aadhar_otp:OtpData,
        ajx_typ:"otp_check_self"
      }
      setStep1Data(updatedObj)
      console.log(updatedObj)
      return updatedObj

    }
    function AlertOtp() {
      setOtpStep(false)
      Swal.fire({
        title: 'Adhar Verification',
        html:'<div class="insurance-otp"> ' +
        '<input  autocomplete="off" class="swal2-input" id="otpData" maxlength="6"/>' +
        // ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        // ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        // ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        // ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        // ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        '</div>',
        focusConfirm: true,
        inputAttributes: {
            autocapitalize: 'off',
            autocorrect: 'off',
            type:'number'
          },
        preConfirm: () => {
          setStep('step2')
          setactive2(true)
          const Data = otpData()
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(Data)
            }
            fetch('http://indiafirst.1clickcapital.com/ajx/aadhar-otp-self', requestOptions)
              .then(response => response.json())
              .then(
                (result) => {
                  console.log(result)
                  setAdharData(result)
                  // setStep('step2')
                  // setactive2(true)
                },
                (error) => {
                  alert(error)
                }
              )


        }
      })
    }
    let MainMessage = ""
    function toCheckValid() {
      const Input = document.querySelectorAll('.test')
      let Value = false
       for (let i = 0; i < Input.length; i++) {
        if (Input[i].checkValidity()) {
          Input[1].value.length >= 10 && Input[2].value.length >= 12 ? Value = true  : Value = false
          // Value = true
        } else {
            MainMessage = MainMessage.concat(' ', Input[i].placeholder)
           return false
        }
       }
       return Value
    }
    function Submit (value) {
      console.log(value)
      // try {
      //   axios({
      //     method: "post",
      //     url: "https://indiafirstapi.1clickcapital.com/policy/check",
      //     headers: {'Content-Type': 'application/json' },
      //     body: value
      //   })
      //   .then(
      //     (result) => {
      //       result.success ? AlertOtp() : alert(result.error)
      //      setOtpStep(false)
      //     })
      //   } catch (error) {
      //   alert(error)
      // }
      console.log(value)
    const MyValue = JSON.stringify({
      policyNumber: "12345678",
  mobileNumber: "8976412394",
  aadhaarNumber: 660184035137,
  companyName: "IndiaFirstLife"
    })
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: MyValue
      }
      setOtpStep(true)
      fetch('https://indiafirstapi.1clickcapital.com/policy/check', requestOptions)
      .then(response => response.text())
        .then(
          (result) => {
            result.success ? AlertOtp() : alert(result.error)
           setOtpStep(false)
          })
      }
    function toCheckEmpty () {
      if (data === "" || data1 === "" || data2 === "") {
        Swal.fire('All Fields are madatory')
      } else {
          const updatedObj = {
            policyNumber: "12345678",
            mobileNumber: "8976412394",
            aadhaarNumber: 660184035137,
            companyName: "IndiaFirstLife"
          }
          setStep1Data(updatedObj)
          toCheckValid() ? Submit(updatedObj) : alert('Please Enter Valid Detail')
      }
    }
  function toggle1() {
    setModal1(!modal1)
    if (modal1 === false) {
      setshowOTp1(false)
    }
  }
 function witness1detail() {
  setShowWitness(!showWitness)
  setCount(count + 1)
  const adharnumber = document.getElementById('witness1-adharnumber').value
  const relation = document.getElementById('witness1-relation').value
  const MobileNumber1 = document.getElementById('witness1-Mobilenumber').value
  setShowWitnessDetail(existingValues => ({
    ...existingValues,
    Relation:relation,
    AdharNumber:adharnumber,
    MobileNumber:MobileNumber1
  }))        
 }
 function witness2detail() {
  setShowWitness2(!showWitness2)
   setCount(count + 1)
  const adharnumber = document.getElementById('witness2-adharnumber').value
  const relation = document.getElementById('witness2-relation').value
  const MobileNumber1 = document.getElementById('witness2-Mobilenumber').value
  setShowWitness2Detail(existingValues => ({
    ...existingValues,
    Relation:relation,
    AdharNumber:adharnumber,
    MobileNumber:MobileNumber1
  }))
 }
  return (
    <div className="card">
        <div className="Insurance-step">{
      active2 ?  <p>You are At : {step}</p> : <></>
    }
      
      {
        active2 ? <div className="step step-active" id="1"><span className="line-step"></span></div> : <div className="step">1</div> 
       
      }
      {
       active3 ? <div className="step step-active" id="2" onClick={
        () => {
          if (active2 === true) {
            setStep('step2')
            // step = 'step2' ? document.getElementById('2').style.backgroundColor = "red" : null
          }
        }}><span className="line-step"></span></div> : <div className="step">2</div>
      }
       {
       active4 ? <div className="step step-active" id="3" onClick={
        () => {
          if (active3 === true) {
            setStep('step3')
            document.getElementById('3').style.backgroundColor = "red"
          }
        }}><span className="line-step"></span></div> : <div className="step">3</div>
      }
       {
       active5 ? <div className="step step-active" id="4" onClick={
        () => {
          if (active4 === true) {
            setStep('step4')
        
          }
        }}><span className="line-step"></span></div> : <div className="step">4</div>
      }
      <div className="step" id="5"onClick={
        () => {
          if (active5 === true) {
            setStep('step5')
          }
        }}>5
      </div>
    </div>
    {(() => {
        switch (step) {
          case 'step1':
            return (
                <div style={{minHeight:"100vh", overflowY:"hidden"}}>
                   {
                  otpStep ? <Loader/> : <></>
                }
                 <h2 className="app-header" style={{letterSpacing:"1px"}}>IndiaFirst<span style={{color:"orange"}}>Life</span></h2>
                 {
               mobile ? <p className="mobile-toogle">Please enter the mobile number registered in your policy</p> : <></>
              }
              <div className="application-form" >
              <label htmlFor="policyNumber">Enter Policy  Number</label>
              <input className="input-insurance test" id="policyNumber" required value={data} maxLength={8} minLength={8}
               onChange={(event) => {
                const result = event.target.value.replace(/\D/g, '')
                setdata(result)
              }}></input>
             
              <label htmlFor="mobileNumber">Enter Mobile Number<br></br>(Registered with IndiaFirst)</label>
              <input  className="input-insurance test" minLength={10}  maxLength={10} id="mobileNumber" onFocus={() => { setMobile(true) }} onBlur={() => { setMobile(false) }}  placeholder="Please enter the mobile number registered in your policy" required style={{height: "30px"}}
              value={data1}
              onChange={(event) => {
               const result1 = event.target.value.replace(/\D/g, '')
               setdata1(result1)
             }}></input>
              <label htmlFor="adharNumber">Enter Adhar Card Number</label>
              <input  className="input-insurance test" id="adharNumber" required maxLength={12} minLength={12} value={data2} placeholder="Adhar Number"
               onChange={(event) => {
                const result2 = event.target.value.replace(/\D/g, '')
                setdata2(result2)
              }}></input>
          {/* <label>12345</label>
          <input  className="input-insurance" id="captcha" required placeholder="enter captcha"></input> */}
          </div>
                {/* {
                  otpStep ?  <div>
                  <Loader/>
                  {!isLoading ? <Loader/> : <></>  }
                </div> : <></>
                } */}
                <img src={Submit1}  className="In-absolute-button" data-info="step1-button" onClick={() => {
                // setSubmitData(Submit)
                // updateValue()
                // console.log(toCheckEmpty())

                 toCheckEmpty()
                }}/>
                </div>
            )
          case 'step2':
            return (
                <>{show ? <></> : <Step2 child={getValue} dataOfAdhar={AdharData}/>}
  <div>
        <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Witness Authentication</ModalHeader>
    <ModalBody>
    <label>Adhar Number</label>
       <input className='spacing stop input-insurance'style={{minHeight:"40px", color:"black"}}  value={value1}
              onChange={(event) => {
               const result1 = event.target.value.replace(/\D/g, '')
               setvalue1(result1)
             }} id="witness1-adharnumber"></input>
       <label>Relationship with Assignor</label>
       <input className='spacing stop input-insurance' style={{minHeight:"40px", color:"black"}} value={message}
        onChange={(event) => {
          const result = event.target.value.replace(/[^a-z]/gi, '')
          setMessage(result)
        }}  id="witness1-relation"></input>
         <label>Mobile Number</label>
       <input className='spacing stop input-insurance'style={{minHeight:"40px", color:"black"}}  value={Mobile1}
              onChange={(event) => {
               const result1 = event.target.value.replace(/\D/g, '')
               setmobile1(result1)
             }} id="witness1-Mobilenumber"></input>
       {
        showOTp ? <div><label>Enter OTP</label><input className='spacing stop input-insurance'style={{minHeight:"40px"}}></input></div> : <></>
       }
    </ModalBody>
    <ModalFooter>
      {
        showOTp ? <Button color="primary" onClick={() => { witness1detail(); toggle() }}>Verify</Button> : <Button color="primary" onClick={() => setshowOTp(!showOTp)}>Request for OTP</Button>
      }
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  <Modal isOpen={modal1} toggle={toggle1}>
    <ModalHeader toggle={toggle1}>Witness Authentication</ModalHeader>
    <ModalBody>
    <label>Adhar Number</label>
       <input className='spacing stop input-insurance' style={{minHeight:"40px", color:"black"}} id="witness2-adharnumber"value={value}
              onChange={(event) => {
               const result = event.target.value.replace(/\D/g, '')
               setvalue(result)
             }}></input>
       <label>Relationship with Assignor</label>
       <input className='spacing stop input-insurance' style={{minHeight:"40px", color:"black"}} 
       value={message1}
       onChange={(event) => {
         const result = event.target.value.replace(/[^a-z]/gi, '')
         setMessage1(result)
       }} id="witness2-relation"></input>
        <label>Mobile Number</label>
       <input className='spacing stop input-insurance'style={{minHeight:"40px", color:"black"}}  value={Mobile2}
              onChange={(event) => {
               const result1 = event.target.value.replace(/\D/g, '')
               setmobile2(result1)
             }} id="witness2-Mobilenumber"></input>
       {
        showOTp1 ? <div><label>Enter OTP</label><input className='spacing stop input-insurance' style={{minHeight:"40px"}}></input> </div> : <></>
       }
    </ModalBody>
    <ModalFooter>
      {
        showOTp1 ? <Button color="primary" onClick={() => { witness2detail(); toggle1() }}>Verify</Button> : <Button color="primary" onClick={() => setshowOTp1(!showOTp1)}>Request for OTP</Button>
      }
      <Button color="secondary" onClick={toggle1}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
</div>

{
  showWitness ? <section  className='witness-detail'>
  <h2 className="app-header">Witness1 Detail</h2> 
  <div className="personal-detail">
 <div className="app-form-input">
   <label>Name of Witness</label>
   <label>Mukesh Kumar</label>
  {/* <input></input> */}
   </div>
   <div className="app-form-input">
   <label>Relationship with Assignor</label>
   <label id="witness1-relation-detail">{witnessDetail.Relation}</label>
  {/* <input></input> */}
   </div>
   <div className="app-form-input">
   <label>Mobile Number</label>
   <label>{witnessDetail.MobileNumber}</label>
  {/* <input></input> */}
   </div>
   <div className="app-form-input">
   <label>Adhar Number</label>
   <label id="witness1-adhar-detail">{witnessDetail.AdharNumber}</label>
  {/* <input></input> */}
   </div>
   <div className="app-form-input">
   <label>Address</label>
   <label>powai</label>
   </div>
   </div>
   </section> : <button className="witness-button" style={show ? {display:"block"} : {display:"none"}} onClick={toggle}>Click here to fill witness1 detail</button>
}
 {
  showWitness2 ? <section className='witness-detail'>
  <h2 className="app-header">Witness2 Detail</h2> 
  <div className="personal-detail">
 <div className="app-form-input">
   <label>Name of Witness</label>
   <label>Nitesh Kumar</label>
  {/* <input></input> */}
   </div>
   <div className="app-form-input">
   <label>Relationship with Assignor</label>
   <label id="witness2-relation-detail">{witness2Detail.Relation}</label>
  {/* <input></input> */}
   </div>
   <div className="app-form-input">
   <label>Mobile Number</label>
   <label>{witness2Detail.MobileNumber}</label>
  {/* <input></input> */}
   </div>
   <div className="app-form-input">
   <label>Adhar Number</label>
   <label id="witness2-adhar-detail">{witness2Detail.AdharNumber}</label>
   </div>
   <div className="app-form-input">
   <label>Address</label>
   <label>Powai</label>
   </div>
   </div>
   {
     count === 2 ?  <img src={Next}  className="In-absolute-button" onClick={() => { setStep('step3'); setactive3(true) }}/> : <></>
   }
   </section> : <button className="witness-button" style={show ? {display:"block"} : {display:"none"}} onClick={toggle1}>Click here to fill witness2 detail</button>
}     
                </>
            )
          case 'step3': 
            return (
                <><Step3/>
                <img src={Next}  className="In-absolute-button" onClick={() => { setStep('step4'); setactive4(true) }}/>
                </>
            )
          case 'step4':
            return (
                <><Step4/>
                <img src={Next}  className="In-absolute-button" onClick={() => { setStep('step5'); setactive5(true) }}/>
                </>
            )
            case 'step5':
            return <Step5/>
          default:
            return <Step1/>
        }
      })()}
   </div>
 )
}
 export default Insurance