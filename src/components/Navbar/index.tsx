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
        <a>Linkedin</a>
        <a>GitHub</a>
      </div>
    </Container>
  )
}

export default Navbar
