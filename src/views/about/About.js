import {React, useEffect} from 'react'
import './about.css'
import './style.css'
import Img1 from './Leena.png'
import Img2 from './Harit.png'
import Ameet from './Ameet.png'
import Rs from './RS.png'
import Img3 from './Shoumitro.png'
import Rohit from './Rohit.png'
import "@styles/base/components/_card.scss"
import Footer from '../../pages/Footer/Footer'
// import Button from '../../@core/components/button/Button'
import ButtonsFin from './afintech.png'
import Prerak from './Prerak.png'
import Drdk from './Bhalla.png'
import Dharmendra from './Group 183dharmendra.png'
import Sachin from './sachin.png'
import Himanshu from './himanshu.png'
import Deepanshi from './deepanshi.png'
import Shivaji from './shivaji.png'
import Ankit from './ankit.png'
import Annu from './annu.png'
import Register from '../../@core/components/Registration'


function About() {
  function simpleAbout() {
    const width = window.innerWidth
    if (width < 500) {
        const nodeList = document.querySelectorAll(".about-container")
        for (let i = 0; i < nodeList.length; i++) {
          const rect = nodeList[i].getBoundingClientRect()
          const pos = rect.top.toFixed()   
          const height = window.screen.availHeight
          if (pos < height / 2  && pos > 140) {
            nodeList[i].classList.replace('not-zoom', 'in-zoom')
          } else {
            nodeList[i].classList.replace('in-zoom', 'not-zoom')
          }
        }
  }
    }
   
    useEffect(() => {
        window.addEventListener('scroll', simpleAbout)
    
        return () => {
            window.removeEventListener('scroll', simpleAbout)
        }
    }, [])
  
  return (
    <>
       <helmet>
    <title>Payroll funding and advance salary with 1 Click Payroll | 1 Click Capital</title>
    <meta name="description" content="Simplifying payroll funding and advance salary for digital India.1 Click Payroll is your one-stop destination for all your credit crises."/>
    <link rel="canonical" href="https://1clickcapital.com/about-us" />
    <link href="/fonts/futura-md-bt.css" rel="stylesheet"></link>
    </helmet>
    <Register/>
    <div className='card' id='about'>
      <div className='Alingment-aboutpage-k-liye-div'>
      <div className='text1underline'>
  <p>Our MISSION</p>
  </div>
  <div className='text2center'>
    <p>To create a business friendly way of leveraging capital to help
       individuals and institutions amid financial crises</p>
    </div>
    <img className='Buttonfin' src={ButtonsFin} alt="button"></img>
      <div className='headings-aboutus'>
        <p className='text1underline'> Breaking New Ground Every Day </p>
        <p className='text2center'> Listening to the Financial Needs of Businesses and Simplifying Payroll Funding for Digital India.</p>
      </div>
        <div className='text3Bold'>
          <p>1 Click Capital is a NBFC verified by the Reserve Bank of India. </p>
        </div>
        <div className='text2center'><p>
        Primary Office Registered: Delhi & Gurugram<br></br>
        Headquarters: Mumbai
 </p></div>

  <div className='text1underline'>
  <p>Our VISION</p>
  </div>
  <div className='text2center'>
    <p>To become one of the top fintech companies with global presence.</p>
    </div>

  <div className='advisor-heading'>
  Leadership
  </div>
  <div className='text2center'>
    <p>People Behind 1Click Capital</p>
    </div>
  </div>
    <div className='detail-about'>
    <div className='about-container not-zoom'>
      <img className='about-image' src={Img3}>
      </img>
      <p className="about-text">I have over 32 years of experience in successful Leadership roles of Managing business, P&L, Sales & Marketing, Training and HR and Board Level Experience in the Financial Services industry spanning across Insurance, Banking (Private & Consumer), Asset Management, Retail Lending, Real Estate and VC funded ventures (Hotel Management Company, Education, Green Energy and Healthcare)..
I have worked with global organization such as Aviva Life Insurance, BNP Paribas, American Express Bank, SARE Group (DUET Private Equity) and Bedrock Ventures and have an excellent track record of building new businesses to a large scale organization and driving them to significant succes
</p>
    </div>
    <div className='about-container not-zoom'>
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
    <div className='about-container not-zoom'>
      <img className='about-image' src={Img1}>
      </img>
      <p className="about-text">I gained a rich enchaining experience working in different industry verticals. I have been overseeing functioning of Information Technology, Finance, Risk Management, & Economic Intelligence. I along with my mentor created an idea of birthing a NBFC that will provide innovative never seen before services in not only India but the globe. 1 Click capital is the product of my, my family and my partners hard work and unyielding perseverance.</p>
    </div>
    <div className='about-container not-zoom'>
      <img className='about-image' src={Sachin}>
      </img>
      <p className="about-text">I am involved in both policy and operational levels. I possess the power of strong critical thinking, which can help the future progress of the company. I have the ability to evaluate the upcoming situation. My strategies enable me to ensure success for my company.
The revolution to extra-ordinary from ordinary can only happen by the hard –work of my teammates and my ideas.
</p>
    </div>
    <div className='about-container not-zoom'>
      <img className='about-image' src={Himanshu}>
      </img>
      <p className="about-text">I am an Chartered accountant by profession. After having 12 years of experience , I am specialized to provide a comprehensive range of Assurance, Taxation (Domestic and International) and has been advising on FDI matters, Corporate laws, DTAA etc. I am very well understand the field of FinTech and Robotics.</p>
    </div>
  
    <div className='about-container not-zoom'>
    <img className='about-image' src={Dharmendra}>
      </img>
      <p className="about-text">I have been working as Sales & Marketing Director with 20 plus years of experience. Excellent leadership and managerial skills, specialization in sales, commercial, marketing and promotion career in the field of BFSI. Success of achievement, developing leaders and long-term business relationships.
</p>
    </div>
    <div className='about-container not-zoom'>
      <img className='about-image' src={Shivaji}>
      </img>
      <p className="about-text">I have a Bachelors and Master’s degree in Commerce and a diploma in ICA from New Delhi. I have a demonstrated history of working in the hospitality industry. I have worked with Rooms on Call and Global Coordinate as Operations Head. I have dealt with Ministry of Civil Aviation and Airport Authority of India.</p>
    </div>
    <div className='about-container not-zoom'>
      <img className='about-image' src={Annu}>
      </img>
      <p className="about-text">I take care of planning and coordinating administrative procedures and system and devising ways to streamline processes. Overseeing and lead annual budgeting and planning process. Managing organizational cashflow and forecasting.</p>
    </div>
    <div className='about-container not-zoom'>
      <img className='about-image' src={Ankit}>
      </img>
      <p className="about-text">I am a digital marketing enthusiast with an experience in Digital Marketing and Branding, transforming the way brands interact with their customers, stakeholders, and employees leveraging technology. I hold a BBA and MBA from prestigious O. P. Jindal Global University. I have an ability to drive and lead digital initiatives of an organisation with a strong skill set, focused and ready to face challenge attitude. I have built successful digital media strategies that help built brand awareness, promote customer engagement, and drive conversions.</p>
    </div>
    <div className='about-container not-zoom'>
      <img className='about-image' src={Deepanshi}>
      </img>
      <p className="about-text">A Post Graduate from IBS Business School Mumbai, possess experience in managing and implementing HR functions. Have dealt with diverse fields such as Talent Acquisition, Performance Management, Talent Management, Compensation & Benefits, Employee Engagement, Organisation design etc. I am a committed and focused individual who can drive change, lead and develop people towards achieving the organisational goals by providing them proper support and direction at appropriate times.</p>
    </div>
    </div>
     <section className='advisor'>
  <h2 className='advisor-heading'>Advisory Board</h2>
 </section>
 <div className='detail-about'>
    <div className='about-container not-zoom'>
      <img className='about-image' src={Drdk}>
      </img>
      <p className="about-text">Served as an officer at a very prestigious Nationalised Bank (Bank of Baroda) from 1982 to 1986. So has deep knowledge and experience of banking, microcredit, capacity building and financial matters. Dr. Bhalla also served the largest Public Sector Unit, Food Corporation of India as Head of Personnel and specializes in dealing with organizational issues like recruitment, training, restructuring for efficiency and labour issues.
</p>
    </div>
    <div className='about-container not-zoom'>
    <img className='about-image' src={Rs}>
      </img>
      <p className="about-text">Is Chartered Accountant with 40+ years experience in BFSI  Segment. Executive Director and part of senior management in Bank of Baroda in India and overseas centers. Worked with Edelweiss as Advisor and also partner of Edelweiss resolution Advisors LLP.

</p>
    </div>
    
    <div className='about-container not-zoom'>
      <img className='about-image' src={Rohit}>
      </img>
      <p className="about-text">Is an alumnus of IIT, KGP and IIM, Kolkata. He is the CEO of skyllMe, and partner of PACT LLP. He was a career banker for over 2 decades and has worked with leading organizations. He has worked with several reputed BFSI companies on mission critical projects and helped them improve process efficiency and controls while reducing costs and operational risks.
.</p>
    </div>
    <div className='about-container not-zoom'>
    <img className='about-image' src={Prerak}>
      </img>
      <p className="about-text">Is presently CDO with Reliance Nippon Life Insurance Company. Previously worked with Kotak  Life and Max Life Insurance. 25+ years in General Management &   Sales & Distribution Management, Change management, efficiency enhancement and giving productivity at large scales. Core expertise in BFSI/ FMCG.

</p>
    </div>
    <div className='about-container not-zoom'>
      <img className='about-image' src={Ameet}/>
      <p className="about-text">Is an Author , Serial Entrepreneur, Speaker and International Business success Coach. He has dedicated his life in empowering business owners in building businesses which are massive wealth generating machines and would eventually run without them. He will put you in control of your business with just a few simple proven moves that will empower you to access time and financial freedom for the first time. 
</p>
    </div>
  </div>
 </div>
 <Footer/>
    </>
    
  )
}

export default About
