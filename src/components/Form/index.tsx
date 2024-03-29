import React, { ChangeEvent, FormEvent, useState,useRef, RefObject } from 'react'
import * as C from './styles'
import emailjs from '@emailjs/browser'
import {ColorRing} from 'react-loader-spinner'


interface PropsRef extends React.HTMLProps<HTMLDivElement> {
  refForm:RefObject<HTMLFormElement>
  rest?:any
}

function Form({refForm,rest}:PropsRef) {
const [name,setName] = useState<string>('')
const [email,setEmail] = useState<string>('')
const [phone,setPhone] = useState<string>('')
const [confirmPhone,setConfirmForm] = useState<string>('')
const [modality,setModality] = useState<string>('')
const [loading,setLoading] = useState<boolean>(false)
const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
const [showModal, setShowModal] = useState<boolean>(false);



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
  setShowModal(true)
  // alert(`Olá ${name}, recebemos sua inscrição em breve entraremos em contato, Obrigado!`)
}
  const handleClose = () => setShowModal(false);

  return (
    <C.Container ref={refForm} {...rest}>
      <C.TitleContainer>
          <C.TitleForm>
            Preencha o formulário abaixo e venha garantir sua vaga:
          </C.TitleForm>
        </C.TitleContainer>
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
      <C.ModalStyles show={showModal} className="custom-modal">
        <C.ModalParagraph>
          Olá {name}, recebemos sua inscrição em breve entraremos em contato, Obrigado! 
        </C.ModalParagraph>
        <C.CloseModal onClick={handleClose}>Ok</C.CloseModal>
      </C.ModalStyles>
    </C.Container>
  )
}

export default Form