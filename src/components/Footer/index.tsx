import React from 'react'
import * as C from './styles'
import logo from  '../../assets/img/logo.svg'


function Footer() {
  return (
    <C.Container>
      <C.Logo>
        <img src={logo} alt="Logo" />
      </C.Logo>
    </C.Container>
  )
}

export default Footer