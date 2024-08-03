import { FormEvent, useState } from 'react'
import * as S from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas: React.FC<Props> = ({ aoPesquisar }) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <S.Form onSubmit={aoEnviarForm}>
      <S.Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTermo(e.target.value)
        }
      />
      <S.BtnPesquisar type="submit">Pesquisar</S.BtnPesquisar>
    </S.Form>
  )
}

export default FormVagas
