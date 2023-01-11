import './Calendar.css'
import React, { useState, useRef}  from 'react'
// import { useNavigate } from 'react-router-dom'
import Line1 from './Calendartopline.png'
import Arrow1 from './Unionarrow - L.png'
import Arrow2 from './Unionarrow - R.png'
import Readmore from '../main/Group 207button.png'
// import Main from '../main/main'

function Calendarstyle() {
  const [data, setData] = useState([])
  const refbutton = useRef()
  // const [myMonth, setMymonth] = useState ()
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState('')
  // const navigate = useNavigate()
  const current = new Date()
  const actualMonth = "January"
  const [year, setYear] = useState(current.getFullYear())

  const [mstate] = useState([
    { id:1, name: 'January', month: '01'},
    { id:2, name: 'February', month:'02'},
    { id:3, name: 'March', month:'03'},
    { id:4, name: 'April', month:'04'},
    { id:5, name: 'May', month:'05'},
    { id:6, name: 'June', month:'06'},
    { id:7, name: 'July', month:'07'},
    { id:8, name: 'August', month:'08'},
    { id:9, name: 'September', month:'09'},
    { id:10, name: 'October', month:'10'},
    { id:11, name: 'November', month:'11'},
    { id:12, name: 'December', month:'12'}
  ])
  const date = current.getMonth() + 1
  function getMonthFromString(myMonth) {
    return new Date(Date.parse('0'.concat(myMonth, "1, 2012"))).getMonth() + 1
 }
  let first = ""
  mstate.map((ms) => { 
    if (ms.id === date) {
     first = ms.name
    }
  })
  { console.log(isLoading, err) }
  const [name, setName] = useState(first)
      const handleClick2 = async (month, year) => {
            setIsLoading(true)
            try {
              const same1 = '-01T00:01:01&before='.concat(year)
              const same2 = '-31T00:01:01'            
            const after = ''.concat(year, '-', month, same1) 
            const before = '-'.concat(month, same2) 
              const response = await fetch('https://blog.1clickcapital.com/wp-json/wp/v2/posts?after='.concat(after, before), {
                method: 'GET',
                headers: {
                  Accept: 'application/json'
                }
              })
        
              if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`)
              }
              const result = await response.json()
              setData(result)
            } catch (err) {
              setErr(err.message)
            } finally {
              setIsLoading(false)
            }
        }
  return (
      <>
      <div className='col-of-calendar'>
        <div className='button-container'>
          <img className="Arrow-Line-Imagel " onClick={() => {
             const actualMonth = getMonthFromString(refbutton.current.innerText)
               if (year > 2022) {
                setYear(year - 1)
                   handleClick2(actualMonth, year)
               }
             
          }} src={Arrow1}/>
          <button   className='Button-of-Calendar'>{year}</button>
          <img className="Arrow-Line-Imager " src={Arrow2} onClick={() => {
            if (year < current.getFullYear()) {
              setYear(year + 1)
                handleClick2(actualMonth, year)
            }
          }}/>
        </div>
        
        <img className="Calendar-Line-Image" src={Line1} />
      </div>
      <div className='col-of-calendar2'>
        <div className='button-container'>
          <img className="Arrow-Line-Imagel" src={Arrow1} 
            onClick={() => {
              if (name === "January") {
                setName("December")
                handleClick2('12', year)
              } else if (name === "February") {
                setName("January")
                handleClick2('01', year)
              } else if (name === "March") {
                setName("February")
                handleClick2('02', year)
              } else if (name === "April") {
                setName("March")
                handleClick2('03', year)
              } else if (name === "May") {
                setName("April")
                handleClick2('04', year)
              } else if (name === "June") {
                setName("May")
                handleClick2('05', year)
              } else if (name === "July") {
                setName("June")
                handleClick2('06', year)
              } else if (name === "August") {
                setName("July")
                handleClick2('07', year)
              } else if (name === "September") {
                setName("August")
                handleClick2('08', year)
              } else if (name === "October") {
                setName("September")
                handleClick2('09', year)
              } else if (name === "November") {
                setName("October")
                handleClick2('10', year)
              } else if (name === "December") {
                setName("November")
                handleClick2('11', year)
              }
                }}/>
          <button className='Button-of-Calendar2 ' ref={refbutton}>{name}</button>
          <img className="Arrow-Line-Imager" src={Arrow2}
            onClick={() => {
              if (name === "January") {
                setName("February")
                handleClick2('02', year)
              } else if (name === "February") {
                setName("March")
                handleClick2('03', year)
              } else if (name === "March") {
                setName("April")
                handleClick2('04', year)
              } else if (name === "April") {
                setName("May")
                handleClick2('05', year)
              } else if (name === "May") {
                setName("June")
                handleClick2('06', year)
              } else if (name === "June") {
                setName("July")
                handleClick2('07', year)
              } else if (name === "July") {
                setName("August")
                handleClick2('08', year)
              } else if (name === "August") {
                setName("September")
                handleClick2('09', year)
              } else if (name === "September") {
                setName("October")
                handleClick2('10', year)
              } else if (name === "October") {
                setName("November")
                handleClick2('11', year)
              } else if (name === "November") {
                setName("December")
                handleClick2('12', year)
              } else if (name === "December") {
                setName("January")
                handleClick2('01', year)
              }
                }}/>
        </div>
        <div className='Month-names-Left'>
        <h4 className='Month-Name'onClick={() => mstate.map((ms) => { if (ms.id === 1) setName(ms.name); handleClick2('01', year) })}>Jan</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 2) setName(ms.name); handleClick2('02', year) })}>Feb</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 3) setName(ms.name); handleClick2('03', year)  })}>Mar</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 4) setName(ms.name); handleClick2('04', year)  })}>Apr</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 5) setName(ms.name); handleClick2('05', year)  })}>May</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 6) setName(ms.name); handleClick2('06', year)  })}>Jun</h4>
        </div>
        <div className='Month-names-Right'>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 7) setName(ms.name); handleClick2('07', year)  })}>Jul</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 8) setName(ms.name); handleClick2('08', year)  })}>Aug</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 9) setName(ms.name); handleClick2('09', year)  })}>Sep</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 10) setName(ms.name); handleClick2('10', year)  })}>Oct</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 11) setName(ms.name); handleClick2('11', year)  })}>Nov</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 12) setName(ms.name); handleClick2('12', year)  })}>Dec</h4>
        </div>
        <div className='Month-names-mLeftt'>
        <h4 className='Month-Name'onClick={() => mstate.map((ms) => { if (ms.id === 1) setName(ms.name); handleClick2('01', year) })}>Jan</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 2) setName(ms.name); handleClick2('02', year) })}>Feb</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 3) setName(ms.name); handleClick2('03', year)  })}>Mar</h4>
        </div>
        <div className='Month-names-mRightt'>
        <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 7) setName(ms.name); handleClick2('07', year)  })}>Jul</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 8) setName(ms.name); handleClick2('08', year)  })}>Aug</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 9) setName(ms.name); handleClick2('09', year)  })}>Sep</h4>
        </div>
        <img className="Calendar-Line-Image2" src={Line1}/>
        <div className='Month-names-mLeftb'>
        <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 4) setName(ms.name); handleClick2('04', year)  })}>Apr</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 5) setName(ms.name); handleClick2('05', year)  })}>May</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 6) setName(ms.name); handleClick2('06', year)  })}>Jun</h4>
        </div>
        <div className='Month-names-mRightb'>
        <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 10) setName(ms.name); handleClick2('10', year)  })}>Oct</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 11) setName(ms.name); handleClick2('11', year)  })}>Nov</h4>
          <h4 className='Month-Name' onClick={() => mstate.map((ms) => { if (ms.id === 12) setName(ms.name); handleClick2('12', year)  })}>Dec</h4>
        </div>
      </div>  
     
     {/* {data.length === 0 ? setIsLoading(true) : setIsLoading(false)} */}
    {data.length !== 0 ? data.map((blogs) => ( 
          <div className="content-head" key={blogs.id} >
          <img className="blog-image-head"  src={blogs.yoast_head_json.og_image[0].url}></img>
        <div className="blog-head-container">
          <h1 className="blog-title-head">
           {blogs.title.rendered}
          </h1>
          <div  className="blog-content-head" dangerouslySetInnerHTML={ {__html:blogs.excerpt.rendered.replace('[&hellip;]', '')} } />
          <a key={blogs.id} href={blogs.link}><img src={Readmore} className="read-blog-head"></img>
      </a>
        </div>
     </div>
        )
      ) : <></>} 
      </>
  )
}

export default Calendarstyle