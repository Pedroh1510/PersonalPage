import { GetStaticProps } from 'next'
import Navbar from '../components/Navbar'
import Repository from '../components/Repository'

import { Container, ListRepositories } from '../styles/pages/home'

interface User {
  login: string
  avatar: string
  name: string
  repositories: number
}

interface Repo {
  name: string
  language: string
  description: string
  homepage: string
}

interface UserData {
  user: User
  repositories: Repo[]
}

const Home: React.FC<UserData> = ({ user, repositories }) => {
  return (
    <div>
      <Navbar />
      <title>{user.login}</title>
      <Container>
        <h1>{user.name}</h1>
        <h2>Repositórios: {user.repositories}</h2>
        <ListRepositories>
          {repositories.map(repository => (
            <Repository
              key={repository.name}
              name={repository.name}
              description={repository.description}
              language={repository.language}
              site={repository.homepage}
            />
          ))}
        </ListRepositories>
      </Container>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // https://api.github.com/users/pedroh1510
  const user = await (
    await fetch('https://api.github.com/users/pedroh1510')
  ).json()
  const repos = await (
    await fetch('https://api.github.com/users/pedroh1510/repos')
  ).json()

  repos.filter(repo => {
    if (!repo.fork) {
      return true
    }
    return false
  })

  return {
    props: {
      user: {
        avatar: user.avatar_url,
        login: user.login,
        name: user.name,
        repositories: user.public_repos
      },
      repositories: repos
    },
    revalidate: 600
  }
}

export default Home
