import React from 'react'
import './Secondpage.css'
import Button3 from './3button'
function Insurance() {
  return (
    <div className="main-product-page">
    <div className="heading-box">
   <span className="Common-word-product">1 Click</span><span className="product-name">  Insurance Funding</span>
   <div className="rectline1"></div>
    </div>
          <Button3/>
        <div className="para1">
   <h4>Loan against Lapsed Policy :</h4> <p>To fund the premium of policy holders whose policy has
  lapsed and to enable them to renew their lapsed policy.</p>
   <h6>Features :</h6><p>Loan tenure 3 months to 1 year 
  Assignment of policy to NBFC
  Declaration of Good Health </p>
   <h4>Loan against Existing Policy : </h4><p>To fund the future premium of policy holders whose policy
   is in existence till a percentage of their surrender value.</p>
   <h6> Features :</h6><p>Loan tenure 3 months to 1 year 
     Assignment of policy to NBFC  
     Declaration of Good Health </p>
   <h4>Loan for purchase of New Policy :</h4> <p>To fund new policy holders interested in enrolling for a new
   policy by funding finances for their premiums.</p>
    <h6>Features :</h6> <p>Loan tenure – 3 months – 1 year
Assignment of policy to NBFC
Rate of Interest – 1.25%  per month for both traditional and ULIP policies
 Processing Fee – 3% + GST</p>
      </div>
    </div>
  )
}

export default Insurance
