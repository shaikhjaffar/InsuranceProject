import React, { Component } from 'react'
import './horiform.css'
import CreatableSelect from 'react-select/creatable'
import Cities from './Cities.json'
import Designation from './Designation.json'
import { NavLink } from 'react-router-dom'
import { Input, Label, FormGroup} from 'reactstrap'
// import ReactSwipeButton from "react-swipe-button"
import SlideButton from 'react-slide-button'
import axios from 'axios'
import Button from './Group 218.png'
import Swal from 'sweetalert2'
 class HoriForm extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      selectOption : [],
      selectedOption : [],
      name:"",
      contact:"",
      companyName:"",
      email:"",
      desig:"",
      city:"",
      isHidden:true,
      isTouch:window.innerWidth,
      reset:0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.namehandler = this.namehandler.bind(this)
    this.contacthandler = this.contacthandler.bind(this)
    this.companyhandler = this.companyhandler.bind(this)
    this.emailhandler = this.emailhandler.bind(this)
    this.checkhandle = this.checkhandle.bind(this)
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
  // getsOptions(){
  //   const data = Cities.Citynames
  //   const option = data.map(d => ({
  //     "label" : ""
  //   }))
  //   const datas = Designation.designames
  //   const options = datas.map(ds => ({
  //     "label" : ""
  //   }))
  //   this.setState({selectOption:option})
  //   this.setState({selectedOption:options})
  // }
  namehandler(event) {
    this.setState({
      name: event.target.value
    })
  }
  contacthandler(event) {
    this.setState({
      contact: event.target.value
    })
  }
  checkhandle(event) {
    if (event.target.checked) {
      this.setState({isHidden:false})
    } else {
      this.setState({isHidden:true})
    }
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
    const NAME_REGEX = new RegExp(/^[a-zA-Z\s]*$/gmi)
  const PHONE_REGEX = new RegExp(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/gmi)
  const EMAIL_REGEX = new RegExp(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}/gmi)
    if (this.state.name === '') {
      alert('Name field is Empty')
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
       
    } else if (this.state.isHidden === true) {
      alert('Please Agree to privacy policy')
      this.setState({reset:(this.state.reset + 1)})
    } else if (NAME_REGEX.test(this.state.name) === false) {
      alert('Entered Name is not in correct Format')
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
    const userdata = `first_name=${this.state.name}&last_name=&company_name=${this.state.companyName}&email=${this.state.email}&mobile=${this.state.contact}&designation=${this.state.desig}&city=&product_name=custom_contact&campaign=website`
    try {
      axios({
        method: "post",
        url: "https://www.1clickcapital.com/portal/api/registration.php",
        data: userdata,
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      })
      this.setState({ 
        name: "",
        contact: "",
        companyName: "",
        email: "",
        desig:"",
        city:"",
        isHidden:true
      })
    } catch (error) {
      alert(error)
    }
  }
}

  render() {

    return (
        <form onSubmit={this.handleSubmit} className="contact-form">
          <div className='contact-form-div'>
          <div className='contact-input-container'>
            <input className='contact-input-box'type="text" 
            value={this.state.name} 
            onChange={this.namehandler} required pattern="^[a-zA-Z\s]*$"
            title="Use Aplhabets in Name no numbers"/>
            {this.state.name === "" ? <label className='contact-label-name'>Name</label> : <label className='contact-label2'>Name</label>  }
          </div>
          <div className='contact-input-container'>
            <input className='contact-input-box' type="tel" 
            value={this.state.contact} 
            onChange={this.contacthandler} required pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" 
            title="Enter Numbers only in format eg:9999988888 contact number contains only 10 didgits" maxLength={13}/>
            {this.state.contact === "" ? <label className='contact-label-name'>Contact No</label> : <label className='contact-label2'>Contact No</label>  }
          </div>
          <div className='contact-input-container'>
            <input className='contact-input-box'type="text" 
            value={this.state.companyName} 
            onChange={this.companyhandler} />
            {this.state.companyName === "" ? <label className='contact-label-name'>Company Name</label> : <label className='contact-label2'>Company Name</label>  }
          </div>
          <div className='contact-input-container'>
            <input className='contact-input-box' type="email" 
            value={this.state.email} 
            onChange={this.emailhandler} required pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
            title='Email format is example@companyname.com'/>
            {this.state.email === "" ? <label className='contact-label-name'>Email</label> : <label className='contact-label2'>Email</label>  }
          </div>
          <div className='contact-input-container'>
          <CreatableSelect className='contact-input-box  ci-container' options={this.state.selectedOption} onChange={this.handlesChange1.bind(this)} placeholder="Select Designation"/>
            <label className='contact-label2'>Designation</label>
          </div>
          {/* <div className='contact-input-container'>
          <CreatableSelect className='contact-input-box' options={this.state.selectOption} onChange={this.handleChange.bind(this)} />
          <label>City</label>
          </div> */}
          <FormGroup
            check
            inline
            style={{margintop:"-4%"}}>
            <Input type="checkbox" className='contact-checkbox' onChange={this.checkhandle} onClick={this.checkhandle} checked={!this.state.isHidden}/>
            <Label check><NavLink
             onClick={scroll}
            exact
               to="/privacy-policy">I Agree to <span style={{textDecoration:"underline", color: "red"}}>Privacy Policy</span>
              </NavLink> </Label>
          </FormGroup>
          {
  (this.state.isTouch >= 650 ? <img value="Send a request" src={Button} className='button-2' onClick={this.handleSubmit}/> : <div style={{width:"250px"}}>
<SlideButton 
  mainText="Swipe To Submit" 
  overlayText="Submitted" 
  onSlideDone={this.handleSubmit} 
  caretClassList="my-caret-class"
  classList="my-class"
  overlayClassList="my-overlay-class"
  reset={this.state.reset}
/></div>)}
          <h5 className='contact-login-text'> Already a user <span className='questionmark-horiform'>?</span> <a className="contact-link" href="https://www.1clickcapital.com/portal/login.php">Login</a></h5>
      </div>
      </form>          
    )
}
}

export default HoriForm
