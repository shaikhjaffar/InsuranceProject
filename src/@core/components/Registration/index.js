import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import PropTypes from 'prop-types'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Dropd from './Dropd'
import './Dropd.css'
import Register1 from './Group 86.svg'

function Register(props) {
  const { className } = props

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)


  return (
    <div className='btn-grp'>
      <img src={Register1} className="button-animate bt1" alt="Register" onClick={toggle}></img>
      <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader>
        <p>Get Registered</p>
      </ModalHeader>
      <ModalBody>
        <Dropd />
      </ModalBody>
      </Modal>
    </div>
  )
}

Register.propTypes = {
  className: PropTypes.string
}

export default Register