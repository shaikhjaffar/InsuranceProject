
import Slider from 'react-slick'
import "@styles/base/components/_card.scss"
 import './collab.css'
 import { useRef, useEffect } from 'react'
 import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

import CompanyLo1 from './images/Apollo-Tyre-Logo-PNG-HD-New 1.png'
import CompanyLo2 from './images/diageasy 1.png'
import CompanyLo3 from './images/image 78.png'
// import CompanyLo4 from './images/image 79.png'
import CompanyLo5 from './images/image 82.png'
import CompanyLo6 from './images/image 83.png'
import CompanyLo7 from './images/image 85.png'
import CompanyLo8 from './images/image 87.png'
import CompanyLo9 from './images/image 88.png'
import CompanyLo10 from './images/image 90.png'
import CompanyLo11 from './images/image 92.png'
import CompanyLo12 from './images/image 93.png'
import CompanyLo13 from './images/image 95.png'
import CompanyLo14 from './images/image 96.png'
import CompanyLo15 from './images/image 97.png'
import CompanyLo16 from './images/image 99.png'
import CompanyLo17 from './images/image 100.png'
import CompanyLo18 from './images/image 101.png'
import CompanyLo19 from './images/image 102.png'
import CompanyLo20 from './images/image 103.png'
import CompanyLo21 from './images/image 104.png'
import CompanyLo22 from './images/image_105-removebg-preview.png'
import CompanyLo23 from './images/image 106 1.png'
import CompanyLo24 from './images/image_73-removebg-preview 1.png'
import CompanyLo25 from './images/image_80-removebg-preview.png'
import CompanyLo26 from './images/image_81-removebg-preview.png'
import CompanyLo27 from './images/image_84-removebg-preview.png'
import CompanyLo28 from './images/image_86-removebg-preview.png'
import CompanyLo29 from './images/image_89-removebg-preview.png'
import CompanyLo30 from './images/image_91-removebg-preview.png'
import CompanyLo31 from './images/image_94-removebg-preview.png'
import CompanyLo32 from './images/image_98-removebg-preview.png'
import CompanyLo33 from './images/mediqart 1.png'
import CompanyLo34 from './images/MUDRA 1.png'
import CompanyLo35 from './images/pngegg 1.png'

import CompanyLo36 from './images/syska 1.png'

function Collab() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              spaceBetwee:20
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
              spaceBetween: 10
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 4,
              spaceBetween: 10
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              spaceBetween: 10
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              spaceBetween:10,
              dots: false
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
  
       
            <div class="container-gsap-collab" ref={headingref} id="container-collab">
              <div class="wordmark-title-collab"></div>
            </div>
                
        )
      }
      return (
        <div className="card">
          <HeadingCollab/>
          {/* <div className='tempdiv'></div> */}
           <Slider {...settings} style={{marginTop:"4%"}}>
           <div className="comp" >
            <img  className="siz" src={CompanyLo1}/>
            </div>
            <div className="comp">
            <img className="siz" src={CompanyLo2}/>
            </div>
            <div className="comp">
            <img className="siz" src={CompanyLo12}/>
            </div>
            <div className="comp">
            <img className="siz" src={CompanyLo13}/>
            </div>
            <div className="comp" >
            <img  className="siz" src={CompanyLo14}/>
            </div>
            <div className="comp" >
            <img  className="eightimage" src={CompanyLo7}/>
            </div>
            <div className="comp">
            <img className="eightimage" src={CompanyLo8}/>
            </div>
            <div className="comp">
            <img className="sizz" src={CompanyLo6}/>
            </div>
            <div className="comp">
            <img className="sizz" src={CompanyLo9} />
            </div>
            <div className="comp">
            <img className="tenimage" src={CompanyLo10}/>
            </div>
            <div className="comp">
            <img className="siz" src={CompanyLo15}/>
            </div>
            <div className="comp">
            <img className="eighteenimage" src={CompanyLo18}/>
            </div>
            <div className="comp" >
            <img  className="twentyimage" src={CompanyLo20}/>
            </div>
            <div className="comp">
            <img className="nineteenimage" src={CompanyLo19}/>
            </div>
            <div className="comp">
            <img className="twentyoneimage" src={CompanyLo21}/>
            </div>
            <div className="comp">
            <img className="twentytwoimage" src={CompanyLo22} />
            </div>
            <div className="comp">
            <img className="twentyfiveimage" src={CompanyLo25}/>
            </div>
            <div className="comp">
            <img className="twentythreeimage" src={CompanyLo23}/>
            </div>
            <div className="comp">
            <img className="twentysiximage" src={CompanyLo26}/>
            </div>
            <div className="comp">
            <img className="twentysevenimage" src={CompanyLo27} />
            </div>
            <div className="comp">
            <img className="twentyeightimage" src={CompanyLo28}/>
            </div>
            <div className="comp">
            <img className="twentynineimage" src={CompanyLo29}/>
            </div>
            <div className="comp">
            <img className="thirtyfourimage" src={CompanyLo34}/>
            </div>
            <div className="comp" >
            <img  className="thirtyfiveimage" src={CompanyLo35}/>
            </div>
            <div className="comp" >
            <img  className="thirtysiximage" src={CompanyLo36}/>
            </div>
            <div className="comp">
            <img className="thirtyimage" src={CompanyLo30}/>
            </div>
            <div className="comp" >
            <img  className="thirtyoneimage" src={CompanyLo31}/>
            </div>
            <div className="comp">
            <img className="seventeenimage" src={CompanyLo17}/>
            </div>
            <div className="comp">
            <img className="thirtythreeimage" src={CompanyLo33}/>
            </div>
            <div className="comp">
            <img className="thirtytwoimage" src={CompanyLo32}/>
            </div>
            <div className="comp">
            <img className="sixtenimage" src={CompanyLo16} />
            </div>
            <div className="comp">
            <img className="twentyfourimage" src={CompanyLo24}/>
            </div>
            <div className="comp">
            <img className="thirdimage" src={CompanyLo3} />
            </div>            
            <div className="comp">
            <img className="sizy" src={CompanyLo5}/>
            </div>
            <div className="comp">
            <img className="image11" src={CompanyLo11}/>
            </div>
            </Slider>
            </div>
           
        
      )
}
export default  Collab
