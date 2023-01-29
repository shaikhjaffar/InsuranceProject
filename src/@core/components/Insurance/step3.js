
import React, { useEffect } from "react"
import "./style.css"
// import AgreeButton from "./Next.png"
// import { useNavigate } from "react-router-dom"
// import Loan from './Application and Notice of Assignment.pdf'
import Pdf from "./pdfview"
// import NoteContext from "../../Context/noteContext"

function Step3() {
    // const navigate = useNavigate()
    useEffect(() => {
      window.scrollTo(0, 0)
       }, [])
       const Link = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  return (
    <>
          <h2 className="app-header">Application and Notice of Assignment</h2>
          <iframe src={("https://docs.google.com/viewer?url=").concat(Link, "&embedded=true")} className="pdf-frame" width="70%" height="600px" title="Application and Notice of Assignment">
</iframe>
          {/* <iframe src={Loan} className="pdf-frame" width="70%" height="600px"></iframe> */}
       {/* <img src={AgreeButton} style={{marginLeft:"40%"}} className="In-absolute-button" onClick={() => navigate('/step4')} /> */}
    </>
  )
}
export default Step3
