import React from "react"
import './Award.css'
import Award1 from './images/IACAward.png'
import Award2 from './images/BusinessMint.png'
import LogoHolder from './images/LogoHolder.png'
import Rectangle from './images/rectangle.png'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const { useRef, useEffect } = React
function HeadingAward() {
    const headingref = useRef(null)
    useEffect(() => {
        const wordmark = document.querySelector('.wordmark-title-award')
        const tl = gsap.timeline({
            scrollTrigger: {
                // markers: true,
                trigger: document.querySelector('.container-gsap-award'),
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
            <div class="container-gsap-award" ref={ headingref } id="container-award">
                <div class="wordmark-title-award"></div>
                <div class="title-rect1-award"></div>
                <div class="title-rect2-award"></div>
                <img className="rectangle-titlesvg-award" src={Rectangle} alt="BigCo Inc. logo"/>
            </div>
    )
  }
class Award extends React.Component {
    render() {
        return (
        <div className="card">
            <HeadingAward />
            <span className="header">
                <h2 className="header-heading">Best Fintech Startup of the year 2022</h2>
            </span>
            <div className="award-main-container">
                <span className="award-row">
                    <div className="award-column">
                    <div className='container1'>
                            <img className='logoholder' src={LogoHolder} alt="Logo holder"/>
                            <img className='imagesize' src={Award1} alt="BigCo Inc. logo"/>
                        </div>
                    </div>
                    <div className="award-column">
                        <div className='container1'>
                            <img className='logoholder' src={LogoHolder} alt="Logo holder"/>
                            <img className='imagesize' src={Award2} alt="BigCo Inc. logo"/>
                        </div>
                    </div>
                </span>
            </div>
        </div>
        )
    }
}
export default  Award