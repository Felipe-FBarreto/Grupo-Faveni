import React, { RefObject } from 'react'
import * as C from './styles'
import logo from  '../../assets/img/logo.svg'

interface ProdRef {
  formRef:RefObject<HTMLFormElement>
}

function Footer({formRef}:ProdRef) {

  const handleCTA = () => {
    formRef.current?.scrollIntoView({behavior:"smooth"})
  }

  return (
    <C.Container>
        <C.Email>isabella.grupofaveni@gmail.com </C.Email>
        <C.CTA onClick={handleCTA}>SAIBA MAIS</C.CTA>
      <C.Logo>
        <img src={logo} alt="Logo" />
      </C.Logo>
    </C.Container>
  )
}

export default Footer