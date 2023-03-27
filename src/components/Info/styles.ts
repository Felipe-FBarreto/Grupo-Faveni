import styled from "styled-components";


export const Container = styled.div`
  max-width: 1280px;
  margin: 3rem auto;
  padding: 4rem 1rem 1rem;
  border-bottom:1px solid #000;
  
  @media(max-width:990px){
    max-width: 90%;
    padding-left: 2rem;
    margin-top: 5rem;
    padding: 1rem;
 }

  @media(max-width:768px){
  margin-top: 1rem;
 }
 @media(max-width:680px){
    padding-left: .5rem;
    margin-bottom: 0;
 }
`

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #000;
  /* text-align: center; */
  margin-bottom: 3rem;
  display: flex;
  align-items: center;

 &::before{
  content: '';
  width: 30px;
  height: 10px;
  background-color: var(--color1);
  display: inline-block;
  margin-right: .5rem;
 }

 @media (max-width: 680px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 380px) {
    font-size: 1.2rem;
  }
  @media (max-width: 360px) {
    font-size: 1.2rem;
    margin-left: .5rem;
  }
`

export const Lista = styled.ul`
  padding: 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;


  @media(max-width:990px){
    flex-direction: column;
 }

@media (max-width: 380px) {
    padding: 0 2rem;
  }
`

export const ItemLista = styled.li`
  margin: .5rem 0 ;
  color: #000;
  font-size: 1.2rem;
  flex: 1 0 40%;
  list-style: none;

  &::before{
    content: '✓';
    color: var(--color3);
    margin-right: .2rem;
  }

  @media (max-width: 380px) {
    font-size: 1.1rem;
    
  }
  @media (max-width: 360px) {
    font-size: 1rem;
  }
`