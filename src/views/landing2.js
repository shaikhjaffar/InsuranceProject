import {useState, useEffect} from 'react'
import App from '../@core/components/mainanimate/index'
const Hide = () => {
 const [showComponent, setShowComponent] = useState(true)
 useEffect(() => {
    setTimeout(() => {
        setShowComponent(!showComponent)
    }, 6000)
 }, [])
  return <>{showComponent && <App/> }</>
}
export default Hide