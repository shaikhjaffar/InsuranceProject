import React, { Component } from 'react'
import './contactcc.css'
import CreatableSelect from 'react-select/creatable'
import Cities from './Cities.json'
import Designation from './Designation.json'
import { NavLink } from 'react-router-dom'
import { Input, Label, FormGroup} from 'reactstrap'
import ReactSwipeButton from "react-swipe-button"
import axios from 'axios'
 class contact extends Component {
  
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
      isHidden:true
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
      console.log(this.state.isHidden)
    } else {
      this.setState({isHidden:true})
      console.log(this.state.isHidden)
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
    if (this.state.isHidden === true) {
      alert("please agree to privacy policy")
    } else {
    const userdata = `first_name=${this.state.name}&last_name=&company_name=${this.state.companyName}&email=${this.state.email}&mobile=${this.state.contact}&designation=${this.state.desig}&city=&product_name=custom_contact&campaign=website`
    try {
      axios({
        method: "post",
        url: "https://stag.1clickcapital.com/portal/api/registration.php",
        data: userdata,
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      })
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }
  window.scrollTo(0, -90)

    console.log(this.state)
    const width = window.innerWidth
    this.setState({ 
      name: "",
      contact: "",
      companyName: "",
      email: "",
      desig:"",
      city:"",
      isHidden:true,
      isTouch:width
    })
}

  render() {

    return (
        <form onSubmit={this.handleSubmit} className="contact-form2">
          <div className='contact-form-div2'>
          <div className='contact-input-container2'>
            <input className='contact-input-box2'type="text" 
            value={this.state.name} 
            onChange={this.namehandler} required pattern="[A-Za-z]+"
            title="Use Aplhabets in Name no numbers"/>
            {this.state.name === "" ? <label className='contact-label-name2'>Name</label> : <label className='contact2-label2'>Name</label>  }
          </div>
          <div className='contact-input-container2'>
            <input className='contact-input-box2' type="tel" 
            value={this.state.contact} 
            onChange={this.contacthandler} required pattern="[0-9]{0,10}" 
            title="Enter Numbers only in format eg:9999988888 contact number contains only 10 didgits"/>
            {this.state.contact === "" ? <label className='contact-label-name2'>Contact No</label> : <label className='contact2-label2'>Contact No</label>  }
          </div>
          <div className='contact-input-container2'>
            <input className='contact-input-box2'type="text" 
            value={this.state.companyName} 
            onChange={this.companyhandler} />
            {this.state.companyName === "" ? <label className='contact-label-name2'>Company Name</label> : <label className='contact2-label2'>Company Name</label>  }
          </div>
          <div className='contact-input-container2'>
            <input className='contact-input-box2' type="email" 
            value={this.state.email} 
            onChange={this.emailhandler} required pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
            title='Email format is example@companyname.com'/>
            {this.state.email === "" ? <label className='contact-label-name2'>Email</label> : <label className='contact2-label2'>Email</label>  }
          </div>
          <div className='contact-input-container2'>
          <CreatableSelect className='contact-input-box2  ci-container2' options={this.state.selectedOption} onChange={this.handlesChange1.bind(this)} />
            <label className='contact2-label2'>Designation</label>
          </div>
          <FormGroup
            check
            inline
            style={{margintop:"-4%", fontSize:"11px"}}>
            <Input type="checkbox" className='contact-checkbox2' onChange={this.checkhandle}/>
            <Label check><NavLink
             onClick={scroll}
            exact
               to="/Policy">I Agree to <span style={{textDecoration:"underline", color: "red"}}>Privacy Policy</span>
              </NavLink> </Label>
          </FormGroup>
          {
  (this.state.isTouch >= 650 ? <input type="button" value="Send a request" className='button' onClick={this.handleSubmit}/> : <div style={{width:"250px"}}><ReactSwipeButton
  text="SWIPE TO SUBMIT"
  text_unlocked='SUBMITED'
  color="#2fc3ce"
  onSuccess={this.handleSubmit}
/></div>)}
          <h5 className='contact-login-text2'> Already a user <span className='questionmark-horiform2'>?</span> <a className="contact-link2" href="https://www.1clickcapital.com/portal/login.php">Login</a></h5>
      </div> 
      </form>          
    )
}
}

export default contact
