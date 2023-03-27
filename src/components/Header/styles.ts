import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: .5rem 0;

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