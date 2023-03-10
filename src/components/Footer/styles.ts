import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: .5rem 0;
  border-top: 1px solid black;
  padding: 40px 0;
  display: flex;
  justify-content: center;

  @media(max-width:1070px){
    max-width: 990px;
 }

`

export const Logo = styled.div`

 @media(max-width:1280px){
  margin-left: 20px;
 }
 @media(max-width:760px){
  display: flex;
  justify-content: center;
  margin-left: 0;
 }

`