import React from 'react'
import './Secondpage.css'
import Button3 from './3button'
import ScrollToTop from '../../../../scroltop'
function Project() {
  return (
    <>
     <helmet>
 <title>Project funding for financial services |1 Click Capital</title>
  <meta name="description" content="With 1 Click Capital’s finance for project funding you can choose easy way to get your finance for project funded"/>
  <link rel="canonical" href="https://1clickcapital.com/products/1-click-project-funding" />
  <link href="/fonts/futura-md-bt.css" rel="stylesheet"></link>
 </helmet>
    <div className="main-product-page">
    <div className="heading-box">
   <span className="Common-word-product">1 Click</span><h1 className="product-name">  Project Funding</h1>
   <div className="rectline1"></div>
    </div>
       <Button3/>
       <h2 className="Common-word-product2">Features of 1 Click Project Funding</h2>
        <div className="rectline2"></div>
    <div className="para1-salaryadv">
      <ul>
        <li className='list-product'> 1 Click Capital’s Project Funding is a complete financial solution to fund your project start to end.</li>
        <li className='list-product'>This kind of funding is a long term funding,where the debt used to finance the project is paid back from the cash flow generated by the project.</li>
        <li className='list-product'>Project Financing is ideal for ventures requiring huge amount of equity and debt.</li>
        <li className='list-product'>PF loan structure relies mainly on the project’s cash flow for its repayment strategy.</li>
        <li className='list-product'>Project funding is the means by which the money required to undertake a project, or program is secured and then made available as required.</li>
      </ul>
    </div>
    </div>
    <ScrollToTop/>
    </>
  )
}

export default Project