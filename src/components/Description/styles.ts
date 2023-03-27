import styled from "styled-components";


export const Container = styled.div`
  max-width: 600px;
  padding-left: 1rem;
  
  @media(max-width:990px){
    max-width: 450px;
    padding-left: 3rem;
 }
 @media(max-width:850px){
    max-width: 400px;
 }
 @media(max-width:768px){
    max-width: 100%;
 }
 @media (max-width: 380px) {
    padding-left: 1rem;

  }

`

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #fff;

  @media (max-width: 380px) {
    font-size: 1.2rem;

  }
  @media (max-width: 360px) {
    font-size: 1rem;
    margin-left: .5rem;
  }
`

export const Lista = styled.ul`
  padding: 0 1rem;

@media (max-width: 380px) {
    padding: 0 2rem;
  }
`

export const ItemLista = styled.li`
  margin: 1.5rem 0 ;
  color: #fff;
  font-size: 1.2rem;
  list-style: none;
  @media (max-width: 380px) {
    font-size: 1.1rem;
  }
  @media (max-width: 360px) {
    font-size: 1rem;
  }
`