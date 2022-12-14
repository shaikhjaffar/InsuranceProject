import React from 'react'
import './about.css'
import Img1 from './Group 177leena.svg'
import Img2 from './Group 176harit.svg'
import Img3 from './Group 176.svg'
import "@styles/base/components/_card.scss"
import Footer from '../../pages/Footer/Footer'
import Button from '../../@core/components/button/Button'

function About() {
  return (
    <>
    <div className='card'>
    <Button/>
      <div className='Alingment-aboutpage-k-liye-div'>
      <div className='headings-aboutus'>
        <p className='text1underline'> Breaking New Ground Every Day </p>
        <p className='text2center'> Listening to the Financial Needs of Businesses and Simplifying Payroll Funding for Digital India.</p>
      </div>
      <div className='text3Bold'>
        <p> India’s first ever digital portal to offer payroll funding, making every business owner’s dream possible through everyday capital realities.</p>
      </div>

      <div className='text4'>
        <p>1 Click Capital is on a mission to change the way businesses in our country access the funding they need to pay their employees and sustain  their business.</p></div>
        <div className='text5'>
          <p>
          In these unprecedented times we know how difficult it is for organizations to survive and thrive; every business needs financial flexibility to adapt quickly to the rapidly changing environment and unlock full advantages of the opportunities presented to them in real time.<br></br>
          The threat of COVID grew into the MSME sector like fuel. Companies started collapsing one after another and during the same time it became difficult for banks to provide loans without prior networks. <br></br>
          We wanted to challenge the status quo of the financial market and reimagine the way lending capital and everything related to it happened in this country.<br></br>
          Our long enriched journey in the financial sector gave birth to this dream but it was the pandemic that revived us. Our thirst to solve the credit crisis in the MSME sector was finally taking shape.<br></br>
          Creating a cutting edge novel product in an unpredictable market wasn’t an easy feat but the immense bond and respect we brothers shared for each other and the expert industry advice we received from our mentors turned our dream into a reality.<br></br>
          We have since tied up with over 400 corporates and around 3750 individuals whom we have seamlessly financed and helped to revolutionize their journeys.
          </p>
        </div>
        <div className='text3Bold'>
          <p>1 Click Capital is a NBFC verified by the Reserve Bank of India. </p>
        </div>
        <div className='text2center'><p>
        Primary Office Registered: Delhi & Gurugram<br></br>
        Headquarters: Mumbai
 </p></div>
 <div className='text1underline'>
  <p>Our MISION</p>
  </div>
  <div className='text2center'>
    <p>To create a business friendly way of leveraging capital to help
       individuals and institutions amid financial crises</p>
    </div>
  <div className='text1underline'>
  <p>Our VISION</p>
  </div>
  <div className='text2center'>
    <p>To become one of the top fintech companies with global presence.</p>
    </div>

  <div className='text1underline'>
  <p>Leadership</p>
  </div>
  <div className='text2center'>
    <p>People Behind 1 Click Capital</p>
    </div>
  </div>
    <div className='detail-about'>
    <div className='about-container'>
      <img className='about-image' src={Img1}>
      </img>
      <p className="about-text">I am an Economics graduate from MDU and have an MBA in HR from
I gained a rich enchaining experience working with Aeroflot Russian Airlines and 2 years of experience
working with Jet Airways. I have been overseeing functioning of Information Technology, Finance, Risk
Management, & Economic Intelligence.

Often while talking to my clients I would hear them complain about how difficult it is at the end of every
month to gather capital to pay their staff especially when cash flow is stuck elsewhere. This made me
ponder and I wanted to come up with such a solution that will help up and coming businesses with their
financial crisis without jumping through a bunch of hoops. I along with my mentor created an idea of
birthing a NBFC that will provide innovative never seen before services in not only India but the globe.
1 Click capital is the product of my, my family and my partners hard work and unyielding perseverance.</p>
    </div>
    <div className='about-container'>
    <img className='about-image' src={Img2}>
      </img>
      <p className="about-text">I am a finance veteran with more than 2 decades of rich experience in the area of credit & underwriting,
P&L, trade finance, vehicle finance, risk management, insurance, investment banking, AMC and securities.
It has always been my dream to create a technology based lending company and then Covid came created
a huge whole in the MSME sector where credit crunch was at its highest. This presented us with an opport-
unity to work with various companies and deal with the realities of payroll funding in the market. It is my
vision to see 1 Click Capital as the globe’s leading Fintech Company.
</p>
    </div>
    <div className='about-container'>
    <img className='about-image' src={Img3}>
      </img>
      <p className="about-text">Over 32 years of experience in  successful Leadership roles of Managing business, P&L, Sales & Marketing,
Training and HR and Board Level Experience in the Financial Services industry spanning across Insurance,
Banking (Private & Consumer), Asset Management, Retail Lending, Real Estate and VC funded ventures
(Hotel Management Company, Education, Green Energy and Healthcare)..

I have worked with global organization such as Aviva Life Insurance, BNP Paribas, American Express Bank,
SARE Group (DUET Private Equity) and Bedrock Ventures and have an excellent track record of building new
businesses to a large scale organization and driving them to significant success.</p>
    </div>
    </div>
 </div>
 <Footer/>
    </>
    
  )
}

export default About
