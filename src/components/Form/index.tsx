import React from 'react'
import * as C from './styles'
import MaskedInput from 'react-input-mask'

function Form() {
  return (
    <C.Container>
      <C.TitleForm>
        Preencha o formulário e inicie a sua
        caminhada para um futuro melhor
        </C.TitleForm>
      <C.Form>
        <C.Label>Nome:</C.Label>
        <C.Input required name='name' type='text'/>
        <C.Label>Email:</C.Label>
        <C.Input required name='email' type='email'/>
        <C.Label>DDD + WhatsApp:</C.Label>
        <C.InputMasked
          id="phone"
          mask="(99) 99999-9999"
          name='whats'
          required
        />
        <C.Label>Confime seu WhatsApp:</C.Label>
        <C.InputMasked
          id="phone"
          mask="(99) 99999-9999"
          name='confirme'
          required
        />
        <C.Label>Modalidade:</C.Label>
        <C.Select required name='option'>
        <C.Options value="" disabled selected>Selecione sua modalidade</C.Options>
          <C.Options value="graduacao">Graduação</C.Options>
          <C.Options value="posgraduacao">Pós Graduação</C.Options>
          <C.Options value="licenciatura">2° Licenciatura</C.Options>
          <C.Options value="formacaopedagogia">Formação pedagógica R2</C.Options>
        </C.Select>
        <C.Register>Cadastre-se Já</C.Register>
      </C.Form>
    </C.Container>
  )
}

export default Form