import { Container } from './styles'

import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <Container>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href="https://www.linkedin.com/in/pedroh1510/">
          <a>Linkedin</a>
        </Link>
        <Link href="https://github.com/Pedroh1510">
          <a>GitHub</a>
        </Link>
      </div>
    </Container>
  )
}

export default Navbar
