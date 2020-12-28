import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.navbarColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 50rem;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid transparent;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  a {
    height: 55px;
    min-width: 30px;
    color: ${props => props.theme.colors.navbarText};
    text-decoration: none;
    text-align: center;
    padding: 0 5px;
    transition: 0.5s;
    &:hover {
      background-color: ${props => props.theme.colors.navbarTextBackground};
    }
  }
`
