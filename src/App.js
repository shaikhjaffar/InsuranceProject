
import NavBar from "./pages/navbar/nav"
import { Routes, Route } from 'react-router-dom'
import {React, useState, useEffect} from "react"
import About from './views/about/About'
import Blog from './views/blog'
import Stats from './views/career/index'
import Home from './views/Home'
import Product from "./views/product-page/index"
import Contactus from './views/contact/index'
import Sidebar from "./@core/components/hamburgernav/sidemenu/sidemenu"
import Payroll from './@core/components/Nested/components/Payroll'
import CF from './@core/components/Nested/components/Collateral'
import ProjectFun from './@core/components/Nested/components/Project'
import InsuranceFun from './@core/components/Nested/components/Insurance'
import LRD from './@core/components/Nested/components/LRD'
import WorkingCap from './@core/components/Nested/components/Workingcapital'
import SCF from './@core/components/Nested/components/SCFiance'
import HRm from './@core/components/Nested/components/HRMS'
import Production from './@core/components/Nested/components/Entertement'
import SalaryAdv1 from './@core/components/Nested/components/SalaryAdvance'
import ReadMore from "./views/blog/read-more/index"
function App() {
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
                  <div className="App" id="outer-container">
                  <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                  <div id="page-wrap">
                  <NavBar />
                  <Routes>
                      <Route path='/' element={<Home/>} />
                      <Route path='/product/' element={<Product/>}>
                      <Route path='payroll' element={<Payroll/>} />
                      <Route path='cf' element={<CF/>} />
                      <Route path='projectfun' element={<ProjectFun/>} />
                      <Route path='insurancefun' element={<InsuranceFun/>} />
                      <Route path='lrd' element={<LRD/>} />
                      <Route path='workingcap' element={<WorkingCap/>} />
                      <Route path='scf' element={<SCF/>} />
                      <Route path='hrm' element={<HRm/>} />
                      <Route path='production' element={<Production/>} />
                      <Route path='salaryadv' element={<SalaryAdv1/>} />
                      </Route>
                      <Route path='/blogs' element={<Blog/>}/>
                      {
              items.map((data => (
                <Route path={`/blogs/${data.slug}`} key={data.id}  element={<ReadMore/>}/>
              )))}
                  <Route path='/carrer' element={<Stats/>} />
            <Route path='/about-us' element={<About/>} />
            <Route path='/contact-us' element={<Contactus/>} />
        </Routes>
        </div>
      </div>
                )
  }
  
}

export default App