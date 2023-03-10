import styled from "styled-components";


export const BG_Container = styled.div`
  max-width: 1280px;
  margin:0 auto;
`

export const BG = styled.img`
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  padding-bottom: 80px;

  @media (max-width: 1280px) {
    padding: 20px;
  }

`;

export const TitleAbout = styled.h2`
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px 0;


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
    font-size: 1.8rem;
  }
  @media (max-width: 430px) {
    font-size: 1.5rem;
  }
`

export const Paragraph = styled.p`
  font-size:1.3rem;
  max-width: 1280px;
  margin: 30px auto 0;
  line-height: 1.3;

  @media (max-width: 430px) {
    font-size: 1.125rem;
    line-height: 1.2;
  }
`