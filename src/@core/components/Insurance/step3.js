
import React, { useContext, useEffect } from "react"
import "./style.css"
// import AgreeButton from "./Next.png"
// import { useNavigate } from "react-router-dom"
import Loan from './Application and Notice of Assignment.pdf'
import NoteContext from "../../Context/noteContext"

function Step3() {
    // const navigate = useNavigate()
    useEffect(() => {
      window.scrollTo(0, 0)
       }, [])
   const a = useContext(NoteContext)
  return (
    <>
          <h2 className="app-header">Application and Notice of Assignment</h2>
          <h2>{a.s1.name}</h2>
          <iframe src={Loan} className="pdf-frame" width="70%" height="600px"></iframe>
       {/* <img src={AgreeButton} style={{marginLeft:"40%"}} className="In-absolute-button" onClick={() => navigate('/step4')} /> */}
    </>
  )
}
export default Step3
