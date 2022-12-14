import React from "react"
import ZeeB from './ZEEB-removebg-preview.png'
import newslogo from './logo.jpg'
import business from './Businessworld_(logo).png'
import digpu from './Digpu-News-Logo.png'
import CFO from './CFO-removebg-preview.png'
import hindustan from './Hindustan_Times_Logo.png'
import indiapress from './IndiaPress-removebg-preview.png'
import "./style.css"
function Marqueee() {
    return (
        <>    
        <div className="slider">

        <a href="https://www.zeebiz.com/agencies/1-click-payroll-a-new-age-payroll-financing-solution-200339/amp"><img src={ZeeB} className="size" ></img></a>
        
        <a href="https://english.newstracklive.com/news/what-is-payroll-financing-how-can-it-benefit-growing-businesses-sc18-nu346-1251534-1.html"><img src={newslogo} className="image1" ></img></a>
                
        <a href="https://www.businessworld.in/article/What-Is-This-New-Buzz-Around-Payroll-Financing-/16-09-2022-446873/"><img src={business} className="increase" ></img></a>
        
        <a href="https://digpu.com/press-releases/cash-flow-problems-faced-by-businesses"><img src={digpu} className="image1" ></img></a>
        
        <a href="https://cfo.economictimes.indiatimes.com/news/your-payroll-funding-is-1-click-away/93129189"><img src={CFO} className="cfo" ></img></a>
        
        <a href="https://www.hindustantimes.com/brand-stories/payroll-financing-and-its-need-in-today-s-competitive-market-101664259677442.html"><img src={hindustan} className="hindu" ></img></a>
        
        <a href="https://indiapressrelease.com/featured/consequences-of-running-payroll-late-and-how-1-click-capital-can-help/"><img src={indiapress} className="image1" ></img></a>
        
        </div>
        </>
    )
}

export default Marqueee