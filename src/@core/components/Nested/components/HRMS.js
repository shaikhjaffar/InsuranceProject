import React from "react"
import "./Secondpage.css"

import Button3 from './3button'
import ScrollToTop from "../../../../scroltop"
function HRMS() {
  return (
    <>
    <helmet>
  <title>Human Resources Management System, hrms |1 Click Capital</title>
   <meta name="description" content="HRMS system is a combination of software and services that deals with 360 degree of internal Human Resources functions throughout an employees work cycle."/>
<link rel="canonical" href="https://1clickcapital.com/products/1-click-human-resources-management-systems" />
<link href="/fonts/futura-md-bt.css" rel="stylesheet"></link>
  </helmet>
    <div className="main-product-page">
          <div className="heading-box">
         <span className="Common-word-product">1 Click</span><h1 className="product-name">  Human Resources Management System</h1>
         <div className="rectline1"></div>
          </div>
      <Button3/>
      <h2 className="Common-word-product2">Features of 1 Click HRMS</h2>
        <div className="rectline2"></div>
      <div className="para1-salaryadv">
        <ul>
          <li className='list-product'>Human Resources Management System or HRMS refers to a combination of software and services that deals with 360 degree of internal Human    Resources functions throughout an employees work cycle.</li>
          <li className='list-product'>1 Click Capital’s HRMS services deals with employee data management to process payroll, employee recruitment, benefits, talent management, employee attendance, employees engagement etc.. </li>
          <li className='list-product'>Our HRMS enables your organization to fully understand your workforce while simultaneously staying compliant with tax laws and labor regulation laws. It is a useful tool to help you manage a modern workforce.</li>
          <li className='list-product'>A company’s workforce is the most valuable assets of any business. We help you put together the most valuable information in front of you.</li>
          <li className='list-product'>Our most valued service 1 Click Payroll funding along with our HRMS service gives you a 360 degree human resource solution, wherein you get a line of credit to fund your payrolls on time at a low cost ROI while also the benefits of payroll processing all under one roof.</li>
        </ul>
      </div>
    </div>
    <ScrollToTop/>
    </>
  )
}

export default HRMS
