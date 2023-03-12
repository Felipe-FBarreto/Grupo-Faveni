import React from 'react'
import * as C from './styles'
function Description() {

  return (
    <C.Container>
      <C.Title>DESCONTOS EXCLUSIVOS PARA NOVAS MATRÍCULAS FEITAS PELO WHATSAPP
    </C.Title>
      <C.Lista>
        <C.ItemLista>São 15 opções de 2° Licenciatura com conclusão a partir de 6 meses e mensalidades a partir de 109,90
    </C.ItemLista>
        <C.ItemLista>Reconhecidos e credenciados pelo MEC com nota máxima (5)</C.ItemLista>
        <C.ItemLista>Tutores mestres e doutores na área que lecionam, disponíveis de segunda a sexta para tirar dúvidas</C.ItemLista>
        <C.ItemLista>Em Pós Graduação temos mais de 1000 opções com certificação em no mínimo 6 meses, a partir de apenas 59,90 mensais. 
    </C.ItemLista>
        {/* <C.ItemLista>➡️ Clica em saiba mais e cadastre-se para mais informações e conseguir sua vaga com desconto exclusivo</C.ItemLista>      */}
      </C.Lista>
    </C.Container>
  )
}

export default Description