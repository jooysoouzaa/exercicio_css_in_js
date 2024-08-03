import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import * as S from './styles' // Certifique-se de que o caminho está correto.

type VagaType = {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const vagas: VagaType[] = [
  {
    id: '1',
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: '2',
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
  // Adicione as outras vagas aqui...
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter((x) =>
    x.titulo.toLocaleLowerCase().includes(filtro)
  )

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <S.VagasContainer>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </S.VagasContainer>
    </div>
  )
}

export default ListaVagas
