import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  font-family: Roboto;
  font-style: normal;
  background-color: ${props => props.theme.colors.secondBackground};
  margin: 1rem auto;
  border: 1px solid ${props => props.theme.colors.secondBorder};
  border-radius: 1rem;
  width: 30rem;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.colors.secondText};

  h2 {
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
  }

  h3 {
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 1rem;
    padding: 1rem;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.textLink};
    transition: 0.3s;
    &:hover {
      color: ${shade(0.15, '#D6837A')};
    }
  }
`
