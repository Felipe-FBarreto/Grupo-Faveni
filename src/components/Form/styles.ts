import  styled  from 'styled-components';
import MaskedInput from 'react-input-mask'

export const Container = styled.div`
  width: 400px;
  background-color: #266D2F;
  border-radius: 5px;
  border: 10px solid #468C4F;
  padding: 20px 10px;
  position: relative;
  top: -30px;
`
export const TitleForm = styled.h2`
  font-size: 1.3rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: 1.5rem;
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
  margin-top: 60px;

  &:hover{
    color: #b4923e;
    cursor: pointer;
  }
`