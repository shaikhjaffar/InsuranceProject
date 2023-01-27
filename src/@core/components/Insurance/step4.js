import React, { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import Next from './Next.png'
import Loan1 from './Absolute Assignment Deed.pdf' 
function Step4() {
    // const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
         }, [])
    return (
         <>
          <h2 className="app-header">Absolute Assignment Deed</h2>
          <iframe src={Loan1} className="pdf-frame" width="70%" height="600px"></iframe>
          {/* <link rel="import" href={Loan1}></link> */}
          {/* <embed src={Loan1}
width="70%"
height="600px"
onerror="alert('URL invalid !!');" /> */}
{/* <object data={Loan1} type="application/pdf" width="100%" height="100%">
  <p>Your web browser doesn't have a PDF plugin.
  Instead you can <a href={Loan1}>click here to
  download the PDF file.</a></p>
</object> */}
          {/* <iframe src={Loan1} width="70%" height="600px"></iframe> */}
      </>
    )
}
export default Step4
