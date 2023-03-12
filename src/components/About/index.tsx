import React from 'react'
import * as C from './styles'
import BG from '../../assets/img/bg2.jpeg'


function About() {
  return (
    <C.Container >
      <C.TitleAbout>Conheça a faculdade Faveni</C.TitleAbout>
      <C.BG_Container>
      <C.BG src={BG} alt="" />
      </C.BG_Container>
      <C.Paragraph>
          É uma instituição educacional moderna, comprometida com os princípios e os valores éticos e morais com o objetivo de preservar os direitos de cidadania contribuindo para assegurar a efetiva melhoria e desenvolvimento socioeconômico da população.

      </C.Paragraph>
      <C.Paragraph>
          Ofertando ensino de alta qualidade em cursos reconhecido pelo Ministério Da Educação (MEC).
      </C.Paragraph>
      <C.Paragraph>
          Plataformas individualizadas com todos os conteúdos liberados de forma única e integral, possibilitando que o aluno crie seu próprio cronograma de estudos, realizando quando e onde quiser.
      </C.Paragraph>
      <C.Paragraph>
          Para a oferta de cursos a distância, foi credenciada pela Portaria MEC Nº 31, 1
      </C.Paragraph>
    </C.Container>
  )
}

export default About