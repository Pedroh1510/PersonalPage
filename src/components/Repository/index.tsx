/* eslint-disable multiline-ternary */
import { Container } from './styles'

interface RepositoryData {
  name: string
  language: string
  description: string
  site?: string
}

const Repository: React.FC<RepositoryData> = data => {
  return (
    <Container>
      <h2>{data.name}</h2>
      <div>
        <h3>
          <strong>Linguagem</strong>: {data.language}
        </h3>
        <h3>
          <strong>Descrição</strong>: {data.description}
        </h3>
        {data.site ? (
          <h3>
            <strong>site</strong>: <a href={data.site}>acessar</a>
          </h3>
        ) : null}
      </div>
    </Container>
  )
}

export default Repository
