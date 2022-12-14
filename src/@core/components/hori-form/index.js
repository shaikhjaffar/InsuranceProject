import React, { Component } from 'react'
import './horiform.css'
import CreatableSelect from 'react-select/creatable'
import Cities from './Cities.json'
import Designation from './Designation.json'
import { Input, Label, FormGroup} from 'reactstrap'
import axios from 'axios'
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
      city:""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.namehandler = this.namehandler.bind(this)
    this.contacthandler = this.contacthandler.bind(this)
    this.companyhandler = this.companyhandler.bind(this)
    this.emailhandler = this.emailhandler.bind(this)
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
    console.log(this.state)
    this.setState({ 
      name: "",
      contact: "",
      companyName: "",
      email: "",
      desig:"",
      city:""
    })
}

  render() {

    return (
        <form onSubmit={this.handleSubmit} className="contact-form">
          <div className='contact-form-div'>
          <div className='contact-input-container'>
            <input className='contact-input-box'type="text" 
            value={this.state.name} 
            onChange={this.namehandler} required pattern="[A-Za-z]+"
            title="Use Aplhabets in Name no numbers"/>
            {this.state.name === "" ? <label className='contact-label-name'>Name</label> : <label className='contact-label2'>Name</label>  }
          </div>
          <div className='contact-input-container'>
            <input className='contact-input-box' type="tel" 
            value={this.state.contact} 
            onChange={this.contacthandler} required pattern="[0-9]{0,10}" 
            title="Enter Numbers only in format eg:9999988888 contact number contains only 10 didgits"/>
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
          <CreatableSelect className='contact-input-box' options={this.state.selectedOption} onChange={this.handlesChange1.bind(this)} />
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
            <Input type="checkbox" className='contact-checkbox'/>
            <Label check> I Agree to Privacy Policy </Label>
          </FormGroup>
          <input type="button" value="Send a request" className='contact-button'  onClick={this.handleSubmit}/>
          <h5 className='contact-login-text'> Already a user ? <a className="contact-link" href="#">Login</a></h5>
      </div> 
      </form>          
    )
}
}

export default HoriForm
