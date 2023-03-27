import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: .5rem 0;
  border-top: 1px solid black;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media(max-width:1070px){
    max-width: 990px;
 }

`
export const Logo = styled.div`

 @media(max-width:1280px){
  margin-left: 20px;
 }
 @media(max-width:768px){
  display: flex;
  justify-content: center;
  margin-left: 0;
 }

`

export const Email = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media(max-width:768px){
  font-size: 1rem;
 }

`

export const CTA = styled.button`
  padding: .5rem 2rem;
  border: 0;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  background-color: var(--color3);
  color: #fff;
  border-radius: 10px;
`


