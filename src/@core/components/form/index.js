import React, { Component } from 'react'
import './form.css'
import CreatableSelect from 'react-select/creatable'
import Cities from './Cities.json'
import Designation from './Designation.json'
import { Input, Label, FormGroup} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Button from './Group 218.png'
import Icon from './1 click -Logo for Light BG 4 (1).png'
// import BouncingBall from '../ball'
// import ReactSwipeButton from "react-swipe-button"
import SlideButton from 'react-slide-button'
import Swal from 'sweetalert2'
 class Form extends Component {
  
constructor(props) {
  super(props)
  const width = window.innerWidth
  this.state = {
    selectOption : [],
    selectedOption : [],
    fname:"",
    lname:"",
    contact:"",
    companyName:"",
    email:"",
    desig:"",
    city:"",
    isHidden:true,
    isTouch:width,
    isSucees:false,
    reset:0

  }
  this.handleSubmit = this.handleSubmit.bind(this)
  this.fnamehandler = this.fnamehandler.bind(this)
  this.lnamehandler = this.lnamehandler.bind(this)
  this.contacthandler = this.contacthandler.bind(this)
  this.companyhandler = this.companyhandler.bind(this)
  this.emailhandler = this.emailhandler.bind(this)
  this.checkhandle = this.checkhandle.bind(this)
  this.buttonhandle = this.buttonhandle.bind(this)
  this.buttonhandle2 = this.buttonhandle.bind(this)
}
  getOptions() {
  const data = Cities.Citynames
  const option = data.map(d => ({
    label : d.name
  }))
  const datas = Designation.designames
  const options = datas.map(ds => ({
    label : ds.name
  }))
  this.setState({selectOption:option})
  this.setState({selectedOption:options})
}
checkhandle(event) {
  if (event.target.checked) {
    this.setState({isHidden:false})
    console.log(this.state.isHidden)
  } else {
    this.setState({isHidden:true})
    console.log(this.state.isHidden)
  }
}
buttonhandle() {
  this.setState({isSucees:true})
      }

      buttonhandle2() {
        this.setState({isSucees:false})
            }
fnamehandler(event) {
  this.setState({
    fname: event.target.value
  })
}
lnamehandler(event) {
  this.setState({
    lname: event.target.value
  })
}
contacthandler(event) {
  this.setState({
    contact: event.target.value
  })
}
companyhandler(event) {
  this.setState({
    companyName: event.target.value
  })
}

emailhandler(event) {
  this.setState({
    email: event.target.value
  })
}
handleChange(event) {
this.setState({city:event.label})
} 
handlesChange1(event) {
this.setState({desig:event.label})
} 
componentDidMount() {
this.getOptions()
}
handleSubmit() {
  const FNAME_REGEX = new RegExp(/^[a-zA-Z\s]*$/gmi)
  const LNAME_REGEX = new RegExp(/^[a-zA-Z\s]*$/gmi)
  const PHONE_REGEX = new RegExp(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/gmi)
  const EMAIL_REGEX = new RegExp(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}/gmi)
     if (this.state.fname === '') {
      alert('First name field is Empty ')
      this.setState({reset:(this.state.reset + 1)})
    } else if (this.state.lname === '') {
      alert('Last name field is Empty')
      this.setState({reset:(this.state.reset + 1)})
    } else if (this.state.email === '') {
      alert('Email field is Empty')
      this.setState({reset:(this.state.reset + 1)})
    } else if (this.state.contact === '') {
      alert('Contact field is Empty')
      this.setState({reset:(this.state.reset + 1)})
    } else if (this.state.companyName === '') {
      alert('Company name field is Empty')
      this.setState({reset:(this.state.reset + 1)})
    } else if (this.state.empdesig === '') {
      alert('Designation field is Empty')
      this.setState({reset:(this.state.reset + 1)})
    } else if (this.state.city === '') {
      alert('City field is Empty')
      this.setState({reset:(this.state.reset + 1)})
    } else if (this.state.isHidden === true) {
      alert('Please Agree to privacy policy')
    } else if (FNAME_REGEX.test(this.state.fname) === false) {
        alert('Entered First Name is not in correct Format')
        this.setState({reset:(this.state.reset + 1)})
      } else if (LNAME_REGEX.test(this.state.lname) === false) {
          alert('Entered Last Name is not in correct Format')
          this.setState({reset:(this.state.reset + 1)})
      } else if (PHONE_REGEX.test(this.state.contact) === false) {
          alert('Entered Contact Number is not in correct Format')
            this.setState({reset:(this.state.reset + 1)})
      } else if (EMAIL_REGEX.test(this.state.email) === false) {
          alert('Entered Email-Id is not in correct Format.Email format is example@companyname.com')
      this.setState({reset:(this.state.reset + 1)})
      } else {
        Swal.fire({
          title:"Submitted Successfully",
          html: "<center>Thank You for Interest, we will get in touch with you.</center>",
          confirmButtonColor: '#FFA500',
          showCloseButton:true
      })

      this.setState({reset:(this.state.reset + 1)})
  const userdata = `first_name=${this.state.fname}&last_name=${this.state.lname}&company_name=${this.state.companyName}&email=${this.state.email}&mobile=${this.state.contact}&designation=${this.state.desig}&city=${this.state.city}&product_name=1_Click_Payroll&campaign=website`
  try {
    axios({
      method: "post",
      url: "https://www.1clickcapital.com/portal/api/registration.php",
      data: userdata,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    this.setState({
      fname: "",
      lname: "",
      contact: "",
      companyName: "",
      email: "",
      desig:"",
      city:"",
      isHidden:true
    })
  } catch (error) {
    console.log(error)
    alert(error)
  }
}
}


render() {

  return (
  
    <div className='form-div'>
                  <h3 className="form-head">Get a Free Quote</h3>
            <form>
            <p className="form-msg-p">Striving To Get You The Best Financial Solutions
          To Grow Your Business With Ease & Stability.</p>
        <div className='input-container'>
          <input className='input-box'type="text" 
          value={this.state.fname} 
          onChange={this.fnamehandler} required pattern="^[a-zA-Z\s]*$"
          title="Use Aplhabets in Name no numbers"/>
          {this.state.fname === "" ? <label className='label-name' >First Name</label> : <label className='label2'>First Name</label>  }
        </div>
        <div className='input-container'>
          <input className='input-box'type="text" 
          value={this.state.lname} 
          onChange={this.lnamehandler} required pattern="^[a-zA-Z\s]*$"
          title="Use Aplhabets in Name no numbers"/>
          {this.state.lname === "" ? <label className='label-name' >Last Name</label> : <label className='label2'>Last Name</label>  }
        </div>
        <div className='input-container'>
          <input className='input-box' type="tel" 
          value={this.state.contact} 
          onChange={this.contacthandler} required  pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" 
          title="Enter Numbers only in format eg:9999988888 contact number contains only 10 didgits" maxLength={13}/>
          {this.state.contact === "" ? <label className='label-name'>Contact No</label> : <label className='label2'>Contact No</label>  }
        </div>
        <div className='input-container'>
          <input className='input-box'type="text" 
          value={this.state.companyName} 
          onChange={this.companyhandler} />
          {this.state.companyName === "" ? <label className='label-name'>Company Name</label> : <label className='label2'>Company Name</label>  }
        </div>
        <div className='input-container'>
          <input className='input-box' type="email" 
          value={this.state.email} 
          onChange={this.emailhandler} required pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
          title='Email format is example@companyname.com'/>
          {this.state.email === "" ? <label className='label-name'>Email</label> : <label className='label2'>Email</label>  }
        </div>
        <div className='input-container1'>
        <CreatableSelect className='input-box' options={this.state.selectedOption} onChange={this.handlesChange1.bind(this)} placeholder="Select Designation"/>
          <label className='label2'>Designation</label>
        </div>
        <div className='input-container1'>
        <CreatableSelect className='input-box' options={this.state.selectOption} onChange={this.handleChange.bind(this)} placeholder="Select City"/>
        <label className='label2'>City</label>
        </div>
        <FormGroup
          check
          inline
          style={{margintop:"-4%"}}
          >
          <Input type="checkbox" className='checkbox' onChange={this.checkhandle} onClick={this.checkhandle} checked={!this.state.isHidden}/>
          <Label check><NavLink
             onClick={scroll}
            exact
               to="/privacy-policy">I Agree to <span style={{textDecoration:"underline", color: "red"}} target="_blank">Privacy Policy</span>
              </NavLink> </Label>
        </FormGroup>
        {
  (this.state.isTouch >= 650 ? <img value="Send a request" src={Button} className='button' onClick={this.handleSubmit}/> : <SlideButton 
  mainText="Swipe To Submit" 
  overlayText="Submitted" 
  onSlideDone={this.handleSubmit} 
  caretClassList="my-caret-class"
  classList="my-class"
  overlayClassList="my-overlay-class"
  reset={this.state.reset}
/>
)}
        <h5 className='login-text'> Already a user <span className='questionmark-form'>?</span> <a className="link" href="https://www.1clickcapital.com/portal/login.php">Login</a></h5>
        </form>    
    </div> 
        
  )
}
}

export default Form
