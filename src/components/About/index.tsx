import React from 'react'
import * as C from './styles'
import BG from '../../assets/img/bg.jpeg'


function About() {
  return (
    <C.Container >
      <C.TitleAbout>Conheça a faculdade Faveni</C.TitleAbout>
      <C.BG_Container>
      <C.BG src={BG} alt="" />
      </C.BG_Container>
      <C.Paragraph>
          Venda Nova do Imigrante, localizada em um dos últimos remanescentes da Mata Atlântica, onde se encontra uma das mais ricas biodiversidades do planeta, foi a região escolhida por famílias de imigrantes europeus, que ali estruturaram suas vidas no final do século XIX.
      </C.Paragraph>
      <C.Paragraph>
          Está situado na região central serrana do Estado do Espírito Santo, distante   104 km da capital Vitória. É cortado pela BR-262, que liga Vitória (ES) a Belo Horizonte (MG) e pela ES-166 (Rodovia Pedro Cola) que liga o Município a Castelo.
      </C.Paragraph>
      <C.Paragraph>
          No ano de 2002, para atender as necessidades profissionais e educacionais da comunidade local e regional, a Faculdade Venda Nova do Imigrante – FAVENI, estabelecimento particular de Ensino Superior, mantido pelo Instituto de Educação Século XXI – EPP, foi Credenciada através da Portaria Ministerial nº 2378, de 22 de agosto de 2002 e posteriormente, Recredenciada pela Portaria nº 780, de 26 de junho de 2017.

      </C.Paragraph>
      <C.Paragraph>
          Para a oferta de cursos a distância, foi credenciada pela Portaria MEC Nº 31, 1
      </C.Paragraph>
    </C.Container>
  )
}

export default About