
import {React, useState } from "react"

import Calendar from '../calendar/Calendarstyledemo'
import SearchMain from "./searchmain"
// import Calendar from './Calendarstyledemo'
export default function Bloghead () {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState('')

  const [message, setMessage] = useState(null)
  const handleClick = async (event) => {
    if (event.key === 'Enter') {
      setIsLoading(true)
    try {
      const response = await fetch('https://blog.1clickcapital.com/wp-json/wp/v2/search?search='.concat(message), {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`)
      }
      const result = await response.json()
      console.log('result is: ', JSON.stringify(result, null, 4))
      console.log('https://blog.1clickcapital.com/wp-json/wp/v2/search?search='.concat(message))
      console.log(message)
      setData(result)
    } catch (err) {
      setErr(err.message)
    } finally {
      setIsLoading(false)
    }
    }
  }
  const handleClick1 = (event) => {
    if (event.target.value.length <= 1) {
      if (event.key === "Enter") {
        setMessage(null)
        handleClick(event)
      }
    } else {
        setMessage(event.target.value)
       handleClick(event)
       console.log(data)
    }
  }
    return (
      <>
         <div className="search-section">
            <input className="search" type="text" placeholder="Search here" onKeyDown={handleClick1}/>
            <span className="searchicon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg></span>
            </div>
            <Calendar/>
            {err & <h2>{err}</h2>}
             {isLoading && <h2>Loading...</h2>}
             {
              data.map((blogs) => (
                <SearchMain id={blogs.id}/>
              )
              )
              }
      </>

)
  
}
    //     return (
    //        <>
    //     {/* {isLoading && <h2>Loading...</h2>} */}
    //         {items.map(items => {
    //     return (
    //       <div className="content-head" key={items.id} >
    //     <div className="blog-head-container">
  
    //     <h1 className="blog-title-head" onClick={() => navigate("/items/".concat(items.title).replaceAll(' ', '-')) & window.location.reload(false)}>
    //              {items.title}
    //             </h1>
    //       <div  className="blog-content-head" dangerouslySetInnerHTML={ {__html:items.excerpt.rendered.replace('[&hellip;]', '')} } />
    //       <button className="read-blog-head">
    //            <Link
    //              to={items.slug} key={items.id}>Read More</Link>
    //       </button>
    //     </div>
    //  </div>
    //     )
    //   })}
    //         </>
    //         )
    //         } 

    // function mainContent()  {
   
    //   if (error) {
    //     return <div>Error: {error.message}</div>
    //   } else if (!isLoaded) {
    //     return <div>Loading...</div>
    //   } else {
    //     return (
    //       items.map(items => (<div className="content-head" key={items.id} >
    //       <img className="blog-image-head"  src={items.id !== 1268 ? items.yoast_head_json.og_image[0].url : image1 } alt='image'></img>
    //     <div className="blog-head-container">
    //       <h1 className="blog-title-head">
    //        {items.title.rendered}
    //       </h1>
    //       <div  className="blog-content-head" dangerouslySetInnerHTML={ {__html:items.excerpt.rendered.replace('[&hellip;]', '')} } />
    //       <button className="read-blog-head">
    //            <Link
    //              to={items.slug} key={items.id}>Read More</Link>
    //       </button>
    //     </div>
    //  </div>)
    // )
    // )
    //   }
    // }