import { useState, useEffect} from "react"
import { Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap'
import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import Step4 from "./step4"
import Step5 from "./step5"
import Next from './Next.png'
import Submit1 from './submit.png'
// import Loader from "./otpstep"
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
//  const [otpStep, setOtpStep] = useState(false)
  const [active3, setactive3] = useState(false)
  const [active4, setactive4] = useState(false)
  const [active5, setactive5] = useState(false)
  const [modal, setModal] = useState(false)
  const [modal1, setModal1] = useState(false)
  const [showOTp, setshowOTp] = useState(false)
  const [showOTp1, setshowOTp1] = useState(false)
  const [showWitness, setShowWitness] = useState(false)
  const [count, setCount] = useState(0)
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
// const [data, setData] = useState([])
// const [isLoading, setIsLoading] = useState(false)
// const [err, setErr] = useState('')
  const [showWitness2, setShowWitness2] = useState(false)
    
  const handleBeforeUnload = (e) => {
    e.preventDefault()
    const message =
      "Are you sure you want to leave? All provided data will be lost."
    e.returnValue = message
    return message
  }
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])
  // const navigate = useNavigate()
  function toggle() {
    setModal(!modal)
    if (modal === false) {
      setshowOTp(false)
    }
  }

  // function AlertOtp() {
  //   Swal.fire({
  //     title: 'Adhar Verification',
  //     html:'<div class="insurance-otp"> ' +
  //     '<input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
  //     ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
  //     ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
  //     ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
  //     ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
  //     ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
  //     '</div>',
  //     focusConfirm: true,
  //     inputAttributes: {
  //         autocapitalize: 'off',
  //         autocorrect: 'off',
  //         type:'number'
  //       },
  //     preConfirm: () => {
  //       otpData()
  //         const requestOptions = {
  //           method: 'POST',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify(Step1Data)
  //         }
  //         fetch('http://jaffar.com:8081/insurance/ajx/aadhar-otp-self', requestOptions)
  //           .then(response => response.json())
  //             setStep('step2')
  //             setactive2(true)
  //     }
  //   })
  // }
    

  // const Captcha = document.getElementById('captcha').value
    // const updateData = newData => {
    //   setStep1Data({...Step1Data, ...newData})
    // }

  // function SubmitData() {
  //   setStep1Data(myValue => ({
  //     ...myValue,
  //     ...updateValueSubmit
  //   })) 
  // }
  // function OtpData() {
  //   updateValueSubmit = {
  //     Capt:"",
  //     asnr_aadhar:data2,
  //     asnr_mobile_no:"9878765678",
  //     asnr_policy_no:"7977878",
  //     asnr_company_name :"indiafirst",
  //     ajx_typ:"",
  //     aadhar_otp:"453672",
  //     ajx_typ:"otp_check_self"
  //   }
  //    setStep1Data(myValue => ({
  //      ...myValue,
  //      ...updateValueSubmit
  //    })) 
  // }
  // function setSubmitData (callback) {
  //   let updateValueSubmit = {}
  //   updateValueSubmit = {
  //     Capt:"",
  //     asnr_aadhar:document.getElementById('adharNumber').value,
  //     asnr_mobile_no:"9878765678",
  //     asnr_policy_no:"7977878",
  //     asnr_company_name :"indiafirst",
  //     ajx_typ:"",
  //     aadhar_otp:"453672",
  //     ajx_typ:"check_policy"
  //   } 
  //      setStep1Data(myValue => ({
  //     ...myValue,
  //   ...updateValueSubmit
  //   })) 
  //   callback()
  // }

  function Submit (value) {   
   
    //   const AdharNumber = document.getElementById('adharNumber').value.toString()
    // const PolicyNumber = document.getElementById('policyNumber').value.toString()
   
    // const MobileNumber = document.getElementById('mobileNumber').value.toString()
  
    // try {
    //   axios({
    //     method: "post",
    //     url: "http://jaffar.com:8081/insurance/ajx/insurance-funding-new",
    //     data:Step1Data,
    //     headers: { "Content-Type": "application/json"}
    //   })
    
    // } catch (error) {
    //   alert(error)
    // }
    console.log(value)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value)
    }
    fetch('http://jaffar.com:8081/insurance/ajx/insurance-funding-new', requestOptions)
      .then(response => response.json())
      // .then(
      //   (result) => {   
      //     result.success ? AlertOtp() : alert(result.error)
      //   })
    }
  
   
    const otpData = () => {
      const updatedObj = { ...Step1Data, 
        Capt:"",
        asnr_aadhar:document.getElementById('adharNumber').value,
        asnr_mobile_no:"9878765678",
        asnr_policy_no:"7977878",
        asnr_company_name :"indiafirst",
        ajx_typ:"",
        aadhar_otp:"453672",
        ajx_typ:"otp_check_self"
      }
      setStep1Data(updatedObj)
      console.log(updatedObj)
      
    }
    function AlertOtp() {
      Swal.fire({
        title: 'Adhar Verification',
        html:'<div class="insurance-otp"> ' +
        '<input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
        '</div>',
        focusConfirm: true,
        inputAttributes: {
            autocapitalize: 'off',
            autocorrect: 'off',
            type:'number'
          },
        preConfirm: () => {
          otpData()
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(Step1Data)
            }
            fetch('http://jaffar.com:8081/insurance/ajx/aadhar-otp-self', requestOptions)
              .then(response => response.json())
                setStep('step2')
                setactive2(true)
        }
      })
    }
    const updateValue = () => {
      const updatedObj = { ...Step1Data, 
        Capt:"",
        asnr_aadhar:document.getElementById('adharNumber').value,
        asnr_mobile_no:"9878765678",
        asnr_policy_no:"7977878",
        asnr_company_name :"indiafirst",
        ajx_typ:"",
        ajx_typ:"check_policy"
      }
      setStep1Data(updatedObj)
      console.log(updatedObj)
      Submit(updatedObj)
      AlertOtp()
    }
