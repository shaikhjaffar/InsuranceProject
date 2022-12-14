import React from 'react'
// import Foot from './images/Group 146.svg'
import Rect1 from './images/Rectangle 123.svg'
import Logo from './images/1 click -Logo for Light BG 4.svg'
import Instagram from './images/Instagram.png'
import Facebook from './images/Facebook.png'
import LinkedIn from './images/LinkedIn.png'
import Twitter from './images/Twitter.png'
import './Footer.css'
import { NavLink } from 'react-router-dom'
// import "@styles/base/components/_card.scss"
// import Marquee from '../../@core/components/marquee/index'
// import Marqueee from '../../@core/components/marquee/index'

function Footer() {
  return (
         <div className='main-footer card'>
       <div className='Cir'>
       <img src={Logo} alt="imagelogo" className='logoimg'></img></div> 
       {/* <Marqueee/> */}
       <div className='Style11'>
          <p className='footer-style1'>If you are looking  for speed and ease for raising capital,<br /> you have came to the right place</p>
        </div>    
        <div className='Rectangle'>
          <img  src={Rect1} alt="BigCo Inc. logo" className="footer-rectangle-top"/> 
        </div>
        <div className='rowfootor'>
          <div className='colfootor'>
            <h2 className='colfootor-h2'>  Quick Links  </h2>
            <a href="#home"> Home</a><br></br>
            <a><NavLink
            exact
               to="/about-us">About
              </NavLink></a><br></br>
            <a ><NavLink
            exact
               to="/product/payroll">Our Product
              </NavLink></a>
          </div>
          <div className='colfootor'>
            <h2 className='colfootor-h2'>  Other Links  </h2>
            <a href=""> Privacy policy</a><br></br>
            <a href="">Trems & Condition</a><br></br>
            <a><NavLink
            exact
               to="/carrer">Career
              </NavLink></a><br></br>
            <a ><NavLink
            exact
               to="/contact-us">Contact us
              </NavLink></a>
          </div>
          <div className='colfootor'>
            <h2 className='colfootor-h2'>  Our Address </h2>
            <a href="https://www.google.com/maps/place/1+Click+Capital/@19.1113219,72.9080361,15z/data=!4m5!3m4!1s0x0:0xe932828b9f7ade92!8m2!3d19.1113219!4d72.9080361">701-702 Wing A, Supreme Business Park,
            Hiranandaini gardens,
            Powai, Mumbai,
            Maharashtra 400076</a>
          </div>
          <div className='colfootor'>
            <h2 className='colfootor-h2'> Mail_id  </h2>
            <a href="mailto:contactus@1clickcapital.com">contactus@1clickcapital.com</a><br></br>
            <a href="mailto:grievance@1clickcapital.com">grievance@1clickcapital.com</a>
          </div>
          <div className='colfootor contactno'>
            <h2 className='colfootor-h2'>  Contact Number  </h2>
            <a href=""> 180 0532 5200</a>
          </div>
        </div>
        <div className='Rectangle'>
          <img className='footer-rectangle-bottom' src={Rect1} alt="BigCo Inc. logo"/>  
        </div>
        <div className='footer-logo-sm rowfootor'>
          <div className='footer-logo colfootor'>
            <a href="https://www.instagram.com/1clickcapital/"><img src={Instagram} alt="BigCo Inc. logo" className='sm-logo'/></a>
          </div>
          <div className='footer-logo colfootor'>
            <a href=" https://www.facebook.com/1clickcapital"><img src={Facebook} alt="BigCo Inc. logo" className='sm-logo'/></a>
          </div>
          <div className='footer-logo colfootor'>
            <a href="https://www.linkedin.com/company/1-click-capital/mycompany/"><img src={LinkedIn} alt="BigCo Inc. logo" className='sm-logo'/></a>
          </div>
          <div className='footer-logo colfootor'>
            <a href='https://twitter.com/1clickcapital
'><img src={Twitter} alt="BigCo Inc. logo" className='sm-logo'/></a>
          </div>
        </div>
          <div className='Style1'>
          <div className='smallrect'></div>
          </div>
          <div className='Style1'>
            <p className="footer-style1">Copyright @ 2022 1 click Capital. All Rights Reserved Powered by C H P FINANCE PRIVATE LIMITED</p>
          </div>
          {/* <div className='Style1'>
          <div className='smallcircle'></div>
          </div> */}
          {/* <div className='Style1'>
          <img  className="Footimageplace" src={Foot} alt="BigCo Inc. logo"/>
          </div> */}
        </div> 
  
  )
}
export default Footer
