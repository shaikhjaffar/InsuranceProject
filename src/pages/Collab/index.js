
import Slider from 'react-slick'
import "@styles/base/components/_card.scss"
 import './collab.css'
 import { useRef, useEffect } from 'react'
 import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
//  import Heading from "../../@core/components/headingeffect"
import CompanyLo1 from './images/image001.png'
import CompanyLo2 from './images/image002.png'
import CompanyLo3 from './images/image003.png'
import CompanyLo4 from './images/image004.png'
import CompanyLo5 from './images/image005.png'
import CompanyLo6 from './images/image006.png'
// import Rectangle from './images/rectangle.png'
function Collab() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 6,
              infinite: true,
              spaceBetwee:30,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              spaceBetween: 15
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              spaceBetween: 15
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              spaceBetween: 20
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              spaceBetween: 30
            }
          }
        ]
      }
      function HeadingCollab() {
        const headingref = useRef(null)
        useEffect(() => {
            const wordmark = document.querySelector('.wordmark-title-collab')
            const tl = gsap.timeline({
                scrollTrigger: {
                    // markers: true,
                    trigger: document.querySelector('.container-gsap-collab'),
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
                width: "500px"
              })
        }, [])
        return (
          // <div>
          //   <img className="rectangle-titlesvg-collab" src={Rectangle} alt="BigCo Inc. logo"/>
            <div class="container-gsap-collab" ref={headingref} id="container-collab">
              <div class="wordmark-title-collab"></div>
              <div class="title-rect1-collab"></div>
              <div class="title-rect2-collab"></div>
            </div>
          // </div>         
        )
      }
      return (
        <div className="card">
          <HeadingCollab/>
           <Slider {...settings} style={{marginTop:"-1%"}}>
            <div className="comp" >
            <img  className="siz" src={CompanyLo1} alt="BigCo Inc. logo"/>
            </div>
            <div className="comp">
            <img className="siz" src={CompanyLo2} alt="BigCo Inc. logo"/>
            </div>
            <div className="comp">
            <img className="siz" src={CompanyLo3} alt="BigCo Inc. logo" />
            </div>
            <div className="comp">
            <img className="siz" src={CompanyLo4} alt="BigCo Inc. logo"/>
            </div>
            <div className="comp">
            <img className="sizy" src={CompanyLo5} alt="BigCo Inc. logo"/>
            </div>
            <div className="comp">
            <img className="sizz" src={CompanyLo6} alt="BigCo Inc. logo"/>
            </div>
            </Slider>
            </div>
           
        
      )
}
export default  Collab
