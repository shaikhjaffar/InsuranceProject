import {React, useState, useEffect} from "react"
import { Link} from 'react-router-dom'
import image1 from '../calendar/Calendartopline2.png'
import  Id from './index'
 export default function searchMain(props)  {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  
  useEffect(() => {
    console.log(props)
    fetch("https://blog.1clickcapital.com/wp-json/wp/v2/posts/".concat(props.id))
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result)
          console.log(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="content-head" key={items.id} >
      <img className="blog-image-head"  src={ items.yoast_head_json.og_image[0].url === undefined ? image1 : items.yoast_head_json.og_image[0].url } alt='image'></img>
    <div className="blog-head-container">
      <h1 className="blog-title-head">
       {items.title.rendered}
      </h1>
      <div  className="blog-content-head" dangerouslySetInnerHTML={ {__html:items.excerpt.rendered.replace('[&hellip;]', '')} } />
      <button className="read-blog-head">
           <Link
             to={items.slug} key={items.id}>Read More</Link>
      </button>
    </div>
 </div>

)
  }
}