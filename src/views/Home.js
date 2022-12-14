import Product from "../pages/Product/index"
import Feature from "../pages/feature/Featuresanimation"
import About from "../pages/about/index"
import Award from "../pages/Award/Award"
import Collab from "../pages/Collab/index"
import Stats from "../pages/stats/index"
import MainPage from "../pages/MainPage/index"
import Footer from "../pages/Footer/Footer"
// import RippleButton from "../@core/components/ripple-button/index"
const Home = () => {
  return (
   <>
   <MainPage/>
   <Product/>
   <Feature/>
   <About/>
   <Award/>
   <Collab/>
   <Stats/>
   <Footer/>
   </>
  )
}

export default Home
