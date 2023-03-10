import React, { ChangeEvent, FormEvent, useState } from 'react'
import * as C from './styles'
import emailjs from '@emailjs/browser'
import {ColorRing} from 'react-loader-spinner'


function Form() {
const [name,setName] = useState<string>('')
const [email,setEmail] = useState<string>('')
const [phone,setPhone] = useState<string>('')
const [confirmPhone,setConfirmForm] = useState<string>('')
const [modality,setModality] = useState<string>('')
const [loading,setLoading] = useState<boolean>(false)
const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

const handleChangeReCAPTCHA = (value:string | null) => {
  if(value){
    setIsRecaptchaVerified(true)
  }
}

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
   e.preventDefault()

    if(!isRecaptchaVerified){
      alert("Por favor, resolva o reCAPTCHA antes de enviar o formulario")
      return
    }

  const templateParams = {
    name,
    email,
    phone,
    confirmPhone,
    modality
  }

  setLoading(true)
  emailjs.send("service_o5dr4xb", "template_we8knos", templateParams,"VD3d76SjVCfyNLYeO").then((response)=>{
    console.log("Email Enviado",response.status,response.text)
    setLoading(false)
    setName('')
    setEmail(''),
    setPhone(''),
    setConfirmForm(''),
    setModality('')
  },(err)=>{
    console.error("Error:", err);
    
  })
}

  return (
    <C.Container>
      <C.TitleForm>
        Preencha o formulário e inicie a sua
        caminhada para um futuro melhor
        </C.TitleForm>
      <C.Form onSubmit={handleSubmit}>
        <C.Label>Nome:</C.Label>
        <C.Input required name='name' type='text' value={name} onChange={(e:ChangeEvent<HTMLInputElement>)=> setName(e.target.value)}/>
        <C.Label>Email:</C.Label>
        <C.Input required name='email' type='email' value={email} onChange={(e:ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)}/>
        <C.Label>DDD + WhatsApp:</C.Label>
        <C.InputMasked
          id="phone"
          mask="(99) 99999-9999"
          name='whats'
          required
          value={phone}
          onChange={(e:ChangeEvent<HTMLInputElement>)=> setPhone(e.target.value)}
        />
        <C.Label>Confime seu WhatsApp:</C.Label>
        <C.InputMasked
          id="phone"
          mask="(99) 99999-9999"
          name='confirme'
          required
          value={confirmPhone}
          onChange={(e:ChangeEvent<HTMLInputElement>)=> setConfirmForm(e.target.value)}

        />
        <C.Label>Modalidade:</C.Label>
        <C.Select required name='option' value={modality} onChange={(e:ChangeEvent<HTMLSelectElement>)=> setModality(e.target.value)}>
        <C.Options value="" disabled selected>Selecione sua modalidade</C.Options>
          <C.Options value="graduacao">Graduação</C.Options>
          <C.Options value="posgraduacao">Pós Graduação</C.Options>
          <C.Options value="licenciatura">2° Licenciatura</C.Options>
          <C.Options value="formacaopedagogia">Formação pedagógica R2</C.Options>
        </C.Select>

        <C.StyledReCAPTCHA sitekey='6LdqlukkAAAAAEnx_lV0PZVMpKnz2SuDvuOTLz9V' security='6LdqlukkAAAAAKcISauX_NmjgqI9a2P2lj-U5BBs' onChange={handleChangeReCAPTCHA}></C.StyledReCAPTCHA>

        <C.Register>{loading ? <ColorRing colors={['#266D2F','#266D2F','#266D2F','#266D2F','#266D2F']} height='40' width='40'  /> : 'Quero saber mais'}</C.Register>
      </C.Form>
    </C.Container>
  )
}

export default Form