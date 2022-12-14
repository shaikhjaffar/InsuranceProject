
import "./style.css"
import Content from "./main/main"
import Search from './search/index'

const Blog = () => {
    return (
      <div className="blog card">
        <section className="search-calendar">
        <Search/>
        </section>
         <section className="main">
         <Content/>
         </section>
        
      </div>
    )
  }

export default Blog
