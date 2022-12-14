import React, { Component } from 'react'
import './form.css'
import CreatableSelect from 'react-select/creatable'
import Cities from './Cities.json'
import Designation from './Designation.json'
import { Input, Label, FormGroup} from 'reactstrap'
import axios from 'axios'
 class Form extends Component {
  
constructor(props) {
  super(props)
  this.state = {
    selectOption : [],
    selectedOption : [],
    fname:"",
    lname:"",
    contact:"",
    companyName:"",
    email:"",
    desig:"",
    city:""
  }
  this.handleSubmit = this.handleSubmit.bind(this)
  this.fnamehandler = this.fnamehandler.bind(this)
  this.lnamehandler = this.lnamehandler.bind(this)
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
  const userdata = `first_name=${this.state.fname}&last_name=${this.state.lname}&company_name=${this.state.companyName}&email=${this.state.email}&mobile=${this.state.contact}&designation=${this.state.desig}&city=${this.state.city}&product_name=1_Click_Payroll&campaign=website`
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
    fname: "",
    lname: "",
    contact: "",
    companyName: "",
    email: "",
    desig:"",
    city:""
  })
}

render() {

  return (
  
    <div className='form-div'>
      <p className="form-msg-p">Striving To Get You The Best Financial Solutions
          To Grow Your Business With Ease & Stability.</p>
            <form>
        <div className='input-container'>
          <input className='input-box'type="text" 
          value={this.state.fname} 
          onChange={this.fnamehandler} required pattern="[A-Za-z]+"
          title="Use Aplhabets in Name no numbers"/>
          {this.state.fname === "" ? <label className='label-name' >First Name</label> : <label className='label2'>First Name</label>  }
        </div>
        <div className='input-container'>
          <input className='input-box'type="text" 
          value={this.state.lname} 
          onChange={this.lnamehandler} required pattern="[A-Za-z]+"
          title="Use Aplhabets in Name no numbers"/>
          {this.state.lname === "" ? <label className='label-name' >Last Name</label> : <label className='label2'>Last Name</label>  }
        </div>
        <div className='input-container'>
          <input className='input-box' type="tel" 
          value={this.state.contact} 
          onChange={this.contacthandler} required  pattern="[0-9]{0,10}" 
          title="Enter Numbers only in format eg:9999988888 contact number contains only 10 didgits"/>
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
        <div className='input-container'>
        <CreatableSelect className='input-box' options={this.state.selectedOption} onChange={this.handlesChange1.bind(this)} />
          <label className='label2'>Designation</label>
        </div>
        <div className='input-container'>
        <CreatableSelect className='input-box' options={this.state.selectOption} onChange={this.handleChange.bind(this)}/>
        <label className='label2'>City</label>
        </div>
        <FormGroup
          check
          inline
          style={{margintop:"-4%"}}>
          <Input type="checkbox" className='checkbox'/>
          <Label check> I Agree to Privacy Policy </Label>
        </FormGroup>
        <input type="button" value="Send a request" className='button' onClick={this.handleSubmit}/>
        <h5 className='login-text'> Already a user ? <a className="link" href="#">Login</a></h5>
        </form>    
    </div> 
        
  )
}
}

export default Form
