import React from "react"
import './style.css'
import Payroll from './images/Payroll.png'
import Salary from './images/SalaryAdv.png'
import Insurance from './images/InsuranceFun.png'
import Project from './images/ProjectFun.png'
import LRD from './images/LRD.png'
import Working from './images/WorkingCap.png'
import CR from './images/CF.png'
import HRm from './images/HRm.png'
import SCF from './images/SCF.png'
import Production from "./images/production logo-01 1entertainment ptod.png"
import Rectangle from './images/rectangle.png'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const { useRef, useEffect } = React
  function HeadingProduct() {
    const headingref = useRef(null)
    useEffect(() => {
        const wordmark = document.querySelector('.wordmark-title-product')
        const tl = gsap.timeline({
            scrollTrigger: {
                // markers: true,
                trigger: document.querySelector('.container-gsap-product'),
                start: "top 60%",
                end: "bottom 20%",
                scrub: true,
                repeat:0
            }
        })
        tl.from(wordmark, {
          width: "0px"
        })
        tl.to(wordmark, {
          width: "300px"
        })
    }, [])
    return (
        <div class="container-gsap-product" ref={ headingref } id="container-product">
          <div class="wordmark-title-product"></div>
          <div class="title-rect1-product"></div>
          <div class="title-rect2-product"></div>
          <img className="rectangle-titlesvg-product" src={Rectangle} alt="BigCo Inc. logo"/>
        </div>
    )
  }
function Product () { 
  // const ref = useRef()
  function simple() {
    const nodeList = document.querySelectorAll(".product-content-container")
    for (let i = 0; i < nodeList.length; i++) {
      const rect = nodeList[i].getBoundingClientRect()
      const pos = rect.top.toFixed()   
      const height = window.screen.availHeight
      if (pos < height / 2  && pos > 120) {
        nodeList[i].classList.replace('zoomout', 'zoomin')
        nodeList[i].classList.replace('fadeOut', 'fadeIn')
      } else {
        nodeList[i].classList.replace('zoomin', 'zoomout')
        nodeList[i].classList.replace('fadeIn', 'fadeOut')
      }
    }
  }
  window.onscroll = function () {
    simple()
  }
        return (
        <div  className="card">
          <HeadingProduct />
         <div className="card1-div">
              <div className="product-content-container zoomout fadeOut">
                <h4 className="product-round-corners-title">Payroll</h4>
                <div className="product-round-circle">
                  <div className="product-round-circle1">
                     <img className="product-pro-image" src={Payroll} alt="BigCo Inc. logo"/>
                  </div>
                </div> 
                <p className=" product-round-corners-text">1 Click Payroll is an industry-first, low-cost, unsecured, short-term funding solution that assists corporates in meeting their payroll obligations on time.</p>
              </div>
              <div className="product-content-container zoomout fadeOut">
                <h4 className="product-round-corners-title">Salary Advance</h4>
                <div className="product-round-circle">
                  <div className="product-round-circle1">
                     <img className="product-pro-image" src={Salary} alt="BigCo Inc. logo"/>
                  </div>
                </div>
                <p className=" product-round-corners-text">It is a short-term loan usually paid back within 2 to 3 months. It gives immediate access to liquidity when an employee is in a need of contingency salary.</p>
              </div>

              <div className="product-content-container zoomout fadeOut">
                <h4 className="product-round-corners-title">Insurance Funding</h4>
                <div className="product-round-circle">
                  <div className="product-round-circle1">
                       <img className="product-pro-image" src={Insurance} alt="BigCo Inc. logo"/>
                  </div>
                </div>
                <p className=" product-round-corners-text">1 Click Insurance Funding offers loans to individuals against the surrender value of their insurance policies. It also offers loans to individuals for paying their insurance premiums.</p> 
              </div>

              <div className="product-content-container zoomout fadeOut">
                <h4 className="product-round-corners-title">Project Funding</h4>
                <div className="product-round-circle">
                  <div className="product-round-circle1">
                    <img className="product-pro-image" src={Project} alt="BigCo Inc. logo"/>
                  </div>
                </div>
                <p className=" product-round-corners-text">1 Click Capital’s Project Funding is a complete financial solution to fund your project start to end.</p>
              </div>

              <div className="product-content-container zoomout fadeOut">
                <h4 className="product-round-corners-title">L.R.D</h4>
                <div className="product-round-circle">
                  <div className="product-round-circle1">
                     <img className="product-pro-image" src={LRD} alt="BigCo Inc. logo"/>
                  </div>
                </div>

                <p className=" product-round-corners-text">With 1 Click Capitals Lease Rental Discount (LRD) get quick access to capital against your leased property with the rental receipts working as collateral. </p>
              </div>
              <div className="product-content-container zoomout fadeOut">
                <h4 className="product-round-corners-title">SCF</h4>
                <div className="product-round-circle">
                  <div className="product-round-circle1">
                      <img className="product-pro-image" src={SCF} alt="BigCo Inc. logo"/>
                  </div>
                </div>
                <p className=" product-round-corners-text">Supply Chain Financing (SCF) is a combination of technology based financing that lowers cost and improves competency for all parties involved. It funds the entire line of supply chain aspects.</p>
              </div>

              <div className="product-content-container zoomout fadeOut">
                <h4 className="product-round-corners-title">Working Capital</h4>
                <div className="product-round-circle">
                  <div className="product-round-circle1">
                      <img className="product-pro-image" src={Working} alt="BigCo Inc. logo"/>
                  </div>
                </div>
                <p  className=" product-round-corners-text">Working capital is that money used to conduct the day to day functions and operations of a business. Get funding to support the everyday requirements of day to day business.</p>
              </div>

              <div className="product-content-container zoomout fadeOut">
                <h4 className="product-round-corners-title"> MSME/SME Loan</h4>
                <div className="product-round-circle">
                  <div className="product-round-circle1">
                     <img className="product-pro-image" src={CR} alt="BigCo Inc. logo"/>
                  </div>
                </div>
                <p  className=" product-round-corners-text">1 Click Capital’s Collateral free MSME or SME loan is a credit service offered to micro, small or medium enterprises without putting down assets for collateral to raise funds.</p>
              </div>

              <div className="product-content-container zoomout fadeOut">
                <h4 className="product-round-corners-title">HRMS </h4>
                <div className="product-round-circle">
                  <div className="product-round-circle1">
                      <img className="product-pro-image" src={HRm} alt="BigCo Inc. logo"/>
                    </div>
                  </div>
                  <p  className=" product-round-corners-text">Human Resources Management System or HRMS refers to a combination of software and services that deals with 360 degree of internal Human Resources functions throughout an employees work cycle.</p>
                </div>
                <div className="product-content-container zoomout fadeOut">
                <h4 className="product-round-corners-title">E&PF</h4>
                <div className="product-round-circle">
                  <div className="product-round-circle1">
                      <img className="product-pro-image" src={Production} alt="BigCo Inc. logo"/>
                    </div>
                  </div>
                  <p  className=" product-round-corners-text">1 Click Capital’s Entertainment & Project Funding (E&PF) is a complete financial solution to fund
                    your project start to end.</p>
                </div>
              </div>
              </div>
        )
    }

export default  Product