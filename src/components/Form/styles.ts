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
 @media(max-width:768px){
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
 @media(max-width:768px){
  margin-left: 8%;
}
@media(max-width:520px){
  margin-left: 0;
  
}
`

export const ModalStyles = styled(Modal)`
  background-color: rgba(38,109,47);
  height: 50%;
  width: 50%;
  border-radius: 20px;
  padding: 0 2rem;
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%,-50%);
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

    @media(max-width:768px){
      transform: translate(-50%,150%);
      height: 60%;
      width: 60%;
  }
  
    @media(max-width:320px){
      padding: 1rem 2rem; 
    }
  
`

export const ModalParagraph = styled.h4`
  font-size: 2rem;
  color: #fff;
  text-align: center;

  @media(max-width:768px){
      font-size: 1.5rem;
  }
  @media(max-width:320px){
      font-size: 1.2rem;
  }
`

export const CloseModal = styled.button`
  padding: 0.5rem 4rem;
  border: 0;
  border-radius: 10px;
  margin: 40px auto 0 auto;
  display: block;
  font-size: 2rem;
  color: var(--color3);
  font-weight: bold;

  @media(max-width:768px){
      font-size: 1.5rem;
      margin: 20px auto 0 auto;

  }
  @media(max-width:320px){
      font-size: 1.2rem;
      padding: 0.5rem 2rem;


  }
`