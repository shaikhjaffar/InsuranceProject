import {React, useState, useEffect} from "react"
import { Link} from 'react-router-dom'
import image1 from '../calendar/Calendartopline2.png'
 function mainContent()  {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch("https://blog.1clickcapital.com/wp-json/wp/v2/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result)
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
      items.map(blogs => (<div className="content-head" key={blogs.id} >
      <img className="blog-image-head"  src={blogs.id !== 1268 ? blogs.yoast_head_json.og_image[0].url : image1 } alt='image'></img>
    <div className="blog-head-container">
      <h1 className="blog-title-head">
       {blogs.title.rendered}
      </h1>
      <div  className="blog-content-head" dangerouslySetInnerHTML={ {__html:blogs.excerpt.rendered.replace('[&hellip;]', '')} } />
      <button className="read-blog-head">
           <Link
             to={blogs.slug} key={blogs.id}>Read More</Link>
      </button>
    </div>
 </div>)
)
)
  }
}
 export default mainContent