//854851711588
  // function handleClick () {
  //   setOtpStep(true)
  //   fetch("http://192.168.0.181:8080/jaffar_servlet/jaffar_serv")
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       setIsLoading(true)
  //       setData(result)
  //       AlertOtp()
  //       setOtpStep(false)
       
  //     },
  //     (error) => {
  //       setIsLoading(false)
  //       setErr(error)
  //       setOtpStep(false)
  //     }
      

  //   )
  // }

//   const handleClick = async () => {
//     setIsLoading(true)
//     if (isLoading) {
//       console.log('helllo')
//       return <Spinner/>
//     }
//   try {
//     const response = await fetch('http://192.168.0.130:8080/jaffar_servlet/jaffar_serv', {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json'
//       }
//     })

//     if (!response.ok) {
//       throw new Error(`Error! status: ${response.status}`)
//     }
//     const result = await response.json()
//     setData(result)
  
//     AlertOtp()
//   } catch (err) {
//     setErr(err.message)
//   } finally {
//     setIsLoading(false)
   
//   }
// const userdata = `=${this.state.fname}&last_name=${this.state.lname}&company_name=${this.state.companyName}&email=${this.state.email}&mobile=${this.state.contact}&designation=${this.state.desig}&city=${this.state.city}&product_name=1_Click_Payroll&campaign=website`

// }
  // if (step === 'step4') {
  //   document.getElementById('4').style.backgroundColor = "red"
  // } else {
  //   document.getElementById('4').style.backgroundColor = "white"
  // }

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
    useEffect(() => {
    window.scrollTo(0, 0)
     }, [step])
//   function AlertOtp() {
    
//         Swal.fire({
//         title: 'Adhar Verification',
//         html:' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
//         ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
//         ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
//         ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
//         ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>' +
//         ' <input  autocomplete="off" class="swal2-input" maxlength="1"/>',
//         focusConfirm: true,
//         inputAttributes: {
//             autocapitalize: 'off',
//             autocorrect: 'off',
//             type:'number'
//           },
//         preConfirm: () => {
//             setStep('step2')
//             setactive2(true)
//         }
//       })
//  }
// console.log(isLoading)
// console.log(err)
//  console.log(data)
//  if (err) {
//   return <div>Error: {err.message}</div>
// } else if (!isLoading) {
//   return <div><Spinner/></div>
// } else {
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
            
          }
        }}><span className="line-step"></span></div> : <div className="step">2</div>
      }
       {
       active4 ? <div className="step step-active" id="3" onClick={
        () => {
          if (active3 === true) {
            setStep('step3')
            
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
                   {/* {
                  otpStep ? <OtpStep/> : <></>
                } */}
              <div className="application-form" >
               <label>Select Company Name</label>
               <select>
                <option value="India First">India First</option>
               </select>
              <label>Enter Policy  Number</label>
              <input className="input-insurance" id="policyNumber" value={data}
               onChange={(event) => {
                const result = event.target.value.replace(/\D/g, '')
                setdata(result)
              }}></input>
              <label>Enter Mobile Number<br></br>(Registered with IndiaFirst)</label>
              <input  className="input-insurance" maxLength={11} id="mobileNumber" style={{height: "30px"}}
              value={data1}
              onChange={(event) => {
               const result1 = event.target.value.replace(/\D/g, '')
               setdata1(result1)
             }}></input>
              <label>Enter Adhar Card Number</label>
              <input  className="input-insurance" id="adharNumber" maxLength={12} value={data2}
               onChange={(event) => {
                const result2 = event.target.value.replace(/\D/g, '')
                setdata2(result2)
              }}></input>
          <label>12345</label>
          <input  className="input-insurance" id="captcha" placeholder="enter captcha"></input>
          </div>
                {/* {
                  otpStep ?  <div>
                  <Loader/>
                  {!isLoading ? <Loader/> : <></>  }
                </div> : <></>
                } */}
                <img src={Submit1}  className="In-absolute-button" data-info="step1-button" onClick={() => {
                // setSubmitData(Submit)
                updateValue()
                }}/>
                </div>
            )
          case 'step2':
            return (
                <><Step2/> 
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
</div> {
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
   </section> : <button className="witness-button" onClick={toggle}>Click here to fill witness1 detail</button>
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
   </section> : <button className="witness-button" onClick={toggle1}>Click here to fill witness2 detail</button>
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