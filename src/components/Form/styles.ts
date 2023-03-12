import  styled  from 'styled-components';
import MaskedInput from 'react-input-mask'
import ReCAPTCHA from 'react-google-recaptcha'
import {Modal} from 'react-bootstrap'

export const Container = styled.div`
  width: 500px;
  background-color: var(--color3);
  border-radius: 5px;
  border: 10px solid var(--color4);
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  top: -10px;

  @media(max-width:1070px){
    max-width: 350px;
 }
 @media(max-width:760px){
  top: 0;
  margin:20px 0;
  max-width: 400px;
}
@media(max-width:520px){
  max-width: 350px;
}
@media(max-width:360px){
  max-width: 320px;
  border: 0;
  padding:10px;

}

`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const TitleForm = styled.h2`
  font-size: 1.3rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: 1.5rem;
  max-width: 90%;

  @media(max-width:520px){
    font-size: 1.2rem;
}
`
export const Form = styled.form`

`

export const Label = styled.label`
  font: 1.2rem;
  font-weight: 600;
  color: #ffffff;
`

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: 0;
  padding: 10px;
  border-radius: 5px;
  margin: .3rem 0 20px;
  font-size: 1rem;
`
export const InputMasked = styled(MaskedInput)`
  width: 100%;
  outline: none;
  border: 0;
  padding: 10px;
  border-radius: 5px;
  margin: .3rem 0 20px;
  font-size: 1rem;
`

export const Select = styled.select`
  width: 100%;
  outline: none; 
  border: 0;
  padding: 10px;
  border-radius: 5px;
  margin: .3rem 0 20px;
  font-size: 1rem;  

  &:hover{
    cursor: pointer;
  }
`

export const Options = styled.option`

`
export const Register = styled.button`
  height: 50px;
  width: 100%;
  border-radius: 5px;
  border: 0;
  background-color: #fff;
  font-size: 1.5rem;
  color: #266D2F;
  font-weight: bold;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    color: #b4923e;
    cursor: pointer;
  }
`
export const StyledReCAPTCHA = styled(ReCAPTCHA)`
  margin-left: 8%;


  @media(max-width:1070px){
   margin-left: 0;
 }
 @media(max-width:760px){
  margin-left: 8%;
}
@media(max-width:520px){
  margin-left: 0;
  
}
`

export const ModalStyles = styled(Modal)`
  background-color: rgba(38,109,47,0.9);
  height: 50%;
  width: 50%;
  border-radius: 20px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%,-50%);
`

export const ModalParagraph = styled.h4`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
`