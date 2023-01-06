import React, { Component } from 'react'
import Select from 'react-select'
import data from './Data'
import './Dropd.css'
import Property from './Property.json'
import Cities from './Cities.json'
import EmpDesignation from './EmpDesignation.json'
import Employeesize from './Employeesize.json'
import CreatableSelect from 'react-select/creatable'
import { Input, Label, FormGroup} from 'reactstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
class Dropd extends Component {
  
  constructor(props) {
    super(props)
      this.state = {
        selectOption : [],
        propertyOption : [],
        cityOption : [],
        EmpdesgOption : [],
        EmpsizeOption : [],
        title:"1 Click Payroll Financing",
        field:[
          {
          fieldid:1,
          name:"Company Name",
          label:"Company Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:2,
          name:"First Name",
          label:"First Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:3,
          name:"Last Name",
          label:"Last Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:4,
          name:"Email",
          label:"Email",
          required:true,
          html_element:"email"
      },
      {
          fieldid:5,
          name:"Contact No",
          label:"Contact No",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:6,
          name:"Designation",
          label:"Designation",
          required:true,
          html_element:"dropdown"
      },
      {
          fieldid:7,
          name:"City",
          label:"City",
          required:true,
          html_element:"dropdown"
      }
    ],
        pid:1,
        ptype:"",
        city:"",
        empdesig:"",
        empsize:"",
        cname:"",
        fname:"",
        lname:"",
        email:"",
        contact:"",
        tenure:"",
        amount:"",
        pname:"",
        isHidden : true 
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.cnamehandler = this.cnamehandler.bind(this)
      this.fnamehandler = this.fnamehandler.bind(this)
      this.lnamehandler = this.lnamehandler.bind(this)
      this.emailhandler = this.emailhandler.bind(this)
      this.contacthandler = this.contacthandler.bind(this)
      this.tenurehandler = this.tenurehandler.bind(this)
      this.amounthandler = this.amounthandler.bind(this)
      this.pnamehandler = this.pnamehandler.bind(this)
      this.checkhandle = this.checkhandle.bind(this)
  } 
  getOptions() {
    const option = data.form.sections.map(d => ({
      label : d.product_title,
      id:d.product_id,
      fld:d.fields 
    }))
    const val = Property.propertytype
    const options = val.map(v => ({
      label : v.name
    }))
    const val1 = Cities.Citynames
    const options1 = val1.map(v1 => ({
      label : v1.name
    }))
    const val2 = EmpDesignation.designames
    const options2 = val2.map(v2 => ({
      label : v2.name
    }))
    const val3 = Employeesize.employeesize
    const options3 = val3.map(v3 => ({
      label : v3.value
    }))
    this.setState({selectOption:option})
    this.setState({propertyOption:options})
    this.setState({cityOption:options1})
    this.setState({EmpdesgOption:options2})
    this.setState({EmpsizeOption:options3})
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
  handleChange(event) {
    this.setState({title:event.label})
    this.setState({pid:event.id})
    this.setState({field:event.fld})
  } 
  handleChanges(event) {
    this.setState({ptype:event.label})
  } 
   handleChanges1(event) {
    this.setState({city:event.label})
  }
  handleChanges2(event) {
    this.setState({empdesig:event.label})
  }
  handleChanges3(event) {
    this.setState({empsize:event.label})
  }
  cnamehandler(event) {
    this.setState({
      cname: event.target.value
    })
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
  emailhandler(event) {
    this.setState({
      email: event.target.value
    })
  }
  contacthandler(event) {
    this.setState({
      contact: event.target.value
    })
  }
  tenurehandler(event) {
    this.setState({
      tenure: event.target.value
    })
  }
  amounthandler(event) {
    this.setState({
      amount: event.target.value
    })
  }
  pnamehandler(event) {
    this.setState({
      pname: event.target.value
    })
  }
  componentDidMount() {
    this.getOptions()
  }
  handleSubmit() {
    if (this.state.title === "1 Click Payroll Financing") {  
      if (this.state.cname === '') {
        alert('Company name field is Empty')
         
      } else if (this.state.fname === '') {
        alert('First name field is Empty')
         
      } else if (this.state.lname === '') {
        alert('Last name field is Empty')
         
      } else if (this.state.email === '') {
        alert('Email field is Empty')
         
      } else if (this.state.contact === '') {
        alert('Contact field is Empty')
         
      } else if (this.state.empdesig === '') {
        alert('Designation field is Empty')
         
      } else if (this.state.city === '') {
        alert('City field is Empty')
         
      } else if (this.state.isHidden === true) {
        alert('Please Agree to Privacy policy')
      } else {
        Swal.fire({
          title:"Submitted Successfully",
          html: "<center>Thank You for Interest, we will get in touch with you.</center>",
          confirmButtonColor: '#FFA500',
          showCloseButton:true
      })
        const userdata = `first_name=${this.state.fname}&last_name=${this.state.lname}&company_name=${this.state.cname}&email=${this.state.email}&mobile=${this.state.contact}&designation=${this.state.empdesig}&city=${this.state.city}&tenure=${this.state.tenure}&amount=${this.state.amount}&emp_size=${this.state.empsize}&project_name=${this.state.pname}&property_type=${this.state.ptype}&product_name=${this.state.title}&campaign=website`
  try {
    axios({
      method: "post",
      url: "https://www.1clickcapital.com/portal/api/registration.php",
      data: userdata,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    this.setState({ 
      title:"1 Click Payroll Financing",
        field:[
          {
          fieldid:1,
          name:"Company Name",
          label:"Company Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:2,
          name:"First Name",
          label:"First Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:3,
          name:"Last Name",
          label:"Last Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:4,
          name:"Email",
          label:"Email",
          required:true,
          html_element:"email"
      },
      {
          fieldid:5,
          name:"Contact No",
          label:"Contact No",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:6,
          name:"Designation",
          label:"Designation",
          required:true,
          html_element:"dropdown"
      },
      {
          fieldid:7,
          name:"City",
          label:"City",
          required:true,
          html_element:"dropdown"
      }
    ],
      pid:1,
      ptype:"",
      city:"",
      empdesig:"",
      empsize:"",
      cname:"",
      fname:"",
      lname:"",
      email:"",
      contact:"",
      tenure:"",
      amount:"",
      pname:"",
      isHidden : true 
    })
    this.setState({ 
      title:"1 Click Payroll Financing",
        field:[
          {
          fieldid:1,
          name:"Company Name",
          label:"Company Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:2,
          name:"First Name",
          label:"First Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:3,
          name:"Last Name",
          label:"Last Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:4,
          name:"Email",
          label:"Email",
          required:true,
          html_element:"email"
      },
      {
          fieldid:5,
          name:"Contact No",
          label:"Contact No",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:6,
          name:"Designation",
          label:"Designation",
          required:true,
          html_element:"dropdown"
      },
      {
          fieldid:7,
          name:"City",
          label:"City",
          required:true,
          html_element:"dropdown"
      }
    ],
      pid:1,
      ptype:"",
      city:"",
      empdesig:"",
      empsize:"",
      cname:"",
      fname:"",
      lname:"",
      email:"",
      contact:"",
      tenure:"",
      amount:"",
      pname:"",
      isHidden : true 
    })
    
  } catch (error) {
    console.log(error)
    alert(error)
  } 
      }                  
    } else if (this.state.title === "1 Click Salary Advance") {
      if (this.state.cname === '') {
        alert('Company name field is Empty')
         
      } else if (this.state.fname === '') {
        alert('First name field is Empty')
         
      } else if (this.state.lname === '') {
        alert('Last name field is Empty')
         
      } else if (this.state.email === '') {
        alert('Email field is Empty')
         
      } else if (this.state.contact === '') {
        alert('Contact field is Empty')
         
      } else if (this.state.empdesig === '') {
        alert('Designation field is Empty')
         
      } else if (this.state.city === '') {
        alert('City field is Empty')
         
      } else if (this.state.isHidden === true) {
        alert('Please Agree to Privacy policy')
      } else {
        Swal.fire({
          title:"Submitted Successfully",
          html: "<center>Thank You for Interest, we will get in touch with you.</center>",
          confirmButtonColor: '#FFA500',
          showCloseButton:true
      })
       const userdata = `first_name=${this.state.fname}&last_name=${this.state.lname}&company_name=${this.state.cname}&email=${this.state.email}&mobile=${this.state.contact}&designation=${this.state.empdesig}&city=${this.state.city}&tenure=${this.state.tenure}&amount=${this.state.amount}&emp_size=${this.state.empsize}&project_name=${this.state.pname}&property_type=${this.state.ptype}&product_name=${this.state.title}&campaign=website`
  try {
    axios({
      method: "post",
      url: "https://www.1clickcapital.com/portal/api/registration.php",
      data: userdata,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    this.setState({ 
      title:"1 Click Payroll Financing",
        field:[
          {
          fieldid:1,
          name:"Company Name",
          label:"Company Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:2,
          name:"First Name",
          label:"First Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:3,
          name:"Last Name",
          label:"Last Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:4,
          name:"Email",
          label:"Email",
          required:true,
          html_element:"email"
      },
      {
          fieldid:5,
          name:"Contact No",
          label:"Contact No",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:6,
          name:"Designation",
          label:"Designation",
          required:true,
          html_element:"dropdown"
      },
      {
          fieldid:7,
          name:"City",
          label:"City",
          required:true,
          html_element:"dropdown"
      }
    ],
      pid:1,
      ptype:"",
      city:"",
      empdesig:"",
      empsize:"",
      cname:"",
      fname:"",
      lname:"",
      email:"",
      contact:"",
      tenure:"",
      amount:"",
      pname:"",
      isHidden : true 
    })
    
  } catch (error) {
    console.log(error)
    alert(error)
  }
      }                  
    } else if (this.state.title === "1 Click Insurance Funding") {
      if (this.state.cname === '') {
        alert('Company name field is Empty')
         
      } else if (this.state.fname === '') {
        alert('First name field is Empty')
         
      } else if (this.state.lname === '') {
        alert('Last name field is Empty')
         
      } else if (this.state.email === '') {
        alert('Email field is Empty')
         
      } else if (this.state.contact === '') {
        alert('Contact field is Empty')
         
      } else if (this.state.empdesig === '') {
        alert('Designation field is Empty')
         
      } else if (this.state.city === '') {
        alert('City field is Empty')
         
      } else if (this.state.isHidden === true) {
        alert('Please Agree to Privacy policy')
      } else {
        Swal.fire({
          title:"Submitted Successfully",
          html: "<center>Thank You for Interest, we will get in touch with you.</center>",
          confirmButtonColor: '#FFA500',
          showCloseButton:true
      })
       const userdata = `first_name=${this.state.fname}&last_name=${this.state.lname}&company_name=${this.state.cname}&email=${this.state.email}&mobile=${this.state.contact}&designation=${this.state.empdesig}&city=${this.state.city}&tenure=${this.state.tenure}&amount=${this.state.amount}&emp_size=${this.state.empsize}&project_name=${this.state.pname}&property_type=${this.state.ptype}&product_name=${this.state.title}&campaign=website`
  try {
    axios({
      method: "post",
      url: "https://www.1clickcapital.com/portal/api/registration.php",
      data: userdata,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    this.setState({ 
      title:"1 Click Payroll Financing",
        field:[
          {
          fieldid:1,
          name:"Company Name",
          label:"Company Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:2,
          name:"First Name",
          label:"First Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:3,
          name:"Last Name",
          label:"Last Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:4,
          name:"Email",
          label:"Email",
          required:true,
          html_element:"email"
      },
      {
          fieldid:5,
          name:"Contact No",
          label:"Contact No",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:6,
          name:"Designation",
          label:"Designation",
          required:true,
          html_element:"dropdown"
      },
      {
          fieldid:7,
          name:"City",
          label:"City",
          required:true,
          html_element:"dropdown"
      }
    ],
      pid:1,
      ptype:"",
      city:"",
      empdesig:"",
      empsize:"",
      cname:"",
      fname:"",
      lname:"",
      email:"",
      contact:"",
      tenure:"",
      amount:"",
      pname:"",
      isHidden : true 
    })
    
  } catch (error) {
    console.log(error)
    alert(error)
  }
         
      }
    } else if (this.state.title === "1 Click Lease Rental Discounting") {
      if (this.state.cname === '') {
        alert('Company name field is Empty')
         
      } else if (this.state.fname === '') {
        alert('First name field is Empty')
         
      } else if (this.state.lname === '') {
        alert('Last name field is Empty')
         
      } else if (this.state.email === '') {
        alert('Email field is Empty')
         
      } else if (this.state.contact === '') {
        alert('Contact field is Empty')
         
      } else if (this.state.ptype === '') {
        alert('Property Type field is Empty')
         
      } else if (this.state.isHidden === true) {
        alert('Please Agree to Privacy policy')
      } else {
        Swal.fire({
          title:"Submitted Successfully",
          html: "<center>Thank You for Interest, we will get in touch with you.</center>",
          confirmButtonColor: '#FFA500',
          showCloseButton:true
      })
       const userdata = `first_name=${this.state.fname}&last_name=${this.state.lname}&company_name=${this.state.cname}&email=${this.state.email}&mobile=${this.state.contact}&designation=${this.state.empdesig}&city=${this.state.city}&tenure=${this.state.tenure}&amount=${this.state.amount}&emp_size=${this.state.empsize}&project_name=${this.state.pname}&property_type=${this.state.ptype}&product_name=${this.state.title}&campaign=website`
  try {
    axios({
      method: "post",
      url: "https://www.1clickcapital.com/portal/api/registration.php",
      data: userdata,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    this.setState({ 
      title:"1 Click Payroll Financing",
        field:[
          {
          fieldid:1,
          name:"Company Name",
          label:"Company Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:2,
          name:"First Name",
          label:"First Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:3,
          name:"Last Name",
          label:"Last Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:4,
          name:"Email",
          label:"Email",
          required:true,
          html_element:"email"
      },
      {
          fieldid:5,
          name:"Contact No",
          label:"Contact No",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:6,
          name:"Designation",
          label:"Designation",
          required:true,
          html_element:"dropdown"
      },
      {
          fieldid:7,
          name:"City",
          label:"City",
          required:true,
          html_element:"dropdown"
      }
    ],
      pid:1,
      ptype:"",
      city:"",
      empdesig:"",
      empsize:"",
      cname:"",
      fname:"",
      lname:"",
      email:"",
      contact:"",
      tenure:"",
      amount:"",
      pname:"",
      isHidden : true 
    })
    
  } catch (error) {
    console.log(error)
    alert(error)
  }
    }
    } else if (this.state.title === "1 Click Project Funding") {
      if (this.state.cname === '') {
        alert('Company name field is Empty')
         
      } else if (this.state.fname === '') {
        alert('First name field is Empty')
         
      } else if (this.state.lname === '') {
        alert('Last name field is Empty')
         
      } else if (this.state.email === '') {
        alert('Email field is Empty')
         
      } else if (this.state.contact === '') {
        alert('Contact field is Empty')
         
      } else if (this.state.tenure === '') {
        alert('Tenure field is Empty')
         
      } else if (this.state.amount === '') {
        alert('Amount field is Empty')
         
      } else if (this.state.isHidden === true) {
        alert('Please Agree to Privacy policy')
      } else {
        Swal.fire({
          title:"Submitted Successfully",
          html: "<center>Thank You for Interest, we will get in touch with you.</center>",
          confirmButtonColor: '#FFA500',
          showCloseButton:true
      })
       const userdata = `first_name=${this.state.fname}&last_name=${this.state.lname}&company_name=${this.state.cname}&email=${this.state.email}&mobile=${this.state.contact}&designation=${this.state.empdesig}&city=${this.state.city}&tenure=${this.state.tenure}&amount=${this.state.amount}&emp_size=${this.state.empsize}&project_name=${this.state.pname}&property_type=${this.state.ptype}&product_name=${this.state.title}&campaign=website`
  try {
    axios({
      method: "post",
      url: "https://www.1clickcapital.com/portal/api/registration.php",
      data: userdata,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    this.setState({ 
      title:"1 Click Payroll Financing",
        field:[
          {
          fieldid:1,
          name:"Company Name",
          label:"Company Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:2,
          name:"First Name",
          label:"First Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:3,
          name:"Last Name",
          label:"Last Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:4,
          name:"Email",
          label:"Email",
          required:true,
          html_element:"email"
      },
      {
          fieldid:5,
          name:"Contact No",
          label:"Contact No",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:6,
          name:"Designation",
          label:"Designation",
          required:true,
          html_element:"dropdown"
      },
      {
          fieldid:7,
          name:"City",
          label:"City",
          required:true,
          html_element:"dropdown"
      }
    ],
      pid:1,
      ptype:"",
      city:"",
      empdesig:"",
      empsize:"",
      cname:"",
      fname:"",
      lname:"",
      email:"",
      contact:"",
      tenure:"",
      amount:"",
      pname:"",
      isHidden : true 
    })
    
  } catch (error) {
    console.log(error)
    alert(error)
  }
       
    }
    } else if (this.state.title === "1 Click Supply Chain Funding") {
      if (this.state.cname === '') {
        alert('Company name field is Empty')
         
      } else if (this.state.fname === '') {
        alert('First name field is Empty')
         
      } else if (this.state.lname === '') {
        alert('Last name field is Empty')
         
      } else if (this.state.email === '') {
        alert('Email field is Empty')
         
      } else if (this.state.contact === '') {
        alert('Contact field is Empty')
         
      } else if (this.state.tenure === '') {
        alert('Tenure field is Empty')
         
      } else if (this.state.amount === '') {
        alert('Amount field is Empty')
         
      } else if (this.state.isHidden === true) {
        alert('Please Agree to Privacy policy')
      } else {
        Swal.fire({
          title:"Submitted Successfully",
          html: "<center>Thank You for Interest, we will get in touch with you.</center>",
          confirmButtonColor: '#FFA500',
          showCloseButton:true
      })
       const userdata = `first_name=${this.state.fname}&last_name=${this.state.lname}&company_name=${this.state.cname}&email=${this.state.email}&mobile=${this.state.contact}&designation=${this.state.empdesig}&city=${this.state.city}&tenure=${this.state.tenure}&amount=${this.state.amount}&emp_size=${this.state.empsize}&project_name=${this.state.pname}&property_type=${this.state.ptype}&product_name=${this.state.title}&campaign=website`
  try {
    axios({
      method: "post",
      url: "https://www.1clickcapital.com/portal/api/registration.php",
      data: userdata,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    this.setState({ 
      title:"1 Click Payroll Financing",
        field:[
          {
          fieldid:1,
          name:"Company Name",
          label:"Company Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:2,
          name:"First Name",
          label:"First Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:3,
          name:"Last Name",
          label:"Last Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:4,
          name:"Email",
          label:"Email",
          required:true,
          html_element:"email"
      },
      {
          fieldid:5,
          name:"Contact No",
          label:"Contact No",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:6,
          name:"Designation",
          label:"Designation",
          required:true,
          html_element:"dropdown"
      },
      {
          fieldid:7,
          name:"City",
          label:"City",
          required:true,
          html_element:"dropdown"
      }
    ],
      pid:1,
      ptype:"",
      city:"",
      empdesig:"",
      empsize:"",
      cname:"",
      fname:"",
      lname:"",
      email:"",
      contact:"",
      tenure:"",
      amount:"",
      pname:"",
      isHidden : true 
    })
    
  } catch (error) {
    console.log(error)
    alert(error)
  }
       
    }
    } else if (this.state.title === "1 Click Working Capital") {
      if (this.state.cname === '') {
        alert('Company name field is Empty')
         
      } else if (this.state.fname === '') {
        alert('First name field is Empty')
         
      } else if (this.state.lname === '') {
        alert('Last name field is Empty')
         
      } else if (this.state.email === '') {
        alert('Email field is Empty')
         
      } else if (this.state.contact === '') {
        alert('Contact field is Empty')
         
      } else if (this.state.tenure === '') {
        alert('Tenure field is Empty')
         
      } else if (this.state.amount === '') {
        alert('Amount field is Empty')
         
      } else if (this.state.isHidden === true) {
        alert('Please Agree to Privacy policy')
      } else {
        Swal.fire({
          title:"Submitted Successfully",
          html: "<center>Thank You for Interest, we will get in touch with you.</center>",
          confirmButtonColor: '#FFA500',
          showCloseButton:true
      })
       const userdata = `first_name=${this.state.fname}&last_name=${this.state.lname}&company_name=${this.state.cname}&email=${this.state.email}&mobile=${this.state.contact}&designation=${this.state.empdesig}&city=${this.state.city}&tenure=${this.state.tenure}&amount=${this.state.amount}&emp_size=${this.state.empsize}&project_name=${this.state.pname}&property_type=${this.state.ptype}&product_name=${this.state.title}&campaign=website`
  try {
    axios({
      method: "post",
      url: "https://www.1clickcapital.com/portal/api/registration.php",
      data: userdata,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    this.setState({ 
      title:"1 Click Payroll Financing",
        field:[
          {
          fieldid:1,
          name:"Company Name",
          label:"Company Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:2,
          name:"First Name",
          label:"First Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:3,
          name:"Last Name",
          label:"Last Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:4,
          name:"Email",
          label:"Email",
          required:true,
          html_element:"email"
      },
      {
          fieldid:5,
          name:"Contact No",
          label:"Contact No",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:6,
          name:"Designation",
          label:"Designation",
          required:true,
          html_element:"dropdown"
      },
      {
          fieldid:7,
          name:"City",
          label:"City",
          required:true,
          html_element:"dropdown"
      }
    ],
      pid:1,
      ptype:"",
      city:"",
      empdesig:"",
      empsize:"",
      cname:"",
      fname:"",
      lname:"",
      email:"",
      contact:"",
      tenure:"",
      amount:"",
      pname:"",
      isHidden : true 
    })
    
  } catch (error) {
    console.log(error)
    alert(error)
  }
       
    }
    } else if (this.state.title === "1 Click MSME") {
      if (this.state.cname === '') {
        alert('Company name field is Empty')
         
      } else if (this.state.fname === '') {
        alert('First name field is Empty')
         
      } else if (this.state.lname === '') {
        alert('Last name field is Empty')
         
      } else if (this.state.email === '') {
        alert('Email field is Empty')
         
      } else if (this.state.contact === '') {
        alert('Contact field is Empty')
         
      } else if (this.state.tenure === '') {
        alert('Tenure field is Empty')
         
      } else if (this.state.amount === '') {
        alert('Amount field is Empty')
         
      } else if (this.state.isHidden === true) {
        alert('Please Agree to Privacy policy')
      } else {
        Swal.fire({
          title:"Submitted Successfully",
          html: "<center>Thank You for Interest, we will get in touch with you.</center>",
          confirmButtonColor: '#FFA500',
          showCloseButton:true
      })
       const userdata = `first_name=${this.state.fname}&last_name=${this.state.lname}&company_name=${this.state.cname}&email=${this.state.email}&mobile=${this.state.contact}&designation=${this.state.empdesig}&city=${this.state.city}&tenure=${this.state.tenure}&amount=${this.state.amount}&emp_size=${this.state.empsize}&project_name=${this.state.pname}&property_type=${this.state.ptype}&product_name=${this.state.title}&campaign=website`
  try {
    axios({
      method: "post",
      url: "https://www.1clickcapital.com/portal/api/registration.php",
      data: userdata,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    this.setState({ 
      title:"1 Click Payroll Financing",
        field:[
          {
          fieldid:1,
          name:"Company Name",
          label:"Company Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:2,
          name:"First Name",
          label:"First Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:3,
          name:"Last Name",
          label:"Last Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:4,
          name:"Email",
          label:"Email",
          required:true,
          html_element:"email"
      },
      {
          fieldid:5,
          name:"Contact No",
          label:"Contact No",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:6,
          name:"Designation",
          label:"Designation",
          required:true,
          html_element:"dropdown"
      },
      {
          fieldid:7,
          name:"City",
          label:"City",
          required:true,
          html_element:"dropdown"
      }
    ],
      pid:1,
      ptype:"",
      city:"",
      empdesig:"",
      empsize:"",
      cname:"",
      fname:"",
      lname:"",
      email:"",
      contact:"",
      tenure:"",
      amount:"",
      pname:"",
      isHidden : true 
    })
    
  } catch (error) {
    console.log(error)
    alert(error)
  }
       
    }
    } else if (this.state.title === "1 Click HRMS") {
      if (this.state.cname === '') {
        alert('Company name field is Empty')
         
      } else if (this.state.fname === '') {
        alert('First name field is Empty only use Alphabets in names')
         
      } else if (this.state.lname === '') {
        alert('Last name field is Empty only use Alphabets in names')
         
      } else if (this.state.email === '') {
        alert('Email field is Empty. Email format is example@companyname.com')
         
      } else if (this.state.contact === '') {
        alert('Contact field is Empty use only number')
         
      } else if (this.state.empsize === '') {
        alert('Employee Size field is Empty')
         
      } else if (this.state.isHidden === true) {
        alert('Please Agree to Privacy policy')
      } else {
        Swal.fire({
          title:"Submitted Successfully",
          html: "<center>Thank You for Interest, we will get in touch with you.</center>",
          confirmButtonColor: '#FFA500',
          showCloseButton:true
      })
       const userdata = `first_name=${this.state.fname}&last_name=${this.state.lname}&company_name=${this.state.cname}&email=${this.state.email}&mobile=${this.state.contact}&designation=${this.state.empdesig}&city=${this.state.city}&tenure=${this.state.tenure}&amount=${this.state.amount}&emp_size=${this.state.empsize}&project_name=${this.state.pname}&property_type=${this.state.ptype}&product_name=${this.state.title}&campaign=website`
  try {
    axios({
      method: "post",
      url: "https://www.1clickcapital.com/portal/api/registration.php",
      data: userdata,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    this.setState({ 
      title:"1 Click Payroll Financing",
        field:[
          {
          fieldid:1,
          name:"Company Name",
          label:"Company Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:2,
          name:"First Name",
          label:"First Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:3,
          name:"Last Name",
          label:"Last Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:4,
          name:"Email",
          label:"Email",
          required:true,
          html_element:"email"
      },
      {
          fieldid:5,
          name:"Contact No",
          label:"Contact No",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:6,
          name:"Designation",
          label:"Designation",
          required:true,
          html_element:"dropdown"
      },
      {
          fieldid:7,
          name:"City",
          label:"City",
          required:true,
          html_element:"dropdown"
      }
    ],
      pid:1,
      ptype:"",
      city:"",
      empdesig:"",
      empsize:"",
      cname:"",
      fname:"",
      lname:"",
      email:"",
      contact:"",
      tenure:"",
      amount:"",
      pname:"",
      isHidden : true 
    })
    
  } catch (error) {
    console.log(error)
    alert(error)
  }  
    }
    } else if (this.state.title === "1 Click Entertainment and Production Financial") {
      if (this.state.cname === '') {
        alert('Company name field is Empty')
         
      } else if (this.state.fname === '') {
        alert('First name field is Empty')
         
      } else if (this.state.lname === '') {
        alert('Last name field is Empty')
         
      } else if (this.state.email === '') {
        alert('Email field is Empty')
         
      } else if (this.state.contact === '') {
        alert('Contact field is Empty')
         
      } else if (this.state.tenure === '') {
        alert('Tenure field is Empty')
         
      } else if (this.state.amount === '') {
        alert('Amount field is Empty')
         
      } else if (this.state.pname === '') {
        alert('Project Name field is Empty')
         
      } else if (this.state.isHidden === true) {
        alert('Please Agree to Privacy policy')
      } else {
        Swal.fire({
          title:"Submitted Successfully",
          html: "<center>Thank You for Interest, we will get in touch with you.</center>",
          confirmButtonColor: '#FFA500',
          showCloseButton:true
      })
       const userdata = `first_name=${this.state.fname}&last_name=${this.state.lname}&company_name=${this.state.cname}&email=${this.state.email}&mobile=${this.state.contact}&designation=${this.state.empdesig}&city=${this.state.city}&tenure=${this.state.tenure}&amount=${this.state.amount}&emp_size=${this.state.empsize}&project_name=${this.state.pname}&property_type=${this.state.ptype}&product_name=${this.state.title}&campaign=website`
  try {
    axios({
      method: "post",
      url: "https://www.1clickcapital.com/portal/api/registration.php",
      data: userdata,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    this.setState({ 
      title:"1 Click Payroll Financing",
        field:[
          {
          fieldid:1,
          name:"Company Name",
          label:"Company Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:2,
          name:"First Name",
          label:"First Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:3,
          name:"Last Name",
          label:"Last Name",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:4,
          name:"Email",
          label:"Email",
          required:true,
          html_element:"email"
      },
      {
          fieldid:5,
          name:"Contact No",
          label:"Contact No",
          required:true,
          html_element:"textbox"
      },
      {
          fieldid:6,
          name:"Designation",
          label:"Designation",
          required:true,
          html_element:"dropdown"
      },
      {
          fieldid:7,
          name:"City",
          label:"City",
          required:true,
          html_element:"dropdown"
      }
    ],
      pid:1,
      ptype:"",
      city:"",
      empdesig:"",
      empsize:"",
      cname:"",
      fname:"",
      lname:"",
      email:"",
      contact:"",
      tenure:"",
      amount:"",
      pname:"",
      isHidden : true 
    })
    
  } catch (error) {
    console.log(error)
    alert(error)
  }
      }
    }
    console.log(this.state)             
  }
    
  render() {
    // { console.log(this.state.field) }
    return (
      <form >
        <div>
          <div>
            <Select key={this.state.pid} options={this.state.selectOption} 
            value={this.state.selectOption[this.state.pid - 1]} onChange={this.handleChange.bind(this)}/>
            {/* <h2 className='model-form-heading'>{this.state.title}</h2> */}
            {
              this.state.field.map(inputData => {
                // console.log("inputData", inputData)
                switch (inputData.html_element) {
                  case "textbox":   
                  if (inputData.name === "Company Name") {  
                    return (
                      <div>
                        <label className='modal-form-label'>{inputData.label}</label><br/>
                        <input  key={inputData.index} type={inputData.html_element} name={inputData.name} 
                         value={this.state.cname} onChange={this.cnamehandler}
                        className="model-form-data"/>
                      </div>
                    )   
                  } else if (inputData.name === "First Name") {  
                    return (
                      <div>
                        <label className='modal-form-label'>{inputData.label}</label><br/>
                        <input  key={inputData.index} type={inputData.html_element} name={inputData.name} 
                         value={this.state.fname} onChange={this.fnamehandler}
                        className="model-form-data" pattern="[A-Za-z]+"
                        title='Use only Alphabets'/>
                      </div>
                    )   
                  } else if (inputData.name === "Last Name") {  
                    return (
                      <div>
                        <label className='modal-form-label'>{inputData.label}</label><br/>
                        <input  key={inputData.index} type={inputData.html_element} name={inputData.name} 
                         value={this.state.lname} onChange={this.lnamehandler}
                        className="model-form-data" pattern="[A-Za-z]+"
                        title='Use only Alphabets'/>
                      </div>
                    )   
                  } else if (inputData.name === "Contact No") {  
                    return (
                      <div>
                        <label className='modal-form-label'>{inputData.label}</label><br/>
                        <input  key={inputData.index} type="tel" name={inputData.name} 
                         value={this.state.contact} onChange={this.contacthandler}
                        className="model-form-data" pattern="[0-9]{0,10}" 
                        title="Enter Numbers only in format eg:9999988888 contact number contains only 10 didgits"/>
                      </div>
                    )   
                  } else if (inputData.name === "Tenure") {  
                    return (
                      <div>
                        <label className='modal-form-label'>{inputData.label}</label><br/>
                        <input  key={inputData.index} type="number" name={inputData.name} 
                         value={this.state.tenure} onChange={this.tenurehandler}
                        className="model-form-data" pattern="[0-9]+" 
                        title="Use numbers"/>
                      </div>
                    )   
                  } else if (inputData.name === "Amount") {  
                    return (
                      <div>
                        <label className='modal-form-label'>{inputData.label}</label><br/>
                        <input  key={inputData.index} type="number" name={inputData.name} 
                         value={this.state.amount} onChange={this.amounthandler}
                        className="model-form-data" pattern="[0-9]+" 
                        title="Use numbers"/>
                      </div>
                    )   
                  } else if (inputData.name === "Project Name") {  
                    return (
                      <div>
                        <label className='modal-form-label'>{inputData.label}</label><br/>
                        <input  key={inputData.index} type={inputData.html_element} name={inputData.name} 
                         value={this.state.pname} onChange={this.pnamehandler}
                        className="model-form-data"/>
                      </div>
                    )   
                  } else {
                    return null
                  }
                  case "email":   return (
                    <div>
                      <label className='modal-form-label'>{inputData.label}</label><br/>
                      <input  key={inputData.index} type={inputData.html_element} name={inputData.name} 
                       value={this.state.email} onChange={this.emailhandler}
                      className="model-form-data" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                      title='Email format is example@companyname.com'/>
                    </div>
                  )
                  case "dropdown": 
                    if (inputData.name === "Property Type") {  
                      return (
                        <div>
                          <label className='modal-form-label'>Property Type</label><br/>
                          <CreatableSelect options={this.state.propertyOption} onChange={this.handleChanges.bind(this)} required/>
                        </div>       
                      )   
                    } else if (inputData.name === "Designation") {  
                      return (
                        <div>
                          <label className='modal-form-label'>Designation</label><br/>
                          <CreatableSelect options={this.state.EmpdesgOption} onChange={this.handleChanges2.bind(this)} required/>
                        </div>       
                      )   
                    } else if (inputData.name === "City") {  
                      return (
                        <div>
                          <label className='modal-form-label'>City</label><br/>
                          <CreatableSelect options={this.state.cityOption} onChange={this.handleChanges1.bind(this)} required/>
                        </div>       
                      )   
                    } else if (inputData.name === "Employee Size") {  
                      return (
                        <div>
                          <label className='modal-form-label'>Employee Size</label><br/>
                          <CreatableSelect options={this.state.EmpsizeOption} onChange={this.handleChanges3.bind(this)} required/>
                        </div>       
                      )   
                    } else {
                      return null
                    }
                  default: return null
                }
              })
            }
            <br/><center><FormGroup
                check
                inline>
                <Input type="checkbox" id='termschkbx' className='checkbox-dropd' onChange={this.checkhandle} onClick={this.checkhandle} checked={!this.state.isHidden}/>
                <Label check> I Agree to Privacy Policy </Label>
              </FormGroup></center>
            <br/><center> <input type="button" value="Send a request" className='modal-form-button' id="sub1" onClick={this.handleSubmit}/></center>
            <br /><center><h5><a className="link" href="/some/valid/uri">Already a user <span className='questionmark-dropform'>?</span></a></h5></center>
          </div>  
        </div> 
      </form>        
    )
  }
}
export default Dropd