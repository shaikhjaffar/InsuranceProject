
import NavBar from "./pages/navbar/nav"
import { Routes, Route } from 'react-router-dom'
import {React} from "react"
import About from './views/about/About'
import Blog from './views/blog'
import Stats from './views/career/index'
import Home from './views/Home'
import Product from "./views/product-page/index"
import Contactus from './views/contact/index'

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
import PagenotFound from "./pages/PageNotFound/norfound"
import Policy from './views/policy/Policy'
import FAQ from './views/FAQ/FAQ'
import NavigateButton from "./@core/components/navigateButton"
import Ball from "./@core/components/ball"
import ScrollToTop from "./scroltop"
function App() {
    return (
      <>          
                  <NavBar />
                  <Ball/>
                  <NavigateButton/>
                  <Routes>
                      <Route path='/' element={<Home/>} />
                       <Route path='/privacy-policy' element={<Policy/>} />
                       <Route path='faqs' element={<FAQ/>} />
                      <Route path='/products/' element={<><Product/><ScrollToTop/></>}>
                      <Route path='1-click-payroll' element={<Payroll/>} />
                      <Route path='1-click-collateral-free-msme' element={<CF/>} />
                      <Route path='1-click-project-funding' element={<ProjectFun/>} />
                      <Route path='1-click-insurance-funding' element={<InsuranceFun/>} />
                      <Route path='1-click-lease-rental-discounting' element={<LRD/>} />
                      <Route path='1-click-working-capital' element={<WorkingCap/>} />
                      <Route path='1-click-supply-chain-financing' element={<SCF/>} />
                      <Route path='1-click-human-resources-management-systems' element={<HRm/>} />
                      <Route path='1-click-entertainment-and-production-financing' element={<Production/>} />
                      <Route path='1-click-salary-advance' element={<SalaryAdv1/>} />
                      </Route>
                      <Route path='/blogs' element={<Blog/>}/>
                 <Route path='*' element={<PagenotFound />}/>
                  <Route path='/career' element={<Stats/>} />
            <Route path='/about-us' element={<About/>} />
            <Route path='/contact-us' element={<Contactus/>} />
        </Routes>
        <ScrollToTop/>
      </>
   )
  }
  
export default App