import styled from "styled-components";

export const Container = styled.div`
/* text-align: center; */
padding: 80px;

`

export const TitleAbout = styled.h1`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;


  &::before{
    content: "";
    height:10px;
    width: 30px;
    background-color:#b4923e;
    display: inline-block;
    margin-right: 10px;
  }

  @media (max-width: 540px) {
    font-size: 2.5rem;
  }
  @media (max-width: 485px) {
    font-size: 2rem;
  }
  @media (max-width: 430px) {
    font-size: 1.8rem;
  }
`

export const Paragraph = styled.p`
  font-size:1.3rem;
  margin-top: 30px;

  @media (max-width: 430px) {
    font-size: 1.125rem;
    line-height: 1.2;
  }
`