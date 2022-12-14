import React from 'react'
import './Feature.css'
import F1 from './images/Group 159.svg'
import F2 from './images/Group 167 (1).svg'
import F3 from './images/Group 168.svg'
import F4 from './images/Group 169.svg'
import F5 from './images/Group 170.svg'
import F6 from './images/Group 171.svg'
import Rectangle from './images/rectangle.png'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const { useRef, useEffect } = React
function HeadingFeature() {
    const headingref = useRef(null)
    useEffect(() => {
        const wordmark = document.querySelector('.wordmark-title-feature')
        const tl = gsap.timeline({
            scrollTrigger: {
                // markers: true,
                trigger: document.querySelector('.container-gsap-feature'),
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
            <div class="container-gsap-feature" ref={ headingref } id="container-feature">
                <div class="wordmark-title-feature"></div>
                <div class="title-rect1-feature"></div>
                <div class="title-rect2-feature"></div>
                <img className="rectangle-titlesvg-feature" src={Rectangle} alt="BigCo Inc. logo"/>
            </div>
    )
  }
function Featuresanimation() {
    return (
        <div className="card">
            <HeadingFeature />
            <div className='Feature-main'>
             <div  className='Feature-comp'>
                <img className='Feature-image' src={F1}></img>
                <p className='Feature-text'>1 Click Capital recognizes the value of your time and resources, so we ask for minimal
                        paperwork to process your application.</p>
             </div>
             <div className='Feature-comp'>
                <img className='Feature-image' src={F2}></img>
                <p className='Feature-text'>Uncertainty is undoubtedly the most formidable 
                        foe of prepara-tion. It is our aim to bring clarity to your application within
                        48 hours of submission.</p>
             </div>
             <div className='Feature-comp'>
                <img className='Feature-image' src={F3}></img>
                <p className='Feature-text'>You can use your funds any time of the  day or night 24x7 as soon as your limit
                        is generated in the 1 Click System</p>
             </div>
             <div className='Feature-comp'>
                <img className='Feature-image' src={F4}></img>
                <p className='Feature-text'>Interest rates are as low as 1.5 percent, you just pay for the funding you use.</p>
             </div>
             <div className='Feature-comp'>
                <img className='Feature-image' src={F5}></img>
                <p className='Feature-text'>Enjoy immediate access to funds as soon as you’ve been approved.
                        All you have to do is ask for it</p>
             </div>
             <div className='Feature-comp'>
                <img className='Feature-image' src={F6}></img>
                <p className='Feature-text'>We aim to process your application within 48 hours for your convenience and ease.</p>
             </div>
            </div>
        </div>     
    )
}

export default Featuresanimation
