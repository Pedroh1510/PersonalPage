import { Container } from '../styles/pages/about'
import Navbar from '../components/Navbar'

const about: React.FC = () => {
  return (
    <>
      <Navbar />
      <title>Sobre</title>
      <Container>
        <h2>Ola, sou o Pedro</h2>
        <p>
          Eu sou desenvolvedor full-stack, atualmente cursando ciência da
          computação.
        </p>
      </Container>
    </>
  )
}

export default about
