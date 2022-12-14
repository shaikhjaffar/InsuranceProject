
import { useEffect, useRef} from 'react'

import './style.css'
function Ball () {
   const ref = useRef(null)
   const ref1 = useRef(null)
  //  const [mousePos, setMousePos] = useState({})
  
   useEffect(() => {
    //  const handleMouseMove = (event) => {
    //    setMousePos({ x: event.clientX, y: event.clientY })
   
    //  }
 
   //   window.addEventListener('mousemove', handleMouseMove)
  //  const ball1 = ref.current
  //  const ball2 = ref1.current
  //  console.log(ball1)
  //  ball1.addEventListener('onmouseover', handleMouseMove)
  //  ball2.addEventListener('onmouseover', handleMouseMove)
     return () => {
      //  window.removeEventListener(
      //    'mousemove',
      //    handleMouseMove
      //  )
      //  ball1.removeEventListener('onmouseover', handleMouseMove)
      //  ball2.removeEventListener('onmouseover', handleMouseMove)
     }
   }, [])
   return (
    <div className="box"><b ref={ref}></b>
    <span ref={ref1}></span>
    </div>
   )
}
export default Ball