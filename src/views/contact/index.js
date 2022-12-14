import React from "react"
import "@styles/base/components/_card.scss"
// import Footer from "../../pages/Footer/Footer"
import './Contact.css'
// import Foot from './images/Group 146.svg'
import Rect1 from './images/Rectangle 123.svg'
// import Logo from './images/1 click -Logo for Light BG 4.svg'
import Instagram from './images/Instagram.png'
import Facebook from './images/Facebook.png'
import LinkedIn from './images/LinkedIn.png'
import Twitter from './images/Twitter.png'
import Form from "../../@core/components/hori-form"
import Button from "../../@core/components/button/Button"
function Contact () {
        return (
            <div className='main-footer card'>
              <Button/>
                 <Form/>
            <div className='Style11'>
               <p className='Contact-style1'>If you are looking  for speed and ease for raising capital,<br /> you have came to the right place</p>
             </div>    
             <div className='Rectangle'>
               <img  src={Rect1} alt="BigCo Inc. logo" className="footer-rectangle-top"/> 
             </div>
             <div className='rowfootor'>
               <div className='colfootor'>
                 <h2 className='colfootor-h2'>  Quick Links  </h2>
                 <a href=""> Home</a><br></br>
                 <a href="">About</a><br></br>
                 <a href="">Our Products</a>
               </div>
               <div className='colfootor'>
                 <h2 className='colfootor-h2'>  Other Links  </h2>
                 <a href=""> Privacy policy</a><br></br>
                 <a href="">Trems & Condition</a><br></br>
                 <a href="">Career</a><br></br>
                 <a href="">Contact Us</a>
               </div>
               <div className='colfootor'>
                 <h2 className='colfootor-h2'>  Our Address </h2>
                 <a href="">701-702 Wing A, Supreme Business Park,
                 Hiranandaini gardens,
                 Powai, Mumbai,
                 Maharashtra 400076</a>
               </div>
               <div className='colfootor'>
                 <h2 className='colfootor-h2'> Mail_id  </h2>
                 <a href="">contactus@1clickcapital.com</a><br></br>
                 <a href="">grievance@1clickcapital.com</a>
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
                 <a href=""><img src={Instagram} alt="BigCo Inc. logo" className='sm-logo'/></a>
               </div>
               <div className='footer-logo colfootor'>
                 <a href=""><img src={Facebook} alt="BigCo Inc. logo" className='sm-logo'/></a>
               </div>
               <div className='footer-logo colfootor'>
                 <a href=""><img src={LinkedIn} alt="BigCo Inc. logo" className='sm-logo'/></a>
               </div>
               <div className='footer-logo colfootor'>
                 <a href=''><img src={Twitter} alt="BigCo Inc. logo" className='sm-logo'/></a>
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
export default Contact